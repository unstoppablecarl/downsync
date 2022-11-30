import gulp from 'gulp'
import browsersync from 'browser-sync'
import { paths } from '../gulpfile.js'

gulp.task('server', function (done) {
  browsersync.init({
    server: './dist/',
    port: 4000,
    notify: true,
  })

  gulp.watch(paths.views.watch, { usePolling: true }, gulp.parallel('views'))
  gulp.watch(paths.styles.watch, { usePolling: true }, gulp.parallel('styles'))
  gulp.watch(paths.webpack.watch, { usePolling: true }, gulp.parallel('webpack'))
  gulp.watch(paths.favicons.watch, { usePolling: true }, gulp.parallel('favicons'))
  gulp.watch(paths.images.src, { usePolling: true }, gulp.parallel('images'))

  return done()
})
