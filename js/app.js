$( document ).ready(function() {

    // ---------- Corrects hover weirdness
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

    // ---------- Places and moves the fireflies
    fireflyNum = 10;
    fireflyArray = [];
    for (i = 0; i < fireflyNum; i++) {
      $('.orb-layer').append(
        $('<div />')
          .attr('id', 'gorb' + (i + 1))
          .addClass('glowyorb')
      );
    }
});
