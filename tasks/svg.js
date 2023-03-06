import gulp from 'gulp'
import plumber from 'gulp-plumber'
import svgSprite from 'gulp-svg-sprite'
import { config, paths } from '../gulpfile.js'
import path from 'path'
import importFresh from '@small-tech/import-fresh'
import gulpIntercept from 'gulp-intercept'
import del from 'del'

const svgIconsPath = path.resolve('./src/views/svg-icons.js')

export const SVG_SPRITE = {
    PATH: null,
}

let SVG_ICONS = {}

gulp.task('svg-data', async function () {
    await del('./dist/assets/icons')

    SVG_ICONS = await importFresh(svgIconsPath)
})

gulp.task('svg-build', () => {

    const {
        svgIcons,
        svgIconsReversed,
    } = SVG_ICONS

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
            SVG_SPRITE.PATH = '/assets/icons/symbol/svg/' + path.basename(file.path)
            return file
        }))
        .pipe(gulp.dest(paths.svg.dist))
})

// this task is only used when run directly
gulp.task('svg', gulp.series([
    'svg-data',
    'svg-build',
]))
