import fs from 'fs'
import path from 'path'
import Handlebars from 'handlebars'
import helpers from './views/helpers/handlebars-helpers.js'

let tplDir = './src/views/templates/'
tplDir = path.resolve(tplDir)

let partialsDir = './src/views/partials/'
partialsDir = path.resolve(partialsDir)

Handlebars.registerHelper(helpers)

export default async function buildTemplates() {

    return Promise.all([
        dirToTemplates(partialsDir),
        dirToTemplates(tplDir),
    ]).then((results) => {

        let partials = results[0]
        let templates = results[1]

        Handlebars.registerPartial(partials)

        return templates
    })
}

function dirToTemplates(tplDir) {

    return fs.promises.readdir(tplDir)
        .then((files) => {
            let templates = {}

            let promises = files.map(function (file) {
                let filePath = path.resolve(tplDir + '/' + file)

                let key = path.basename(file, '.hbs')

                return fs.promises.readFile(filePath, 'utf-8')
                    .then((tpl) => {
                        templates[key] = Handlebars.compile(tpl)
                    })
            })

            return Promise.all(promises)
                .then(() => {
                    return templates
                })
        })
}
