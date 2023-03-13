import gulp from 'gulp'
import { exec } from 'child_process'
import util from 'util'
import { config } from '../gulpfile.js'
import plumber from 'gulp-plumber'
import browsersync from 'browser-sync'
import del from 'del'

const execPromise = util.promisify(exec)

gulp.task('generate-pdfs', function () {
    return execPromise('npm run build-pdfs --color always')
})

gulp.task('copy-pdf-local-fonts', function () {
    return gulp.src('./static-assets/local-fonts/*')
        .pipe(plumber(config.plumber))
        .pipe(gulp.dest('./dist/assets/pdf-local-fonts'))
        .pipe(browsersync.stream())
})

gulp.task('remove-pdf-local-fonts', function () {
    return del('./dist/assets/pdf-local-fonts')
})

gulp.task('copy-pdfs', function () {
    return gulp.src('./static-assets/pdfs/**/*.pdf')
        .pipe(plumber(config.plumber))
        .pipe(gulp.dest('./dist/assets/pdfs'))
        .pipe(browsersync.stream())
})

gulp.task('pdfs', gulp.series([
    'copy-pdf-local-fonts',
    'generate-pdfs',
    'remove-pdf-local-fonts',
    'copy-pdfs',
]))
