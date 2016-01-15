(function() {
  'use strict';

  module.exports = function() {
    /*declare our initialization here*/
    var backEndJS = 'back-end/';
    var clientJS  = 'front-end/resources/js/';
    var ClientCSS = 'front-end/resources/css/';
    var client    = 'front-end/views/';
    var rootJS    = './';
    var root      = __dirname + '/';
    var bower     = {
      json      : require('./bower.json'),
      ignorePath: '../bower',
      directory : 'front-end/bower',
      exclude   : ['..bower/bootstrap/dist/js/bootstrap.js'],
      fileTypes : {
        html: {
          replace: {
            js  : '<script src="/bower{{filePath}}"></script>',
            css : '<link rel="stylesheet" href="/bower{{filePath}}" />'
          }
        }
      }
  };

    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true})['js'];
    var config = {
      adminRoutes: 'front-end/views/admin/**/*.*',
      /*run jshint and jscs*/
      alljs: [
        clientJS  + '**/*.js',
        rootJS    + '*.js',
        backEndJS + '**/*.js',
        '!' + clientJS + 'constants/*.js'
      ],
      build: './build/',
      /*use for injecting our bowercomponents using wiredep*/
      client: client,
      /*use to copy our build tools for client html views*/
      clientRoutes: 'front-end/views/client/**/*.*',
      /*user for temp css(concat) used for developement for gulp injects*/
      css: 'front-end/.tmp/stylus/app.css',
      fonts: [
        bower.directory + '/bootstrap/fonts/**/*.*',
        bower.directory + '/ionicons/fonts/**/*.*',
        bower.directory + '/flat-ui/fonts/**/*.*'
      ],
      htmlTemplates: client + '**/*.html',
      images: 'front-end/resources/img/**/*.*',
      index: client + 'index.html',
      /* app js, with no specs */
      js: [
        clientJS + '**/module.js',
        clientJS + '**/*.js',
        '!' + clientJS + '**/*.spec.js'
      ],

      /*use to get the root path of the app*/
      root    : root,
      /*use to watch the changes in the server when running serve-build and serve-dev*/
      server  : root + 'back-end',
      stylus  : ClientCSS + '/stylus/app.styl',
      stubsjs : [
        bower.directory + 'angular-mocks/angular-mocks.js',
        client + 'stubs/**/*.js'
      ],
      temp: 'front-end/.tmp/',

      /**
       * template cache
       */
      template_cache: {
        file: 'templates.js',
        options: {
          module    : 'app.core',
          standalone: false,
          transformUrl: function(url) {
          	return '/' + url;
          }
        }
      },
      /*Bower and Npm Configurations*/
      bower: bower,
      specHelpers: ['front-end/test-helpers/*.js'],
      serverIntegrationSpecs: ['front-end/tests/server-integration/**/*.spec.js'],

      /**
       * Node settings
       **/
       node_server: root + 'back-end/server.js',
       defaultPort: '8006'
    };

    /**
     * wiredep and bower settings
     **/
    config.getWireDepDefaultOptions = function() {
      var options = {
        bowerJson : config.bower.json,
        directory : config.bower.directory,
        exclude   : config.bower.exclude,
        ignorePath: config.bower.ignorePath,
        fileTypes : config.bower.fileTypes
      };
      return options;
    };

    config.karma = getKarmaOptions();

    return config;

    /**
     * karma settings
     */
    function getKarmaOptions() {
      var options = {
        files: [].concat(
          bowerFiles,
          config.specHelpers,
          clientJS + '**/*.module.js',
          clientJS + '**/*.js',
          config.temp + config.template_cache.file,
          config.serverIntegrationSpecs
        ),
        exclude: [],
        coverage: {
          dir: './report/coverage',
          reporters: [
            {type: 'html', subdir: 'report-html'},
            {type: 'lcov', subdir: 'report-lcov'},
            {type: 'text-summary'}
          ]
        },
        preprocessors: {

        }
      };
      options.preprocessors['front-end/resources/js/' + '**/!(*.spec)+(.js)'] = ['coverage'];
      // options.preprocessors['front-end/' + '**/*.js'] = ['coverage'];

      return options;
    }
  };
}());
