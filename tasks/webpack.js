import gulp from 'gulp'
import plumber from 'gulp-plumber'
import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import webpackConfig from '../webpack.config.js'
import browsersync from 'browser-sync'
import { config, paths } from '../gulpfile.js'
import { SVG_SPRITE } from './svg.js'

gulp.task('webpack', function () {
  webpackConfig.mode = config.production ? 'production' : 'development'
  webpackConfig.devtool = config.production ? false : 'source-map'

  webpackConfig.plugins.pop()
  webpackConfig.plugins.push(new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: 'true',
    __VUE_PROD_DEVTOOLS__: config.production ? 'false' : 'true',
    __SVG_SPRITE_PATH__: `'${SVG_SPRITE.PATH}'`,
  }))

  return gulp.src(paths.webpack.src)
      .pipe(plumber(config.plumber))
      .pipe(webpackStream(webpackConfig, webpack))
      .pipe(gulp.dest(paths.webpack.dist))
      .on('end', browsersync.reload)
})
