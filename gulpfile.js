const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const imgmin = require("gulp-imagemin");

const paths = {
  sass: "./src/sass/**/*.scss",
  css: "./public/css",
  js: "./src/js/**/*.js",
  jsPublic: "./public/js",
  html: "./*.html",
  rootPublic: "./public/",
};

function compileSass() {
  return src(paths.sass, { sourcemaps: true })
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(dest(paths.css, { sourcemaps: "." }));
}

function watchSass() {
  watch(paths.sass, compileSass);
}
function watchJs() {
  watch(paths.js, compileJs);
}

function compileJs() {
  return src(paths.js).pipe(uglify()).pipe(dest(paths.jsPublic));
}

function minifyhtml() {
  return src(paths.html)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest(paths.rootPublic));
}

function minimg() {
  return src("./img/**/*").pipe(imgmin()).pipe(dest("./public/img"));
}

exports.compileSass = compileSass; // not necessary to run, 'watchSass' function will run this one
exports.watchSass = watchSass;
exports.default = series(watchSass);

exports.compileJs = compileJs;
exports.watchJs = watchJs;
exports.minifyhtml = minifyhtml;
exports.minimg = minimg;
