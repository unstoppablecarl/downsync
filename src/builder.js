import fs from 'fs'
import path from 'path'
import buildTemplates from './templates.js'
import util from 'util'
import { buildRootData } from './views/root-template-data.js'
import Handlebars from 'handlebars'
import { ALL_UNITS } from './views/templates-data/support/page-card-data.js'
import { FEATURE_ADVISOR_CARD } from './versioning.js'

const dist = './dist'
const tplDataPath = './src/views/templates-data'
const fileExists = util.promisify(fs.exists)

export default async function (baseRootData = {}) {

    let [templates, rootData] = await Promise.all([
        buildTemplates(),
        buildRootData(),
        makeDir(dist),
    ])

    rootData = Object.assign({}, baseRootData, rootData)

    await prepareDirs()

    return Promise.all([
        buildPages(templates, rootData),
        buildSingleCardPages(rootData),
    ])
}

function buildPages(templates, rootData) {

    let exclude = [
        'advisor-cards',
        'advisor-cards-print',
        'advisor-cards-print-landscape',
    ]
    if (!FEATURE_ADVISOR_CARD) {
        exclude.forEach((slug) => {
            delete templates[slug]
        })
    }

    return Promise.all(
        Object.keys(templates).map((key) => {
            return renderTemplate(templates, key, rootData)
        }),
    )
}

async function buildSingleCardPages(rootData) {

    let contents = await fs.promises.readFile('./src/views/templates-dynamic/unit-card-single.hbs', 'utf-8')
    let template = Handlebars.compile(contents)

    return Promise.all(
        ALL_UNITS.map((unit) => {

            let dest = `${dist}/unit-cards/${unit.faction_slug}/${unit.slug}.html`
            let data = Object.assign({}, rootData, {
                singleCardData: unit,
            })
            let contents = template(data)
            return fs.promises.writeFile(dest, contents, 'utf8')
        }),
    )
}

export function getDataFilePathFromKey(key) {
    let tplDataFile = `${tplDataPath}/${key}.js`

    let target = path.resolve(tplDataFile)

    return fileExists(target)
        .then(exists => {
            if (exists) {
                return target
            }
        })
}

function renderTemplate(templates, key, rootData, outputFileName = null) {
    let template = templates[key]
    outputFileName = outputFileName || key
    let dest = `${dist}/${outputFileName}.html`

    getDataFilePathFromKey(key)
        .then((target) => {

            if (!target) {
                try {
                    let contents = template(rootData)

                    return fs.promises.writeFile(dest, contents, 'utf8')

                } catch (e) {
                    console.log('rendering: ', key)
                    throw e
                }

            } else {

                return import(target)
                    .then((tplData) => {

                        let mergedData = Object.assign({}, rootData, tplData)

                        try {
                            let contents = template(mergedData)

                            return fs.promises.writeFile(dest, contents, 'utf8')

                        } catch (e) {
                            console.log('rendering: ', key)
                            throw e
                        }
                    })
            }
        })
}

async function prepareDirs() {
    let factionSlugs = getFactionSlugs()
    await makeDir(dist + '/unit-cards')

    await Promise.all(
        factionSlugs.map((slug) => {
            return makeDir(dist + '/unit-cards/' + slug)
        }),
    )
}

function makeDir(dir) {
    return fileExists(dir)
        .then((exists) => {
            if (!exists) {
                return fs.promises.mkdir(dir)
            }
            return Promise.resolve()
        })
}

function getFactionSlugs() {
    let factionSlugs = {}

    ALL_UNITS.forEach(({ faction_slug }) => {
        factionSlugs[faction_slug] = true
    })

    return Object.keys(factionSlugs)
}
