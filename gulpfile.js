/*global -$ */
'use strict';
// generated on 2015-03-16 using generator-gulp-webapp 0.3.0
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*', 'amd-*']
});
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('styles', function() {
  return gulp.src('app/styles/main.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      outputStyle: 'nested', // libsass doesn't support expanded yet
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe($.postcss([
      require('autoprefixer-core')({
        browsers: ['last 1 version']
      })
    ]))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('jshint', function() {
  return gulp.src(['app/scripts/**/*.js', '!app/scripts/templates.js'])
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

/*********************

HTML Contaction

*********************/

gulp.task('html', ['styles'], function() {
  var assets = $.useref.assets({
    searchPath: ['.tmp', 'app', '.']
  });

  return gulp.src('app/*.html')
    .pipe(assets)
    .pipe($.if('*.css', $.csso()))
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.if('*.html', $.minifyHtml({
      conditionals: true,
      loose: true
    })))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin({
      progressive: true,
      interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{
        cleanupIDs: false
      }]
    })))
    .pipe(gulp.dest('dist/images'));
});

/*********************

Angular Template

*********************/

gulp.task('templates', function () {
    gulp.src('app/scripts/view/**/*.html')
        .pipe($.angularTemplatecache({
          root: 'scripts/view/',
          module: 'portfolio',
          standAlone: false
        }))
        .pipe(gulp.dest('app/scripts/'));
});


gulp.task('fonts', function() {
  return gulp.src(require('main-bower-files')({
      filter: '**/*.{eot,svg,ttf,woff,woff2}'
    }).concat('app/fonts/**/*'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', function() {
  return gulp.src([
    'app/*.*',
    '!app/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('serve', ['styles', 'fonts', 'templates'], function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/data': 'data',
        '/bower_components': 'bower_components'
      }
    }
  });

  // watch for changes
  gulp.watch([
    'app/**/*.html',
    'app/**/*.json',
    'app/scripts/**/*.js',
    'app/images/**/*',
    '.tmp/fonts/**/*'
  ]).on('change', reload);

  gulp.watch('app/styles/**/*.scss', ['styles']);
  gulp.watch('app/fonts/**/*', ['fonts']);
  gulp.watch('bower.json', ['wiredep', 'fonts']);
  gulp.watch('app/scripts/view/**/*.html', ['templates']);
});

gulp.task('test', function() {
  browserSync({
    notify: false,
    port: 9001,
    server: {
      baseDir: ['.tmp_test', 'test'],
      routes: {
        '/data': 'data',
        '/bower_components': 'bower_components',
        '/scripts': 'app/scripts'
      }
    }
  });

  // watch for changes
  gulp.watch([
    'app/**/*.html',
    'test/**/*.html',
    'app/**/*.js',
    'test/spec/**/*.js'
  ]).on('change', reload);

  gulp.watch('bower.json', ['wiredep', 'fonts']);
});

// inject bower components
gulp.task('wiredep', function() {
  var wiredep = require('wiredep').stream;

  gulp.src('app/styles/*.scss')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.html')
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('app'));
});

/*********************

Requirejs optimizer

*********************/

gulp.task('requirejs', ['templates'], function() {
  return gulp.src(['app/scripts/**/*.js', 'bower_components/**/*.js'], { base: 'app/scripts' })
    .pipe($.amdOptimize('main', {
      configFile: 'app/scripts/config.js',
      findNestedDependencies: true
    }))
    .pipe($.concat('main.js'))
    .pipe($.uglify())
    .pipe(gulp.dest('dist/scripts'));
});

/*********************

Build

*********************/

gulp.task('build', ['jshint', 'html', 'requirejs', 'images', 'fonts', 'extras'], function() {
  return gulp.src('dist/**/*').pipe($.size({
    title: 'build',
    gzip: true
  }));
});

gulp.task('default', ['clean'], function() {
  gulp.start('build');
});