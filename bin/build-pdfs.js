import puppeteer from 'puppeteer'
import { createServer } from 'http-server'
import path from 'path'
import fs from 'fs'

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

    const urls = [
        domain + '/unit-cards-print.html',
        domain + '/unit-cards-starter-print.html',
        domain + '/unit-cards-starter-print-landscape.html',
        domain + '/quick-reference.html',
    ]

    const browser = await puppeteer.launch({ headless: true })

    let pdfPromises = urls.map((url) => {
        return async () => {

            const page = await browser.newPage()
            const content = await getPdf({
                page,
                url,
            })

            const baseName = path.basename(url).replace('.html', '')
            const file = baseName + '.pdf'
            const dest = pdfGeneratedDir + '/' + file

            return fs.promises.writeFile(dest, content)
        }
    })

    // convert async to promises
    pdfPromises = pdfPromises.map(fn => fn())

    await Promise.all(pdfPromises)
    await browser.close()
    server.close()

})

async function getPdf({
                          page,
                          url,
                      }) {
    await page.goto(url, { waitUntil: 'networkidle0' })
    return page.pdf({
        format: 'letter',
        printBackground: true,
    })
}
