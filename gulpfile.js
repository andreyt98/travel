const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");

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

exports.compileSass = compileSass;
exports.watchSass = watchSass;
exports.uglifyjs = uglifyjs;
