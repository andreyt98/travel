const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const imgmin = require("gulp-imagemin");


function compileSass() {
  return src("./src/sass/**/*.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(dest("./public/css"));
}

function watchSass() {
  watch("./src/sass/**/*.scss", compileSass);
}

function uglifyjs() {
  return src("./src/js/*.js").pipe(uglify()).pipe(dest("./public/js"));
}

function minifyhtml() {
  return src("./*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("./public/"));
}

function minimg() {
  return src("./img/**/*").pipe(imgmin()).pipe(dest("./public/img"));
}

exports.compileSass = compileSass; // not necessary to run, 'watchSass' function will run this one

exports.watchSass = watchSass;
exports.uglifyjs = uglifyjs;
exports.minifyhtml = minifyhtml;
exports.minimg = minimg;
