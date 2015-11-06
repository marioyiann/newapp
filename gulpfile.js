var gulp = require('gulp'),
		sass = require ('gulp-sass'),
		rename = require('gulp-rename'),
		gutil = require('gulp-util'),
		uglify = require('gulp-uglify'),
		livereload= require('gulp-livereload'),
		imagemin = require('gulp-imagemin'),
		prefix = require('gulp-autoprefixer');
	
function onError(err) {
  console.log(err);
  this.emit('end');
}	

// Styles
gulp.task('sass', function() {
	gulp.src('dev/scss/**/*.scss')
		.pipe(sass({outputStyle: 'expanded' }))
		.on('error', onError)
		.pipe(prefix())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/css'))
		.pipe(livereload());
});

// Scripts
gulp.task('scripts', function(){
	gulp.src('dev/js/*.js')
		.pipe(uglify().on('error', gutil.log))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/js/'));
});

// Image compress
gulp.task('image', function(){
	gulp.src('app/img/*')
		.pipe(imagemin({ progressive: true }))
		.pipe(gulp.dest('app/img/'));
});

// Watch
gulp.task('watch', function(){

	var server = livereload();

	gulp.watch('dev/scss/**/*.scss', ['sass']);
	gulp.watch('dev/js/*.js', ['scripts']);
});

gulp.task('default', ['sass', 'scripts', 'image', 'watch']);