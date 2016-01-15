(function() {
  'use strict';

  global.appRequire = function(name) {
    return require(__dirname + '/' + name);
  };

  global.io = appRequire('configuration/module.config');

  var  catchAll  = require('./html_routes');

  /*Configuration File NoSQL Database*/
  require('./configuration/mongodb')(io.config.dbName, io); //mongodb integration

  /*Start our Express Server*/
  var app = io.express();

  /*Require our Configuration Files*/
  require('./configuration/express')(app);

  /*Routes*/
  io.use_app(app, io);
  io.use_api(app, io);
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).send({
      message: err.message,
      status: err.status || 500
    });
  });
  app.use('*', catchAll);

  /*server test*/
  if (io.args.serverTest) {
    module.exports = app;
    return module.exports;
  }

  /*io.cluster Configuration*/
  if (io.cluster.isMaster) {io.clusterService(io);}
  else {
    app.listen(io.port, function() {
      console.log(io.chalk.red.reset.underline('listening to port ') +
      io.chalk.cyan.bold((io.port)));
    });
  }
}());
