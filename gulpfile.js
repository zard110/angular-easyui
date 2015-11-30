var gulp = require('gulp'),
  $ = require('gulp-load-plugins')({lazy: true});

gulp.task('default', function() {
  var wiredep = require('wiredep').stream;
  var sources = gulp.src(['./src/**/*.js', './src/**/*.css'], {read: false});

  return gulp
    .src('src/index.html')
    .pipe($.print())
    .pipe(wiredep({
      bowerJson: require('./bower.json'),
      directory: './bower_components/'
    }))
    .pipe($.inject(sources, {relative: true}))
    .pipe($.print())
    .pipe(gulp.dest('src/'));
});
