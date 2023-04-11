import gulp from 'gulp'
import { deleteAsync } from 'del'
import { paths } from '../gulpfile.js'

gulp.task('clean', function () {
  return deleteAsync(paths.clean.targets)
})
