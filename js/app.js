// image4999 is little hut
// image4762 is bug hut



$( document ).ready(function() {
    $('.btnL').hover(function() {
      $(this).find('.inside-link').css('transform', 'rotate(-4deg)');
    }, function() {
      $(this).find('.inside-link').css('transform', 'rotate(4deg)');
    });

    $('.btnR').hover(function() {
      $(this).find('.inside-link').css('transform', 'rotate(4deg)');
    }, function() {
      $(this).find('.inside-link').css('transform', 'rotate(-4deg)');
    });


    
});

// preserveAspectRatio="xMidYMin slice"
//
// (function() {
//
//   // ----------
//   window.App = {
//     // ----------
//     init: function() {
//       this.main.init();
//     },
//   };
//
//   // ----------
//   $(document).ready(function() {
//     App.init();
//   });
// })();

// var animateFlight = function() {
//   var bird1 = Snap('#bird1');
//   var bird1Box = bird1.getBBox();
//   var bird2 = Snap('#bird2');
//   var bird2Box = bird2.getBBox();
//   var strings1 = Snap('#strings1');
//   var strings1Box = strings1.getBBox();
//   var strings2 = Snap('#strings2');
//   var strings2Box = strings2.getBBox();
//   var flight_path = Snap('#rightpath');
//   var flight_path2 = Snap('#leftpath');
//   var flight_path_length = Snap.path.getTotalLength(flight_path);
//   var flight_path_length2 = Snap.path.getTotalLength(flight_path2);
//
//   Snap.animate(0, flight_path_length, function( step ) {
//       moveToPoint = Snap.path.getPointAtLength( flight_path, step );
//       x = moveToPoint.x - (bird1Box.width / 2);
//       y = moveToPoint.y - (bird1Box.height / 2);
//       strings1.transform('translate(' + (x - 700 ) + ',' + (y - 150) + ') ' + strings1Box.cx + ', ' + strings1Box.cy + ')');
//       bird1.transform('translate(' + (x - 700 ) + ',' + (y - 150) + ') ' + bird1Box.cx + ', ' + bird1Box.cy + ')');
//   }, 2000, mina.ease ,function(){
//       // next
//   });
//
//   Snap.animate(0, flight_path_length2, function( step ) {
//       moveToPoint = Snap.path.getPointAtLength( flight_path2, step );
//       x = moveToPoint.x - (bird1Box.width / 2);
//       y = moveToPoint.y - (bird1Box.height / 2);
//       strings2.transform('translate(' + (x + 50) + ',' + (y - 150) + ') ' + strings2Box.cx + ', ' + strings2Box.cy + ')');
//       bird2.transform('translate(' + (x + 50) + ',' + (y - 150) + ') ' + bird2Box.cx + ', ' + bird2Box.cy + ')');
//   }, 2000, mina.ease ,function(){
//       // next
//   });
//
// };
