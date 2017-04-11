var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require("webpack");
var notifier = require('node-notifier');
var compass = require('gulp-compass');
var rename = require('gulp-rename');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');


gulp.task('build-sass', function() {
  return gulp.src(['src/sass/*.scss', 'src/sass/**/*.scss'])
    .pipe(compass({
      css: 'docs/css',
      sass: 'src/sass',
      image: 'docs/img',
      import_path: ["src/sass"]
    }))
    .on('error', function(error){
      notifier.notify({
        title: error.plugin,
        message: error.message
      });
      this.emit('end');
    })
    .pipe(gulp.dest('docs/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cleanCss())
    .on('error', function(error){
      notifier.notify({
        title: error.plugin,
        message: error.message
      });
      this.emit('end');
    })
    .pipe(gulp.dest('docs/css'))
    ;
});

gulp.task('watch-sass', function() {
  gulp.watch(['src/sass/*.scss', 'src/sass/**/*.scss']);
});

gulp.task('build-docs', function() {
  var config = require('./docs/webpack.config.js');
  webpack(config, function(err, stats) {
    //notifier
    if (stats.compilation.errors.length) {
      notifier.notify({
        title: 'Webpack',
        message: stats.compilation.errors[0].message
      });
    }

    //console log
    gutil.log("[webpack]", stats.toString({}));

    //uglify
    gulp.src(config.output.path + '/' + config.output.filename)
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify({
        preserveComments: 'license'
      }))
      .pipe(gulp.dest(config.output.path))
  });
});


gulp.task('default', ['build-sass', 'build-docs'])
