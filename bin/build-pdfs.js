import puppeteer from 'puppeteer'
import { createServer } from 'http-server'
import path from 'path'
import fs from 'fs'
import del from 'del'

const htmlToPdfDir = './dist/html-to-pdf'
const pdfGeneratedDir = './dist/assets/pdfs'

if (!fs.existsSync(pdfGeneratedDir)) {
    fs.mkdirSync(pdfGeneratedDir)
}

const root = path.resolve('./dist')
let server = createServer({
    root,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    cors: true,
})

server.listen(8080, async () => {

    const domain = 'http://localhost:8080'

    const files = await fs.promises.readdir(htmlToPdfDir)

    const urls = files.map((file) => {
        return domain + '/html-to-pdf/' + file
    })

    const browser = await puppeteer.launch({
        executablePath: process.env.CHROME_PATH,
        headless: true,
        args: [
            '--font-render-hinting=none',
            '--force-color-profile=srgb',
        ],
    })

    let pdfPromises = urls.map((url) => {
        return async () => {

            const baseName = path.basename(url).replace('.html', '')
            const file = baseName + '.pdf'
            const dest = pdfGeneratedDir + '/' + file

            const page = await browser.newPage()
            await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36')
            await page.goto(url, { waitUntil: 'networkidle0' })

            let screenshot = await page.screenshot()
            //await fs.promises.writeFile('./screenshots/' + baseName + '.png', screenshot)

            await page.evaluateHandle('document.fonts.ready')

            const content = await page.pdf({
                format: 'letter',
                printBackground: true,
            })

            return fs.promises.writeFile(dest, content)
        }
    })

    // convert async to promises
    pdfPromises = pdfPromises.map(fn => fn())

    await Promise.all(pdfPromises)
    await browser.close()
    server.close()

    await del(htmlToPdfDir)
})
