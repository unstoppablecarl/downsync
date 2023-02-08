import gulp from 'gulp'
import { exec } from 'child_process'
import util from 'util'
import browsersync from 'browser-sync'
import { generateSvgSprites } from './svg.js'

const execPromise = util.promisify(exec)

gulp.task('views', function () {

    return generateSvgSprites()
        .then(() => {
            return execPromise('npm run build-views --color always')
                .then(browsersync.reload)
        })

})
