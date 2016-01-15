(function() {
  'use strict';

  module.exports = function(require) {
    require.gulp.task('help', require.$.taskListing);
  };
}());
