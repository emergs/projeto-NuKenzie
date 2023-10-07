import pkg from "gulp";
import img from "gulp-imagemin";
import cssMin from "gulp-cssmin";
import rename from "gulp-rename";
import { deleteSync } from "del";
const { src, dest } = pkg;

function minifySvgs() {
  return src("src/assets/images/*.svg")
    .pipe(img())
    .pipe(dest("src/assets/images-min"))
}

async function minifyCss() {

  const targetPath = 'src/components';

  try {
    deleteSync(`${targetPath}/**/*.min.css`);
    src(`${targetPath}/**/*.css`)
      .pipe(cssMin())
      .pipe(rename({ suffix: ".min" }))
      .pipe(dest(targetPath));
  } catch (error) {
    console.error('Erro ao minificar os arquivos CSS:', error);
  }
}

async function minifyMainCss() {
  const targetPath = "src/style"

  try {
    deleteSync(`${targetPath}/*.min.css`)
    src(`${targetPath}/*.css`)
      .pipe(cssMin())
      .pipe(rename({ suffix: ".min" }))
      .pipe(dest(targetPath))
  } catch (error) {
    console.error('Erro ao minificar os arquivos CSS:', error)
  }
}


export { minifySvgs, minifyCss, minifyMainCss };
