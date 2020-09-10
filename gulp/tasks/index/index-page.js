var gulp        = require('gulp');
var consolidate = require('gulp-consolidate');
var config      = require('../../config');
require('require-yaml');

gulp.task('list-pages', function() {
    return gulp
        .src(config.dest.html + '/index.html')
        .pipe(gulp.dest(config.dest.html));
});

gulp.task('list-pages:watch', function() {
    gulp.watch(config.src.root+'/*', ['list-pages']);
});

