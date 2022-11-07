import fs from 'fs'
import path from 'path'
import Handlebars from 'handlebars'

var ext = '.tpl'
var tplPath = './templates/'
var tplDir = path.resolve(tplPath)

var templates = {}
var files = fs.readdirSync(tplDir)

files.forEach(function (file) {
    var filePath = path.resolve(tplPath + file)
    var key = path.basename(file, ext)

    var tpl = fs.readFileSync(filePath, 'utf-8')

    templates[key] = Handlebars.compile(tpl)
})

Handlebars.registerPartial(templates)
Handlebars.registerHelper('null_dash', function (value) {
    if (value === null || value === undefined) {
        return '-'
    }

    return value
})

Handlebars.registerHelper('style_font_size', function (value) {
    if (!value) {
        return ''
    }

    return ` style="font-size: ${value}"`
})
export default templates
