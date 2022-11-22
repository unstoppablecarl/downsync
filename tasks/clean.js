import gulp from 'gulp'
import del from 'del'
import { paths } from '../gulpfile.js'
import clean from 'gulp-clean'


// -------------------------------------
//   Task: clean
// -------------------------------------

gulp.task('clean', function () {
  return del(paths.dist)

  //return Promise.resolve()
  //return gulp.src(paths.dist, {read: false})
  //    .pipe(clean());

  //return del('./dist/').catch(err => {
  //  console.log(err)
  //  throw err
  //})
})
