import gulp from 'gulp'
import { exec } from 'child_process'
import util from 'util'
import browsersync from 'browser-sync'
import { SVG_SPRITE } from './svg.js'

const execPromise = util.promisify(exec)

gulp.task('view-templates', function () {
    return buildViews()
})

gulp.task('view-templates-local-fonts', function () {
    return buildViews({ local_fonts: true })
})

function buildViews(rootData = {}) {
    let baseRootData = {
        SVG_SPRITE_PATH: SVG_SPRITE.PATH,
        local_fonts: true,
    }

    baseRootData = Object.assign(baseRootData, rootData)

    let json = JSON.stringify(baseRootData)

    return execPromise(`npm run build-views --color always payload='${json}'`)
        .then(browsersync.reload)
}
