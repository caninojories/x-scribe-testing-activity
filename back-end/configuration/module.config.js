(function() {
  'use strict';

  var path      = require('path'),
      mongoose  = require('mongoose'),
      nunjucks  = require('nunjucks'),
      Promise   = require('bluebird'),
      rootPath  = path.normalize(__dirname + '/../../'),
      service   = '../services/';

  module.exports = {
    rootPath          : rootPath,
    config            : require('./settings.config'),
    mongoDB           : require('../configuration/mongodb'),
    use_app           : require('./use_app.config'),
    use_api           : require('./use_api.config'),

    args              : require('yargs').argv,
    bodyParser        : require('body-parser'),
    chalk             : require('chalk'),
    cluster           : require('cluster'),
    compression       : require('compression'),
    express           : require('express'),
    favicon           : require('serve-favicon'),
    logger            : require('morgan'),
    methodOverride    : require('method-override'),
    mongoose          : Promise.promisifyAll(mongoose),
    numCPUs           : require('os').cpus().length,
    nunjucks          : require('nunjucks'),
    nunjucksEnv       : new nunjucks.Environment(new nunjucks.FileSystemLoader
      (path.join(rootPath, 'views'))),
    nunjucksEnvBuild  : new nunjucks.Environment(new nunjucks.FileSystemLoader
      (path.join(rootPath, 'build'))),
    Promise           : require('bluebird'),
    request           : require('request-promise'),
    serveStatic       : require('serve-static'),
    url               : require('url'),

    port              : process.env.PORT || 3000,
    environment       : process.env.NODE_ENV || 'development',

    /*Services*/
    xPoweredBy        : require(service + 'xPoweredBy'),
    clusterService    : require(service + './cluster'),

    faviconPath       : rootPath + 'front-end/resources/favicon.ico',
    nunjucksPath      : path.join(rootPath, 'front-end/views'),
    nunjucksPathBuild : path.join(rootPath, 'build'),
    css               : path.join(rootPath, 'front-end/resources/css'),
    fonts             : path.join(rootPath, 'front-end/resources/fonts'),
    img               : path.join(rootPath, 'front-end/resources/img'),
    js                : path.join(rootPath, 'front-end/resources/js'),
    compiledCss       : path.join(rootPath, 'front-end/.tmp'),
    bowerComponents   : path.join(rootPath, 'front-end/bower'),
    commonViews       : path.join(rootPath, 'front-end/views/common'),

    buildCss          : path.join(rootPath, 'build/css'),
    buildFonts        : path.join(rootPath, 'build/fonts'),
    buildImg          : path.join(rootPath, 'build/img'),
    buildJs           : path.join(rootPath, 'build/js'),
    clientViewsBuild  : path.join(rootPath, 'front-end/views/client'),

    /* Models */
    User              : require('../model/User'),

    /* Classes */
    USER              : require('../classes/user.js'),
  };
}());
