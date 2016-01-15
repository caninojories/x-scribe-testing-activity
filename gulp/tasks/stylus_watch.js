(function() {
  'use strict';

  module.exports = function(require) {
    require.gulp.task('watch-stylus', function () {
      require.gulp.watch(require.config.stylus, ['stylus'] );
    });
  };
}());
