import gulp from 'gulp'
import browsersync from 'browser-sync'
import { config, paths } from '../gulpfile.js'
import plumber from 'gulp-plumber'

gulp.task('favicons', function () {
    return gulp.src(paths.favicons.src)
        .pipe(plumber(config.plumber))
        .pipe(gulp.dest(paths.favicons.dist))
        .pipe(browsersync.stream())
})

