var {src, dest, watch} = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

function bs() {
    serveSass();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch("./sass/**/*.sass", serveSass);
    watch("./scss/**/*.scss", serveSass);
    watch("./js/*.js").on('change', browserSync.reload);
}

function serveSass() {
    return src("./sass/**/*.sass", "./scss/**/*.scss")
        .pipe(sass())
        .pipe(dest("./css"))
        .pipe(browserSync.stream());
}

exports.serve = bs;