import gulp from 'gulp'
import { exec } from 'child_process'
import util from 'util'

const execPromise = util.promisify(exec)

gulp.task('pdfs', function () {
    return execPromise('npm run build-pdfs --color always')
})
