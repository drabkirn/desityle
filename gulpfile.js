var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
let replace = require('gulp-replace');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify-es').default;
let htmlmin = require('gulp-htmlmin');
var autoprefixer = require('gulp-autoprefixer');
var merge = require('merge-stream');

// Location to our files
var globs = {
  build: './build',
  css: './src/css/**/*.css',
  js: './src/js/**/*.js',
  html: './src/*.html',
  images: './src/assets/**',
  fonts: './src/fonts/**/**'
};

// First clean the build folder, it will delete it and recreate it
gulp.task('clean', gulp.series(function() {
  return gulp.src(globs.build, {read: false})
    .pipe(clean());
}));

// Move images, fonts to /build folder
// You can also perform scaling and compression on images
gulp.task('assets', gulp.series('clean', function() {
  var images = gulp.src(globs.images).pipe(gulp.dest(globs.build + '/assets'));
  var fonts = gulp.src(globs.fonts).pipe(gulp.dest(globs.build + '/fonts'));

  return merge(images, fonts);
}));

// Take all CSS in /css folder -> Add auto prefixer to them
// Then concat all these into desityle.min.css
// Then Minify and export to /build folder
gulp.task('styles', gulp.series('clean', function() {
  return gulp.src(globs.css)
    .pipe(autoprefixer())
    .pipe(concat('desityle.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest(globs.build + '/css'));
}));

// Take all JS in /js folder
// Then concat all these into desityle.min.js
// Then Minify and export to /build folder
gulp.task('js', gulp.series('clean', function() {
  return gulp.src(globs.js)
    .pipe(concat('desityle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(globs.build + '/js'));
}));

// Take the HTML file, minify it with params below
gulp.task('html', gulp.series('clean', function() {
  return gulp.src(globs.html)
  .pipe(replace(`<link rel="stylesheet" href="css/01-css-reset.css">`, ''))
  .pipe(replace(`<link rel="stylesheet" href="css/02-fonts.css">`, ''))
  .pipe(replace(`<link rel="stylesheet" href="css/03-helpers.css">`, ''))
  .pipe(replace(`<link rel="stylesheet" href="css/04-desityle.css">`, '<link rel="stylesheet" href="css/desityle.min.css">'))
  .pipe(replace(`<script src="./js/01-app.js"></script>`, '<script src="./js/desityle.min.js"></script>'))
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true,
    ignoreCustomFragments: [
      /<pre>((.|\n)*?(?=<\/pre>)<\/pre>)/g
    ]
  }))
  .pipe(gulp.dest('./build'));
}));

// Build the task
gulp.task('build', gulp.parallel('assets', 'styles', 'js', 'html'));

gulp.task('default', gulp.series('build'));
