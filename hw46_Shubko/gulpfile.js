const { src, dest, series, parallel, watch } = require("gulp");

const uglifyJS = require("gulp-uglify");
const concat = require("gulp-concat");
const cleanCSS = require('gulp-clean-css');
const scssCss = require('gulp-sass')(require('sass'));
const browserSync = require("browser-sync").create();
const origin = "src";
const destination = "dist";

function html(cb) {
  src(`${origin}/**/*.html`).pipe(dest(destination));
  cb();
}

function watcher(cb) {
  watch(`${origin}/**/*.html`).on("change", series(html, browserSync.reload));
  watch(`${origin}/**/*.css`).on("change", series(css, browserSync.reload));
  watch(`${origin}/**/*.js`).on("change", series(js, browserSync.reload));
  cb();
}

function server(cb) {
  browserSync.init({
    notify: false,
    open: false,
    server: {
      baseDir: destination,
    },
  });
  cb();
}

function css(cb) {
  src(`${origin}/css/*.css`)
    .pipe(concat("style.css"))
    .pipe(cleanCSS())
    .pipe(dest(`${destination}/css`))
    .pipe(browserSync.stream());
  cb();
}

function scss(cb){
  src(`${origin}/scss/*.scss`)
    .pipe(concat("scss.css"))
    .pipe(scssCss({
      outputStyle: "compressed",
    }))
    .pipe(dest(`${destination}/css`))
    .pipe(browserSync.stream());
  cb();
}

function js(cb) {
  src(`${origin}/js/*.js`)
    .pipe(concat("script.js"))
    .pipe(uglifyJS())
    .pipe(dest(`${destination}/js`)).pipe(browserSync.stream());;
  cb();
}

exports.default = series(parallel(html,css, js,scss), server, watcher);