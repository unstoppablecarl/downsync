import fs from 'fs'
import path from 'path'
import buildTemplates from './templates.js'
import util from 'util'

const dist = './dist'
const tplDataPath = './src/views/templates-data'
const fileExists = util.promisify(fs.exists)

export default function () {

    if (!fs.existsSync(dist)) {
        fs.mkdirSync(dist)
    }

    Promise.all([
            buildTemplates(),
            buildRootData(),
        ])

        .then((values) => {

            let templates = values[0]
            let rootData = values[1]
            Object.keys(templates).forEach(function (key) {
                let template = templates[key]

                let dest = `${dist}/${key}.html`
                let tplDataFile = `${tplDataPath}/${key}.js`

                let target = path.resolve(tplDataFile)

                fileExists(target)
                    .then((exists) => {

                        if (!exists) {
                            let contents = template(rootData)

                            fs.promises.writeFile(dest, contents, 'utf8')

                        } else {

                            import(target).then((tplData) => {

                                let mergedData = Object.assign({}, rootData, tplData)
                                let contents = template(mergedData)

                                fs.promises.writeFile(dest, contents, 'utf8')
                            })
                        }
                    })
            })
        })
}

async function buildRootData() {

    let svgIconsPath = await getSvgSpriteFile()
    return {
        svgIconsPath,
    }
}

const svgIconSpriteFileDir = './dist/assets/icons/symbol/svg'

async function getSvgSpriteFile() {
    return fs.promises.readdir(svgIconSpriteFileDir)
        .then((files) => {

            if (files.length !== 1) {
                throw new Error('expected exactly 1 svg icon file but found: ' + files.join(', '))
            }
            return '/assets/icons/symbol/svg/' + files[0]
        })
}
