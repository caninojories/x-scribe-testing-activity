(function() {
  'use strict';

  angular
    .module('app.survey')
    .controller('Summary', Summary);

  Summary.$inject = [
    /*angular services/factory*/
    /*ionic services/factory*/
    /*cordova services/factory*/
    /*third party services/factory*/
    /*custom services/factory*/
    'DataQuery', 'userAPI',
    /*custom directives*/
  ];

  function Summary (
    DataQuery, userAPI
  ) {
    var vm = this;

    vm.active = active;

    vm.activeCss = true;

    var myData;
    //
    // function getTotal(){
    //   var myTotal = 0;
    //   for (var j = 0; j < myData.length; j++) {
    //     myTotal += (typeof myData[j].count == 'number') ? myData[j].count : 0;
    //   }
    //   return myTotal;
    // }
    //
    // var dx = 0;
    // var dy = 0;
    // function plotData() {
    //   var canvas;
    //   var ctx;
    //   var lastend = 0;
    //   var myTotal = getTotal();
    //
    //   canvas = document.getElementById('canvas');
    //   ctx = canvas.getContext('2d');
    //   ctx.clearRect(0, 0, canvas.width, canvas.height);
    //   var offset = 200;
    //   for (var i = 0; i < myData.length; i++) {
    //     ctx.beginPath();
    //     ctx.moveTo(200, 150);
    //     ctx.fillStyle="#CC00FF";
    //     ctx.lineStyle="#ffff00";
    //     ctx.font="18px sans-serif";
    //     dx += Math.floor(canvas.width * 0.4) - 20;
    //     dy += Math.floor(canvas.height * 0.04);
    //     console.log(dx);
    //     console.log(dy);
    //     ctx.fillText(myData[i].count, 150, 200);
    //     ctx.fillStyle = myData[i]._id;
    //     ctx.arc(200, 150, 150, lastend, lastend+
    //       (Math.PI * 2 * (myData[i].count/myTotal)), false);
    //     ctx.lineTo(200,150);
    //     ctx.fill();
    //     lastend += Math.PI*2*(myData[i].count/myTotal);
    //   }
    // }
// 
//     var data = [110, 100, 140, 10];
// var labels = ["110", "100", "140", "10"];
// var colors = ["#FFDAB9", "#E6E6FA", "#E0FFFF", "red"];
// var radius;
//
// function drawSegment(canvas, context, i) {
//     context.save();
//     var centerX = Math.floor(canvas.width / 2);
//     var centerY = Math.floor(canvas.height / 2);
//     radius = Math.floor(canvas.width / 2);
//
//     var startingAngle = degreesToRadians(sumTo(vm.data, i));
//     var arcSize = degreesToRadians(vm.data[i]);
//     var endingAngle = startingAngle + arcSize;
//
//     context.beginPath();
//     context.moveTo(centerX, centerY);
//     context.arc(centerX, centerY, radius,
//                 startingAngle, endingAngle, false);
//     context.closePath();
//
//     context.fillStyle = vm.summaryData[i]._id;
//     context.fill();
//
//     context.restore();
//
//     drawSegmentLabel(canvas, context, i);
// }
//
// function degreesToRadians(degrees) {
//     return (degrees * Math.PI)/180;
// }
// function sumTo(a, i) {
//     var sum = 0;
//     for (var j = 0; j < i; j++) {
//       sum += a[j];
//     }
//     return sum;
// }
//
// function drawSegmentLabel(canvas, context, i) {
//    context.save();
//    var x = Math.floor(canvas.width / 2);
//    var y = Math.floor(canvas.height / 2);
//    var angle = degreesToRadians(sumTo(vm.data, i));
//
//    context.translate(x, y);
//    context.rotate(angle);
//    var dx = Math.floor(canvas.width * 0.5) - 10;
//    var dy = Math.floor(canvas.height * 0.05);
//
//    context.textAlign = "right";
//    var fontSize = Math.floor(canvas.height / 25);
//    context.font = fontSize + "pt Helvetica";
//
//    context.fillText(vm.summaryData[i].count, dx, dy);
//
//    context.restore();
// }
//
// var context = canvas.getContext("2d");
//
//
// function getTotal(data){
//   var myTotal = 0;
//   for (var j = 0; j < data.length; j++) {
//     myTotal += (typeof data[j].count == 'number') ? data[j].count : 0;
//   }
//
//   return myTotal;
// }

function active() {
  vm.activeCss = !vm.activeCss;
}

vm.data = [];

    DataQuery
      .get(
        userAPI,
        'survey/summary',
        {}
      ).then(function(response) {
        vm.summaryData = response.data;
        // // myData = response.data;
        // vm.total = getTotal(vm.summaryData);
        //
        // for(var i = 0; i< vm.summaryData.length; i++) {
        //   // vm.labels.push();
        //   vm.percent = ((vm.summaryData[i].count / vm.total) * 100).toFixed(2);
        //
        //   var points = 360 * (vm.percent / 100);
        //   vm.data.push(Math.round(points));
        // }
        //
        // for (var i = 0; i < vm.data.length; i++) {
        //     drawSegment(canvas, context, i);
        // }
        // plotData();
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}());
