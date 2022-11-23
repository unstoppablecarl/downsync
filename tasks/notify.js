import gulp from 'gulp'
import notifier from 'node-notifier'

gulp.task('say:build', function (done) {
  notifier.notify({
    title: 'Build complete!',
    message: 'ok!',
  })

  return done()
})
