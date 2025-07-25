const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('scss/green.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask(){
    watch(['scss/green.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)