import gulp from 'gulp'
import { exec } from 'child_process'
import util from 'util'
import browsersync from 'browser-sync'
import { SVG_SPRITE } from './svg.js'

const execPromise = util.promisify(exec)

const production = process.argv.indexOf('--production') !== -1

gulp.task('view-templates', function () {
    let baseRootData = {
        SVG_SPRITE_PATH: SVG_SPRITE.PATH,
        ENV_PRODUCTION: production,

    }

    let json = JSON.stringify(baseRootData)

    return execPromise(`npm run build-views --color always payload='${json}'`)
        .then(browsersync.reload)
})
