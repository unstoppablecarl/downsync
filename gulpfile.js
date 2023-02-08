import gulp from 'gulp'
import c from 'ansi-colors'

import './tasks/clean.js'
import './tasks/notify.js'
import './tasks/webpack.js'
import './tasks/svg.js'
import './tasks/styles.js'
import './tasks/views.js'
import './tasks/pdfs.js'
import './tasks/images.js'
import './tasks/favicons.js'
import './tasks/webserver.js'

const production = process.argv.indexOf('--production') !== -1

if (production) {
    console.log(c.green.bold.underline('🚚 Production mode'))
} else {
    console.log(c.yellow.bold.underline('🔧 Development mode'))
}

const paths = {
    dist: './dist/',
    clean: {
        targets: [
            './dist/',
        ],
    },
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
            './src/markdown/**/*.md',
            './src/builder.js',
            './src/templates.js',
            './src/versioning.js',
        ],
    },
    styles: {
        src: './src/sass/*.{scss,sass}',
        dist: './dist/assets/css/',
        watch: './src/sass/**/*.{scss,sass}',
    },
    webpack: {
        src: './src/js/main.js',
        dist: './dist/assets/',
        watch: [
            './src/js/**/*.js',
        ],
    },
    images: {
        src: './static-assets/images/**/*',
        dist: './dist/assets/img',
    },
    svg: {
        src: './static-assets/images/svg-icons/*',
        dist: './dist/assets/icons',
        watch: './src/views/svg-icons.js',
    },
    favicons: {
        src: './static-assets/favicons/*',
        dist: './dist',
        watch: './static-assets/favicons/*',
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

let parallel = gulp.parallel(
    'webpack',
    'styles',
    'views',
    'images',
    'favicons',
)

gulp.task('default',
    gulp.series('clean', parallel, 'server'),
)

gulp.task(
    'build',
    gulp.series('clean', parallel, 'say:build'),
)

export { paths, config }
