
const gulp = require('gulp'),
      gls = require('gulp-live-server'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify'),
      rimraf = require('gulp-rimraf'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      pug = require('gulp-pug'),
      browserSync = require('browser-sync').create(),
      babel = require('gulp-babel');

gulp.task('dist', () => {
  gulp.src('client/public/**/*.*')
    .pipe(gulp.dest('dist/public'));
});

gulp.task('img', () => {
  gulp.src('client/img/**.*')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('clean', () => {
  gulp.src(['dist/'], {
    read: false
  })
    .pipe(rimraf());
});

gulp.task('csslibs', () => {
  gulp.src([
    'bower_components/normalize-css/normalize.css',
    'bower_components/animate.css/animate.min.css'
  ])
    .pipe(concat('libs.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('jslibs', () =>
  gulp.src([
    'bower_components/lodash/dist/lodash.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/angular-i18n/angular-locale_pt-br.js',
    'bower_components/angular-route/angular-route.min.js',
    'bower_components/angular-animate/angular-animate.min.js',
    'bower_components/angular-messages/angular-messages.min.js',
    'bower_components/angular-aria/angular-aria.min.js',
    'bower_components/md-form-validator/dist/md-form-validator.min.js',
    'bower_components/angular-input-masks/angular-input-masks-standalone.min.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('dist/js'))
);

gulp.task('sass', () =>
  gulp.src('client/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(concat('app.css'))
    .pipe(autoprefixer({
      browsers: ['last 20 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
);

gulp.task('pug', () =>
  gulp.src('client/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'))
);

gulp.task('js', () =>
  gulp.src([
    'client/js/**/*.js',
    'client/js/app.js'
  ])
    .pipe(concat('all.min.js'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
);

gulp.task('watch', () => {
  // const server = gls('server/server.js', {
  //   env: {
  //     NODE_ENV: 'development'
  //   }
  // });

  browserSync.init({
       server: "dist/"
   });

  gulp.watch('client/**/*.js', ['js']);
  gulp.watch('client/**/*.scss', ['sass']);
  gulp.watch('client/**/*.pug', ['pug']);
  gulp.watch('dist/**/*.{css,html,js}').on('change', browserSync.reload);

  // gulp.watch('dist/**/*.{css,html,js}', (file) => {
  //   // server.notify.apply(server, [file]);
  // });
  //
  // //server.start.bind(server)();
});


gulp.task('compile', []);
gulp.task('default', ['watch']);
