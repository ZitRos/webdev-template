import gulp from "gulp";
import scss from "gulp-sass";
import babel from "gulp-babel";
import rimraf from "rimraf";
import preprocess from "gulp-preprocess";
import browserify from "browserify";
import source from "vinyl-source-stream";
import streamify from "gulp-streamify";
import pkg from "./package.json";
import to5ify from "6to5ify";

const BUILD_DIR = `${ __dirname }/build`,
    SRC_DIR = `${ __dirname }/src`,
    context = {
        package: pkg
    };

gulp.task("clean", (cb) => {
    return rimraf(BUILD_DIR, cb);
});

gulp.task("server", ["clean"], () => {
    return gulp.src(`${ SRC_DIR }/server/**/*.js`)
        .pipe(babel())
        .pipe(gulp.dest(`${ BUILD_DIR }/server`));
});

gulp.task("client-html", ["clean"], () => {
    return gulp.src(`${ SRC_DIR }/client/**/*.html`)
        .pipe(preprocess({ context }))
        .pipe(gulp.dest(`${ BUILD_DIR }/client`));
});

gulp.task("client-scss", ["clean"], () => {
    return gulp.src(`${ SRC_DIR }/client/scss/index.scss`)
        .pipe(scss().on("error", scss.logError))
        .pipe(gulp.dest(`${ BUILD_DIR }/client/css`));
});

gulp.task("client-js", ["clean"], () => {
    return browserify(`${ SRC_DIR }/client/js/index.js`, { debug: true })
        .transform(to5ify)
        .bundle()
        .on(`error`, (err) => { console.error(err); })
        .pipe(source(`index.js`))
        .pipe(streamify(preprocess({ context })))
        .pipe(gulp.dest(`${ BUILD_DIR }/client/js`));
});

gulp.task("client-etc", ["clean"], () => {
    return gulp.src([
        `${ SRC_DIR }/client/**/*.*`,
        `!${ SRC_DIR }/client/js/**/*.*`,
        `!${ SRC_DIR }/client/scss/**/*.*`,
        `!${ SRC_DIR }/client/index.html`
    ])
        .pipe(gulp.dest(`${ BUILD_DIR }/client`));
});

gulp.task("default", [
    "server",
    "client-html",
    "client-html",
    "client-scss",
    "client-js",
    "client-etc"
]);
