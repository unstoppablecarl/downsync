import fs from 'fs'
import path from 'path'
import buildTemplates from './templates.js'
import util from 'util'

export default function () {

    let dist = './dist'
    let tplDataPath = './src/views/templates-data'

    if (!fs.existsSync(dist)) {
        fs.mkdirSync(dist)
    }

    let fileExists = util.promisify(fs.exists)
    buildTemplates()
        .then((templates) => {
            Object.keys(templates).forEach(function (key) {
                let template = templates[key]

                let dest = `${dist}/${key}.html`
                let tplDataFile = `${tplDataPath}/${key}.js`

                let target = path.resolve(tplDataFile)

                fileExists(target)
                    .then((exists) => {

                        if (!exists) {
                            let contents = template()

                            fs.promises.writeFile(dest, contents, 'utf8')

                        } else {

                            import(target).then((tplData) => {

                                let contents = template(tplData)

                                fs.promises.writeFile(dest, contents, 'utf8')
                            })
                        }
                    })
            })
        })
}
