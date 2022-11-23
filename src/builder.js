import fs from 'fs'
import path from 'path'
import templates from './templates.js'

export default function () {
    let dist = './dist'
    let tplDataPath = './src/views/templates-data'

    if (!fs.existsSync(dist)) {
        fs.mkdirSync(dist)
    }
    Object.keys(templates).forEach(function (key) {
        let template = templates[key]

        let dest = `${dist}/${key}.html`
        let tplDataFile = `${tplDataPath}/${key}.js`

        let target = path.resolve(tplDataFile)
        if (!fs.existsSync(target)) {
            return Promise.resolve()
        }
        import(target).then((tplData) => {

            let contents = template(tplData)

            fs.writeFileSync(dest, contents, 'utf8')
        })
    })
}
