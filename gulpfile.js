"use strict";

// Load plugins
const browsersync = require("browser-sync").create();
const cleanCSS = require("gulp-clean-css");
const del = require("del");
const gulp = require("gulp");
const babel = require('gulp-babel');
const header = require("gulp-header");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'));
const uglify = require("gulp-uglify");
const fs = require('fs'); 
const mustache = require("mustache");
const spritesmith = require("gulp.spritesmith");
const mergeStream = require('merge-stream');
const pkg = require('./package.json');
const { resolve } = require('path');

// BrowserSync
function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./src/"
    },
    port: 7001
  });
  done();
}

// BrowserSync reload
function browserSyncReload(done) {
  browsersync.reload();
  done();
}

// CSS task
function css() {
  return gulp
    .src("./src/assets/scss/*.scss")
    .pipe(plumber())
    .pipe(sass({
      outputStyle: "expanded",
      includePaths: "./node_modules",
    }))
    .on("error", sass.logError)
    .pipe(gulp.dest("./src/assets/css/hc"))
    .pipe(browsersync.stream());
}

function js() {
  return gulp.src("./src/assets/js/hc/*.js")
    .pipe(babel())
    .pipe(browsersync.stream());
}

// Watch files
function watchFiles() {
	gulp.watch(["./src/assets/scss/*.scss"], css);
	gulp.watch("./src/assets/js/hc/*.js", js);
  gulp.watch(["./src/*.html"], browserSyncReload);
}

// Define complex tasks
const build = gulp.series(gulp.parallel(css, js));
const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));

// Export tasks
exports.css = css;
exports.build = build;
exports.watch = watch;
exports.default = build;