import gulp from 'gulp'
import { exec } from 'child_process'
import util from 'util'
import { config, paths } from '../gulpfile.js'
import plumber from 'gulp-plumber'
import browsersync from 'browser-sync'

const execPromise = util.promisify(exec)

gulp.task('pdfs', function () {
    return execPromise('npm run build-pdfs --color always')
})

gulp.task('copy-pdfs', function () {
    return gulp.src(paths.copy_pdfs.src)
        .pipe(plumber(config.plumber))
        .pipe(gulp.dest(paths.copy_pdfs.dist))
        .pipe(browsersync.stream())
})
