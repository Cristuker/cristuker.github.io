const { src, dest, series, parallel } = require('gulp');
const del = require('del')
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const babel = require('gulp-babel');

function cleanPublic() {
    return del(['public'])
}

function copyHTML() {
    return src('*.html').pipe(dest('public'))
}

function minifyJs() {
    return src('js/index.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(dest('public/js'))
}

function minifyCSS() {
    return src('css/*.css')
        .pipe(cleanCSS())
        .pipe(dest('public/css'))
}



exports.default = series(cleanPublic, parallel(copyHTML, minifyJs, minifyCSS));
