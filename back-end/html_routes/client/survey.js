(function() {
  'use strict';

  var router  = io.express.Router();

  router.get('/client/survey/index.html', function(req, res) {
    res.render('client/survey/index.html');
  });

  router.get('/client/survey/results.html', function(req, res) {
    res.render('client/survey/results.html');
  });

  router.get('/client/survey/summary.html', function(req, res) {
    res.render('client/survey/summary.html');
  });

  module.exports = router;
}());
