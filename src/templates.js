import fs from 'fs'
import path from 'path'
import Handlebars from 'handlebars'
import helpers from './views/helpers/handlebars-helpers.js'

let tplDir = './src/views/templates/'
tplDir = path.resolve(tplDir)

let partialsDir = './src/views/partials/'
partialsDir = path.resolve(partialsDir)

let partials = dirToTemplates(partialsDir)

Handlebars.registerPartial(partials)
Handlebars.registerHelper(helpers)

export default dirToTemplates(tplDir)

function dirToTemplates(tplDir) {
    let files = fs.readdirSync(tplDir)
    let templates = {}

    files.forEach(function (file) {
        let filePath = path.resolve(tplDir + '/' + file)

        let key = path.basename(file, '.hbs')
        let tpl = fs.readFileSync(filePath, 'utf-8')

        templates[key] = Handlebars.compile(tpl)
    })

    return templates
}
