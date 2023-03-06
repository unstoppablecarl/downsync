import gulp from 'gulp'
import plumber from 'gulp-plumber'
import svgSprite from 'gulp-svg-sprite'
import { config, paths } from '../gulpfile.js'
import path from 'path'
import importFresh from '@small-tech/import-fresh'
import gulpIntercept from 'gulp-intercept'
import del from 'del'
import { TASK_DATA } from './task-data.js'

const svgIconsPath = path.resolve('./src/views/svg-icons.js')

// this task is only used when run directly
gulp.task('svg', async function () {
    return generateSvgSprites()
})

export async function generateSvgSprites() {

    await del('./dist/assets/icons')

    return importFresh(svgIconsPath)
        .then(({
                   svgIcons,
                   svgIconsReversed,
               }) => {

            let src = Object.values(svgIcons)

            return gulp.src(src)
                .pipe(plumber(config.plumber))
                .pipe(svgSprite({
                    mode: {
                        symbol: {
                            bust: true,
                        },
                    },
                    shape: {
                        id: {
                            generator: function (f, a) {
                                let relative = './' + path.relative(process.cwd(), a.path)
                                return svgIconsReversed[relative]
                            },
                        },
                    },
                }))
                .pipe(gulpIntercept(function (file) {
                    TASK_DATA.svg_file = path.basename(file.path)
                    return file
                }))
                .pipe(gulp.dest(paths.svg.dist))

        })
}
