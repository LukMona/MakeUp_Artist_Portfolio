var gulp = require("gulp");
var sass = require("gulp-sass");
var plugins = require("gulp-load-plugins");


gulp.task("sass", function(){
  return gulp.src("scss/**/*.scss")
  .pipe(sass({
    errLogToConsole: true,
    outputStyle: "expanded"
  }))
  .pipe(gulp.dest("css"));
});

gulp.task("watch", function(){
  gulp.watch("scss/**/*.scss", ["sass"]);
});

gulp.task("bootstrapCSS", function(){
  return gulp.src([
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
  ])
  .pipe(gulp.dest("assets/bootstrap/css"));
});

gulp.task("bootstrapJS", function(){
  return gulp.src([
    "node_modules/bootstrap/dist/js/bootstrap.min.js",
  ])
  .pipe(gulp.dest("assets/bootstrap/js"));
});

gulp.task("bootstrapFonts", function(){
  return gulp.src([
    "node_modules/bootstrap/dist/fonts/**",
  ])
  .pipe(gulp.dest("assets/bootstrap/fonts"));
});

gulp.task("jquery", function(){
  return gulp.src([
    "node_modules/jquery/dist/jquery.min.js",
  ])
  .pipe(gulp.dest("assets/jquery"));
});
