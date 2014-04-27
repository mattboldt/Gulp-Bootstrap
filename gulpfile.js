var gulp = require('gulp');

var jshint = require('gulp-jshint');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


// Compile Our Coffeescript
gulp.task('coffeescript', function() {
    return gulp.src('assets/coffeescripts/**/*.coffee')
        .pipe(coffee())
        .pipe(gulp.dest('assets/javascripts/'));
});

gulp.task('lint', function() {
    return gulp.src('assets/javascripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src('assets/stylesheets/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('assets/javascripts/**/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('main.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('assets/javascripts/**/*.js', ['lint', 'scripts']);
    gulp.watch('assets/stylesheets/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['coffeescript', 'lint', 'sass', 'scripts', 'watch']);