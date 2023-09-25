import pkg from "gulp";
import img from "gulp-imagemin";
import cssMin from "gulp-cssmin";
import rename from "gulp-rename";
const { src, dest } = pkg;

function minifySvgs() {
  return src("src/assets/images/*.svg")
    .pipe(img())
    .pipe(dest("src/assets/images-min"))
}

function minifyCss() {
  return src("src/components/**/*.css")
    .pipe(cssMin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("src/components"))
}

function minifyMainCss() {
  return src("src/style/*.css")
    .pipe(cssMin())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("src/style"))
}


export { minifySvgs, minifyCss, minifyMainCss };
