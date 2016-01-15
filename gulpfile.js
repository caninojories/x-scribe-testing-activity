(function() {
  'use strict';

  var gulp          = require('gulp'),
      $             = require('gulp-load-plugins')({lazy: true}),
      args          = require('yargs').argv,
      browserSync   = require('browser-sync'),
      del           = require('del'),
      karma         = require('karma').server,
      wiredep       = require('wiredep').stream,
      config        = require('./gulp.config')(),
      logger        = require('./gulp/tasks/util/logger'),
      serve         = require('./gulp/tasks/util/serve'),
      handleErrors  = require('./gulp/tasks/util/handleErrors');

      /*jsDoc         = require('gulp-jsdoc' );*/

  var module = {
    gulp        : gulp,
    $           : $,
    args        : args,
    browserSync : browserSync,
    config      : config,
    del         : del,
    logger      : logger,
    karma       : karma,
    serve       : serve,
    handleErrors: handleErrors,
    wiredep     : wiredep
  };

  require('./gulp/tasks/jscshint.js')(module);
  require('./gulp/tasks/stylus_watch.js')(module);
  require('./gulp/tasks/serve_dev.js')(module);

  require('./gulp/tasks/serve_build')(module);
  /*required by serve-build*/
  require('./gulp/tasks/optimize')(module);
  require('./gulp/tasks/serve_build_reload')(module);
  require('./gulp/tasks/serve_build_fonts')(module);
  require('./gulp/tasks/serve_build_images')(module);

  require('./gulp/tasks/task_listing')(module);
  require('./gulp/tasks/default')(module);

  require('./gulp/tasks/inject.js')(module);
  /*module needed for gulp-inject*/
  require('./gulp/tasks/constants')(module);
  require('./gulp/tasks/wiredep')(module);
  require('./gulp/tasks/stylus.js')(module);
  require('./gulp/tasks/template_cache')(module);
  /*needs to clean our temp and build for js and html*/
  require('./gulp/tasks/clean-code')(module);

  /* Karma setup not complete */
  /*require('./gulp/tasks/gulp-karma.js')(module);*/

}());
