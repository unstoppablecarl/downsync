import gulp from 'gulp'
import del from 'del'
import { paths } from '../gulpfile.js'

gulp.task('clean', function () {
  return del(paths.clean.targets)
})
