import gulp from 'gulp'
import { exec } from 'child_process'
import util from 'util'
import browsersync from 'browser-sync'

gulp.task('views', function () {
    const execPromise = util.promisify(exec)

    return execPromise('npm run build-views --color always')
        .then(browsersync.reload)
})
