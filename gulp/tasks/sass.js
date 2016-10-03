var gulp = require('gulp');
var sass = require('gulp-sass');
var config = require('../config');

gulp.task('sass', function () {
  gulp.src(config.sass.src)
    .pipe(sass({includePaths: ['node_modules/susy/sass','node_modules/breakpoint-sass/stylesheets']}).on('error', sass.logError))
    .pipe(gulp.dest(config.sass.dest));
});
