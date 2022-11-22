import path from 'path'
import { paths } from '../../../gulpfile.js'

export default {
    register(Handlebars) {

        Handlebars.registerHelper('null_dash', null_dash)
        Handlebars.registerHelper('style_font_size', style_font_size)
        Handlebars.registerHelper('time', function () {

            return (new Date()).getTime()
        })

        Handlebars.registerHelper('json', function (context) {
            return JSON.stringify(context)
        })

        Handlebars.registerHelper('indexDir', indexDir(Handlebars))

        Handlebars.registerHelper('assets', assets(Handlebars))
    },
}


function null_dash(value) {
    if (value === null || value === undefined) {
        return '-'
    }

    return value
}

function style_font_size(value) {
    if (!value) {
        return ''
    }

    return ` style="font-size: ${value}"`
}


function indexDir(Handlebars) {
    return function (options) {

        let file

        if (options.data.file) {
            file = options.data.file
        } else {
            file = options.data.root.file
        }

        let relative = path.relative(paths.views.pages, path.relative(file.cwd, path.dirname(file.path)))
        let currentPath = path.join(paths.views.dist, relative)

        let index = path.relative(currentPath, paths.dist).split('\\').join('/')

        if (!index) {
            index = '.'
        }

        return new Handlebars.SafeString(index)
    }
}

function assets(Handlebars) {
    return function (options) {
        let file

        if (options.data.file) {
            file = options.data.file
        } else {
            file = options.data.root.file
        }

        let relative = path.relative(paths.views.pages, path.relative(file.cwd, path.dirname(file.path)))
        let currentPath = path.join(paths.views.dist, relative)

        return new Handlebars.SafeString(path.relative(currentPath, paths.assets.dist).split('\\').join('/'))
    }
}
