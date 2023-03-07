import fs from 'fs'
import path from 'path'
import buildTemplates from './templates.js'
import util from 'util'
import { buildRootData } from './views/root-template-data.js'
import Handlebars from 'handlebars'
import {
    ALL_UNITS,
    cardsToPages,
    FACTION_UNITS,
    prepareSplitCards,
} from './views/templates-data/support/page-card-data.js'
import { COALITION_FACTION_SLUG } from './data/constants.js'

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
        buildFactionCardPages(rootData),
    ])
}

function buildPages(templates, rootData) {
    return Promise.all(
        Object.keys(templates).map((key) => {
            let template = templates[key]

            let dest = `${dist}/${key}.html`
            let tplDataFile = `${tplDataPath}/${key}.js`

            let target = path.resolve(tplDataFile)

            return fileExists(target)
                .then((exists) => {

                    if (!exists) {
                        let contents = template(rootData)

                        return fs.promises.writeFile(dest, contents, 'utf8')

                    } else {

                        return import(target)
                            .then((tplData) => {

                                let mergedData = Object.assign({}, rootData, tplData)
                                let contents = template(mergedData)

                                return fs.promises.writeFile(dest, contents, 'utf8')
                            })
                    }
                })
        }),
    )
}

async function buildFactionCardPages(rootData) {

    let contents = await fs.promises.readFile('./src/views/templates-dynamic/faction-unit-cards-print.hbs', 'utf-8')
    let template = Handlebars.compile(contents)

    return Promise.all(
        FACTION_UNITS.map(({
                               faction,
                               faction_slug,
                               factionCards,
                           }) => {

            if (faction_slug === COALITION_FACTION_SLUG) {
                factionCards = prepareSplitCards(factionCards)
            }

            let dest = `${dist}/cards-print/${faction_slug}.html`
            let data = Object.assign({}, rootData, {
                faction,
                cardPages: cardsToPages(factionCards, 9),
                pageTitle: `${faction} Unit Cards`,
            })
            let contents = template(data)
            return fs.promises.writeFile(dest, contents, 'utf8')
        }),
    )
}

async function buildSingleCardPages(rootData) {

    let contents = await fs.promises.readFile('./src/views/templates-dynamic/unit-card-single.hbs', 'utf-8')
    let template = Handlebars.compile(contents)

    return Promise.all(
        ALL_UNITS.map((unit) => {

            let dest = `${dist}/cards/${unit.faction_slug}/${unit.slug}.html`
            let data = Object.assign({}, rootData, {
                singleCardData: unit,
            })
            let contents = template(data)
            return fs.promises.writeFile(dest, contents, 'utf8')
        }),
    )
}

async function prepareDirs() {
    let factionSlugs = getFactionSlugs()
    await makeDir(dist + '/cards-print')

    await makeDir(dist + '/cards')

    await Promise.all(
        factionSlugs.map((slug) => {
            return makeDir(dist + '/cards/' + slug)
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
