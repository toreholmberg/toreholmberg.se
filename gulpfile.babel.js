import gulp, { src, dest, series, parallel } from 'gulp';
import { readFileSync } from 'fs';
import postcss from 'postcss';
import cssnext from 'postcss-cssnext';
import precss from 'precss';
import express from 'express';
import morgan from 'morgan';
import del from 'del';
import template from 'gulp-template';
import CleanCSS from 'clean-css';

const PORT = 3000;
const BUILD_DIR = `${__dirname}/build`;

export function clean() {
  return del([BUILD_DIR]);
}

export function html() {
  return postcss([cssnext, precss])
    .process(readFileSync('./source/css/styles.css').toString())
    .then(result => {

      const css = process.env.NODE_ENV === 'production' ?
        new CleanCSS().minify(result.css).styles :
        result.css;

      src('./source/index.html')
        .pipe(template({ css }))
        .pipe(dest(BUILD_DIR));
    });
}

export function favicon() {
  return src('./source/favicon/*.*')
    .pipe(dest(BUILD_DIR));
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
  gulp.watch('./source/**/*.{html,css}', html);
}

export function build(callback) {
  return series(
    clean,
    html,
    favicon
  )(callback);
}

export default series(build, parallel(watch, serve));
