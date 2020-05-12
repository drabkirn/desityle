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
  fonts: './src/fonts/**/**',
  customCSS: './src/custom.css',
  customJS: './src/custom.js',
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

// Take all CSS in /css folder -> Add auto prefixer to them
// Then concat all these into desityle.css
// Export to /build folder
gulp.task('stylesnonminify', gulp.series('clean', function() {
  return gulp.src(globs.css)
    .pipe(replace(`/* ADD LICENSE HERE */`, `/* Drabkirn Desityle - See License at: https://go.cdadityang.xyz/DcenS */`))
    .pipe(replace(`/* OTHER LICENSE HERE */`, `/* This file uses others lib whose license info is retained for you to review. */`))
    .pipe(autoprefixer())
    .pipe(concat('desityle.css'))
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

// Take all JS in /js folder
// Then concat all these into desityle.min.js
// Then Minify and export to /build folder
gulp.task('jsnonminify', gulp.series('clean', function() {
  return gulp.src(globs.js)
    .pipe(replace(`// ADD LICENSE HERE`, `// Drabkirn Desityle - See License at: https://go.cdadityang.xyz/DcenS`))
    .pipe(concat('desityle.js'))
    .pipe(gulp.dest(globs.build + '/js'));
}));

// Take the HTML file, minify it with params below
gulp.task('html', gulp.series('clean', function() {
  return gulp.src(globs.html)
  .pipe(replace(`<link rel="stylesheet" href="./css/01-css-reset.css">`, ''))
  .pipe(replace(`<link rel="stylesheet" href="./css/02-fonts.css">`, ''))
  .pipe(replace(`<a href="./components.html" class="btn btn-wide">Components</a>`, '<a href="/desityle/components" class="btn btn-wide">Components</a>'))
  .pipe(replace(`<a href="./showcase.html" class="btn btn-wide">Showcase</a>`, '<a href="/desityle/showcase" class="btn btn-wide">Showcase</a>'))
  .pipe(replace(`<link rel="stylesheet" href="./css/03-desityle.css">`, '<link rel="stylesheet" href="/desityle/css/desityle.min.css">'))
  .pipe(replace(`<link rel="stylesheet" href="./custom.css">`, '<link rel="stylesheet" href="/desityle/custom.min.css">'))
  .pipe(replace(`<script src="./custom.js"></script>`, '<script src="/desityle/custom.min.js"></script>'))
  .pipe(replace(`<script src="./js/01-app.js"></script>`, '<script src="/desityle/js/desityle.min.js"></script>'))
  .pipe(htmlmin({
    collapseWhitespace: true,
    removeComments: true,
    ignoreCustomFragments: [
      /<pre>((.|\n)*?(?=<\/pre>)<\/pre>)/g
    ]
  }))
  .pipe(gulp.dest('./build'));
}));

// Minimizing + Moving custom CSS and JS files
gulp.task('customCSS', gulp.series('clean', function() {
  return gulp.src(globs.customCSS)
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(concat('custom.min.css'))
    .pipe(gulp.dest('./build'));
}));

gulp.task('customJS', gulp.series('clean', function() {
  return gulp.src(globs.customJS)
    .pipe(uglify())
    .pipe(concat('custom.min.js'))
    .pipe(gulp.dest('./build'));
}));

// Build the task
gulp.task('build', gulp.parallel('assets', 'styles', 'stylesnonminify', 'js', 'jsnonminify', 'html', 'customCSS', 'customJS'));

gulp.task('default', gulp.series('build'));
