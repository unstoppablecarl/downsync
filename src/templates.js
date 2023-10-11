import fs from 'fs'
import path from 'path'
import Handlebars from './handlebars.js'
import globPromise from 'glob-promise'

let tplDir = './src/views/templates/'
let partialsDir = './src/views/partials/'

tplDir = path.resolve(tplDir)
partialsDir = path.resolve(partialsDir)

export default async function buildTemplates() {
    return Promise.all([
        dirToTemplates(partialsDir, '/**/*.hbs'),
        dirToTemplates(tplDir, '/**/*.hbs'),
    ]).then((results) => {

        let partials = results[0]
        let templates = results[1]

        Handlebars.registerPartial(partials)

        return templates
    })
}

export function getTemplateFilePathsWithKeys() {
    return getFilePathsWithKeys(tplDir, '/**/*.hbs')
}

function getFilePathsWithKeys(tplDir, glob) {
    return globPromise(tplDir + glob)
        .then((files) => {
            return files.map((file) => {
                return {
                    filePath: path.resolve(file),
                    key: getKey(tplDir, file),
                }
            })
        })
}

function dirToTemplates(tplDir, glob) {

    return getFilePathsWithKeys(tplDir, glob)
        .then((files) => {

            let templates = {}

            let promises = files.map(({
                                          filePath,
                                          key,
                                      }) => {
                return fs.promises.readFile(filePath, 'utf-8')
                    .then((tpl) => {
                        templates[key] = Handlebars.compile(tpl, { strict: true })
                    })
            })

            return Promise.all(promises)
                .then(() => {
                    return templates
                })
        })
}

function getKey(tplDir, file) {
    let re = new RegExp(`${tplDir}/(.*?).hbs`)
    let matches = file.match(re)
    return matches[1]
}
