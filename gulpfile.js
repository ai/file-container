var gulp = require('gulp');

gulp.task('lint', function () {
    var jshint = require('gulp-jshint');

    return gulp.src(['index.js', 'gulpfile.js', 'test/*.js'])
        .pipe(jshint({ esnext: true }))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('test', function () {
    var mocha = require('gulp-mocha');
    require('should');

    return gulp.src('test/*.js', { read: false }).pipe(mocha());
});

gulp.task('default', ['lint', 'test']);
