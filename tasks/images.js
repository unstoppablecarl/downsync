import gulp from 'gulp'
import browsersync from 'browser-sync'
import { config, paths } from '../gulpfile.js'
import plumber from 'gulp-plumber'

gulp.task('images', function () {
    return gulp.src(paths.images.src)
        .pipe(plumber(config.plumber))
        .pipe(gulp.dest(paths.images.dist))
        .pipe(browsersync.stream())
})

