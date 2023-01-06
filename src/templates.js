import fs from 'fs'
import path from 'path'
import Handlebars from 'handlebars'
import helpers from './views/helpers/handlebars-helpers.js'
import globPromise from 'glob-promise'
import layouts from 'handlebars-layouts'

let tplDir = './src/views/templates/'
let partialsDir = './src/views/partials/'

tplDir = path.resolve(tplDir)
partialsDir = path.resolve(partialsDir)

Handlebars.registerHelper(helpers)
Handlebars.registerHelper(layouts(Handlebars))

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

    return globPromise(tplDir + '/**/*.hbs')
        .then((files) => {
            let templates = {}

            let promises = files.map(function (file) {
                let filePath = path.resolve(file)
                let key = getKey(tplDir, file)

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

    function getKey(tplDir, file) {
        let re = new RegExp(`${tplDir}/(.*?).hbs`)
        let matches = file.match(re)
        return matches[1]
    }
}
