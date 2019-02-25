'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const prefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const { reload } = browserSync;


const config = {
  server: {
    baseDir: './dest'
  },
  port: 6996,
  logPrefix: 'Succesful connected'
};

gulp.task('webserver', () => browserSync(config));

gulp.task('html:build', () => gulp.src('src/*.html')
  .pipe(gulp.dest('dest/'))
  .pipe(reload({ stream: true })));

gulp.task('js:build', () => gulp.src(
  [
    'src/**/index.js',
    'src/**/service.js',
    'src/**/controller.js'
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('index.js'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dest/js'))
  .pipe(reload({ stream: true })));

gulp.task('style:build', () => gulp.src(['src/styles/**/main.scss'])
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(prefixer())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dest/css/'))
  .pipe(reload({ stream: true })));

gulp.task('build', [
  'html:build',
  'js:build',
  'style:build'
]);


gulp.task('watch', () => {
  watch(['src/**/*.html'], () => gulp.start('html:build'));
  watch(['src/styles/**/*.scss'], () => gulp.start('style:build'));
  watch(['src/js/*.js'], () => gulp.start('js:build'));
});

gulp.task('default', ['build', 'webserver', 'watch']);