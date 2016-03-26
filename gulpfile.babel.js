import gulp, { src, dest, series, parallel } from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import postcss from 'gulp-postcss';
import cssnext from 'postcss-cssnext';
import atImport from 'postcss-import';
import precss from 'precss';
import lost from 'lost';
import express from 'express';
import morgan from 'morgan';
import del from 'del';

const PORT = 3000;
const BUILD_DIR = `${__dirname}/build`;
const HTML_GLOB = './source/**/*.html';
const CSS_GLOB = './source/css/**/*.css';

export function clean() {
  return del([BUILD_DIR]);
}

export function html() {
  return src(HTML_GLOB)
    .pipe(dest(BUILD_DIR));
}

export function css() {
  return src(CSS_GLOB)
    .pipe(sourcemaps.init())
      .pipe(postcss([
        atImport(),
        lost(),
        cssnext(),
        precss()
      ]))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(`${BUILD_DIR}/css`));
}

export function serve() {
  const app = express();
  app.use(morgan('dev'));
  app.use(express.static(BUILD_DIR));

  app.get('/*', (req, res) => {
    res.sendFile(`${BUILD_DIR}/index.html`);
  });

  app.listen(PORT);

  console.log('Listening on port %d', PORT);
}

export function watch() {
  gulp.watch(HTML_GLOB, html);
  gulp.watch(CSS_GLOB, css);
}

export function build(callback) {
  return series(
    clean,
    parallel(html, css)
  )(callback);
}

export default series(build, parallel(watch, serve));
