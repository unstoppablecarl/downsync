import hb from 'gulp-hb'
import gulp from 'gulp'
import plumber from 'gulp-plumber'
import browsersync from 'browser-sync'
import hbLayouts from 'handlebars-layouts'
import { config, paths } from '../gulpfile.js'
import rename from 'gulp-rename'
import data from 'gulp-data'
import * as fs from 'fs'
import helpers from '../src/views/helpers/handlebars-helpers.js'

// -------------------------------------
//   Task: views
// -------------------------------------

gulp.task('views', function () {

    //return Promise.resolve();

    return importFresh('../src/views/templates-data/site-data.js')
        .then((siteData) => {

            let hbStream = hb({
                //debug: true
            })
                .partials(paths.views.partials + '**/*.{hbs,html}')
                .data(siteData.default)

                // Helpers
                .helpers(hbLayouts)
                .helpers(helpers)

            return gulp.src(paths.views.src)
                .pipe(plumber(config.plumber))
                .pipe(data((file) => {
                    let target = file.path.replace('.hbs', '.js')
                        .replace('/templates/', '/templates-data/')

                    if (!fs.existsSync(target)) {
                        return {}
                    }
                    return importFresh(target)
                }))
                .pipe(hbStream)
                .pipe(rename(function (path) {
                    path.extname = '.html'
                }))
                .pipe(gulp.dest(paths.views.dist))
                .on('end', browsersync.reload)

        })
})

async function importFresh(modulePath) {
    const cacheBustingModulePath = `${modulePath}?update=${Date.now()}`
    return (await import(cacheBustingModulePath))
}
