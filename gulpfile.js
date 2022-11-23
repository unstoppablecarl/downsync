import gulp from 'gulp'
import yargs from 'yargs'
import c from 'ansi-colors'

import './tasks/clean.js'
import './tasks/notify.js'
import './tasks/scripts.js'
import './tasks/styles.js'
import './tasks/views.js'
import './tasks/images.js'
import './tasks/webserver.js'

const argv = yargs().argv
const production = !!argv.production

if (production) {
    console.log(c.green.bold.underline('🚚 Production mode'))
} else {
    console.log(c.yellow.bold.underline('🔧 Development mode'))
}

const paths = {
    dist: './dist/',
    views: {
        src: './src/views/templates/**/*.hbs',
        pages: './src/views/templates/',
        partials: './src/views/partials/',
        helpers: './src/views/helpers/',
        data: './src/views/data',
        dist: './dist/',
        watch: [
            './src/data/**/*.js',
            './src/views/**/*.{hbs,js}',
        ],
    },
    styles: {
        src: './src/sass/*.{scss,sass}',
        dist: './dist/assets/css/',
        watch: './src/sass/**/*.{scss,sass}',
    },
    scripts: {
        src: './src/js/main.js',
        dist: './dist/assets/js/',
        watch: './src/js/**/*.js',
    },
    images: {
        src: './images/**/*',
        dist: './dist/assets/img',
    },
}

const config = {
    production: production,
    plumber: {
        errorHandler: function (error) {
            console.log(c.red(error.message))
            this.emit('end')
        },
    },
}

gulp.task('default',
    gulp.series('clean', gulp.parallel('styles', 'scripts', 'views', 'images'), 'server'))

gulp.task(
    'build',
    gulp.series('clean', gulp.parallel('styles', 'scripts', 'views', 'images'), 'say:build'))

export { paths, config }
