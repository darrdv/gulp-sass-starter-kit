const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

const paths = {
    default: './',
    sass: {
        src: './src/scss/**/*.scss',
        dest: './css'
    },
    html: './*.html',
    js: './src/js/**/*.js'

    /*,
    minify: {
        src: './css/*.css',
        dest: './css'
    }
    */
};