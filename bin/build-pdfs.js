import puppeteer from 'puppeteer'
import { createServer } from 'http-server'
import path from 'path'
import fs from 'fs'
import { FACTIONS, SCENARIO_FACTION_SLUG } from '../src/data/constants.js'
import { FEATURE_ADVISOR_CARD, FEATURE_SCENARIO_UNITS } from '../src/versioning.js'

const pdfGeneratedDir = './static-assets/pdfs'

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

    const pages = [
        {
            url: domain + '/quick-reference-print.html',
            output: `quick-reference`,
        },
        {
            url: domain + '/rules-print.html',
        },
    ]

    let filterSlugs = FACTIONS.map(({ faction_slug }) => faction_slug)
    filterSlugs.push('all')

    if (FEATURE_SCENARIO_UNITS) {
        filterSlugs.push(SCENARIO_FACTION_SLUG)
    }

    filterSlugs.forEach((faction_slug) => {

        let slugs = [
            'unit-cards-print',
            'unit-cards-print-landscape',

            'unit-cards-starter-print',
            'unit-cards-starter-print-landscape',
        ]

        if (FEATURE_ADVISOR_CARD) {
            slugs = slugs.concat([
                'advisor-cards-print',
                'advisor-cards-print-landscape',
            ])
        }

        slugs.forEach((slug) => {
            pages.push({
                url: `${domain}/${slug}.html#${faction_slug}`,
                output: `${faction_slug}-${slug}`,
            })
        })
    })

    const browser = await puppeteer.launch({
        executablePath: process.env.CHROME_PATH,
        headless: true,
        //slowMo: 250,
        args: [
            '--font-render-hinting=none',
            '--force-color-profile=srgb',
        ],
    })

    let pdfPromises = pages.map(({
                                     url,
                                     output,
                                 }) => {
        return async () => {

            const baseName = output || path.basename(url).replace('.html', '')
            const file = baseName + '.pdf'
            const dest = pdfGeneratedDir + '/' + file

            const page = await browser.newPage()
            page.on('console', msg => {
                console.log('LOG ' + msg.type() + ': ', msg.location())
                console.log(' - text: ' + msg.text())

            })

            await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36')
            await page.goto(url, { waitUntil: 'networkidle0' })

            let screenshot = await page.screenshot()
            //await fs.promises.writeFile('./screenshots/' + baseName + '.png', screenshot)

            await page.evaluateHandle('document.fonts.ready')

            const content = await page.pdf({
                format: 'letter',
                printBackground: true,
            })
            console.log(dest)
            return fs.promises.writeFile(dest, content)
        }
    })

    // convert async to promises
    pdfPromises = pdfPromises.map(fn => fn())

    await Promise.all(pdfPromises)
    await browser.close()
    server.close()

})
