(function() {
  'use strict';

  angular
    .module('app.survey')
    .directive('onLoadPieSummary', onLoadPieSummary);

 onLoadPieSummary.$inject = ['$compile', '$filter', '$rootScope', '$timeout'];
 /*@ngInject*/
  function onLoadPieSummary($compile, $filter, $rootScope, $timeout) {
    var directive = {
      restrict: 'A',
      require : 'ngModel',
      replace : true,
      scope: {
        ngModel  : '='
      },
      link     : link
    };

    return directive;

    function link(scope, element, attrs, ngModel) {
      var data = [],
          summaryData,
          total,
          summary;
      ngModel.$render = function() {
        if (ngModel.$viewValue) {
          var canvas    = document.getElementById('canvas');
          var context   = canvas.getContext('2d');
          summaryData   = ngModel.$viewValue;
          total         = getTotal(summaryData);

          for(var i = 0; i < summaryData.length; i++) {
            var percent = ((summaryData[i].count / total) * 100).toFixed(2);
            var points = 360 * (percent / 100);
            data.push(Math.round(points));
          }

          for (i = 0; i < data.length; i++) {
            drawSegment(canvas, context, i);
          }

          /* append the legend */
          var legend =  '<div style="padding-left: 40px;">';
              legend +=   'LEGEND';
              legend +=   '<ul class="legend">';
              for (var j = 0; j < summaryData.length; j++) {
                legend +=     '<li>' +
                                '<span style="padding: 0 20px;background-color:' + summaryData[j]._id + '">' +
                                '</span>' +
                                '<span class="text">' +
                                  summaryData[j]._id +
                                '</span>' +
                              '</li>';
              }
              legend +=  '</div>';


          $('.canvas').append(legend);
        }
      };

      function drawSegment(canvas, context, i) {
          context.save();
          var centerX       = Math.floor(canvas.width / 2);
          var centerY       = Math.floor(canvas.height / 2);
          var radius        = Math.floor(canvas.width / 2);
          var startingAngle = degreesToRadians(sumTo(data, i));
          var arcSize       = degreesToRadians(data[i]);
          var endingAngle   = startingAngle + arcSize;

          context.beginPath();
          context.moveTo(centerX, centerY);
          context.arc(centerX, centerY, radius,
                      startingAngle, endingAngle, false);
          context.closePath();
          context.fillStyle = summaryData[i]._id;
          context.fill();
          context.restore();

          drawSegmentLabel(canvas, context, i);
      }

      function degreesToRadians(degrees) {
        return (degrees * Math.PI) / 180;
      }

      function sumTo(a, i) {
        var sum = 0;

        for (var j = 0; j < i; j++) {
          sum += a[j];
        }

        return sum;
      }

      function drawSegmentLabel(canvas, context, i) {
        context.save();
        var x      = Math.floor(canvas.width / 2);
        var y      = Math.floor(canvas.height / 2);
        var angle  = degreesToRadians(sumTo(data, i));

        context.translate(x, y);
        context.rotate(angle);

        var dx = Math.floor(canvas.width * 0.5) - 10;
        var dy = Math.floor(canvas.height * 0.05);

        context.textAlign = 'right';
        var fontSize = Math.floor(canvas.height / 25);
        context.font = fontSize + 'pt Helvetica';
        context.fillText(summaryData[i].count, dx, dy);

        context.restore();
      }

      function getTotal(data) {
        var myTotal = 0;
        for (var j = 0; j < data.length; j++) {
          myTotal += (typeof data[j].count === 'number') ? data[j].count : 0;
        }

        return myTotal;
      }
    }
  }
}());
