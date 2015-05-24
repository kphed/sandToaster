'use strict';

var gulp = require('gulp'),
  minifycss = require('gulp-minify-css'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  jshint = require('gulp-jshint'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify'),
  del = require('del');



gulp.task('scripts', function() {
  return gulp.src('public/js/**/*.js')
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('default'))
  .pipe(concat('main.js'))
  .pipe(gulp.dest('public/dist/js'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(uglify())
  .pipe(gulp.dest('public/dist/js'))
  .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('styles', function() {
  return gulp.src('public/stylesheets/*.css')
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('public/dist/stylesheets'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('clean', function(cb) {
    del(['public/dist/js', 'public/dist/stylesheets'], cb);
});

gulp.task('default', ['clean'], function() {
  gulp.start('scripts', 'styles');
});