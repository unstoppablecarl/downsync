import gulp from 'gulp'
import { exec } from 'child_process'
import util from 'util'
import browsersync from 'browser-sync'

const execPromise = util.promisify(exec)

gulp.task('view-templates', function () {
    return execPromise('npm run build-views --color always')
        .then(browsersync.reload)
})
gulp.task('views', gulp.series('svg', 'view-templates'))
