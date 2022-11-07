import nodeSass from 'node-sass'
import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import sourcemaps from 'gulp-sourcemaps'
import { exec } from 'child_process'
import util from 'util'

const sass = gulpSass(nodeSass)

export const renderSass = function () {
    return gulp.src([
            './public/sass/page-cards-print.scss',
            './public/sass/page-cards-web.scss',
            './public/sass/page-army-lists.scss',
        ])
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./public/css'))
}

export function buildCode() {

    const execPromise = util.promisify(exec)

    return execPromise('npm run build --color always')
}

export const watchSass = function () {
    return gulp.watch(['./public/sass/**/*.scss'], { events: 'all' }, renderSass)
}

export const watchCode = function () {
    return gulp.watch([
        './src/**/*.js',
        './data/**/*.js',
        './templates/*.tpl',
        './templates/*',
        './templates/**/*.tpl',
    ], { events: 'all' }, buildCode)
}

export const watch = () => {
    buildCode()
    renderSass()

    watchCode()
    watchSass()
}
