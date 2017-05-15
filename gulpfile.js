const gulp = require('gulp');
const inlineResources = require('./scripts/gulp/inline-resources');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const del = require('del');

gulp.task('copy-and-inline-resource', copyHtml);

function copyHtml() {
  gulp.src('./src/lib/**/*.html')
    .pipe(gulp.dest('./dist/src/lib')).on('end', copyAssets);
}

function copyAssets() {
  gulp.src('./src/assets/**/*')
    .pipe(gulp.dest('./dist/src/assets')).on('end', copyScss);
}

function copyScss() {
  gulp.src(['./src/lib/**/*.scss', './src/lib/styles.scss'])
    .pipe(sass())
    .pipe(rename({
      extname: '.scss'
    }))
    .pipe(gulp.dest('./dist/src/lib')).on('end', copyGlobalCss);
}

function copyGlobalCss() {
  gulp.src('./src/lib/lib-styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('./dist/src/lib')).on('end', inlineResource);
}

function inlineResource() {
  inlineResources('./dist/src/lib').then(function () {
    cleanup()
  });
}

function cleanup() {
  del.sync(['./dist/src/lib/**/*.html', './dist/src/lib/**/*.scss', '!./dist/src/lib/lib-styles.scss']);
}

gulp.task('default', ['copy-and-inline-resource']);
