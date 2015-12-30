var bourbon = require('node-bourbon');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', ['serve']);

gulp.task('sass', function() {
	gulp.src('sass/*.scss')
	.pipe(sass({
		includePaths: bourbon.includePaths
	}).on('error', sass.logError))
	.pipe(gulp.dest('css'))
	.pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("sass/*.scss", ['sass']);
    gulp.watch("index.html").on('change', browserSync.reload);
});