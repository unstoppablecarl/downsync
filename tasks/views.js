import gulp from 'gulp'
import { exec } from 'child_process'
import util from 'util'

gulp.task('views', function () {
    const execPromise = util.promisify(exec)

    return execPromise('npm run build --color always')
})
