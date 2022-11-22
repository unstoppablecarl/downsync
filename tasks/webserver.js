import gulp from 'gulp'
import browsersync from 'browser-sync'
import { paths } from '../gulpfile.js'


// -------------------------------------
//   Tast: server
// -------------------------------------

gulp.task('server', function (done) {
  browsersync.init({
    server: './dist/',
    port: 4000,
    notify: true,
  })

  gulp.watch(paths.views.watch, { usePolling: true }, gulp.parallel('views'))
  gulp.watch(paths.styles.watch, { usePolling: true }, gulp.parallel('styles'))
  gulp.watch(paths.scripts.watch, { usePolling: true }, gulp.parallel('scripts'))

  return done()
})
