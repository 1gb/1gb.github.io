$( document ).ready(function() {

    // ---------- Animating the slashes
    var animView = 0;
    
    setInterval(function(){
      if (animView === 0) {
        $('#main-content').html('<p>/ \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\</p><p>\\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ /</p><p>/ \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\</p><p>\\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ /</p><p>/ \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\</p><p>\\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ /</p><p>/ \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\</p><p>\\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ /</p>');
        
        animView = 1;
      } else if (animView === 1) {
        $('#main-content').html('<p> / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / </p><p> \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ </p><p> / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / </p><p> \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ </p><p> / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / </p><p> \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ </p><p> / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / </p><p> \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ </p>');
            
        animView = 2;
      } else if (animView === 2) {
        $('#main-content').html('<p>\\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ /</p><p>/ \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\</p><p>\\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ /</p><p>/ \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\</p><p>\\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ /</p><p>/ \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\</p><p>\\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ /</p><p>/ \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\</p>');
          
        animView = 3;
      } else if (animView === 3) {
        $('#main-content').html('<p> \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ </p><p> / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / </p><p> \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ </p><p> / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / </p><p> \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ </p><p> / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / </p><p> \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ </p><p> / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / </p>')
      
        animView = 0;
      }
      
    }, 500);

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

    // ---------- Places the fireflies
    fireflyNum = 10;
    fireflyArray = [];
    for (i = 0; i < fireflyNum; i++) {
      $('.orb-layer').append(
        $('<div />')
          .attr('id', 'gorb' + (i + 1))
          .addClass('glowyorb').addClass('glowyorb' + (i + 1))
      );
    }

    // ---------- Console Fun
    var styles = [
        'background: linear-gradient(#3B0425, #BA5E69)',
        'color: #FFC86F',
        'padding: 5px',
        'line-height: 30px',
        'text-align: center',
        'font-size: 12px',
    ].join(';');

    // console.log('%c Hello, friend. I have a special message for you! To see it, type: %chi()', styles, 'background: linear-gradient(#3B0425, #BA5E69); padding: 5px 5px 5px 0; color: white; font-weight: bold; font-size: 12px;');
});

var lines = [
  '%c                 \n' +
  '    \\    /\\      \n' +
  '     )  ( \')     \n' +
  '    (  /  )      \n' +
  '     \\(__)|      \n' +
  '                 ',
  '%c                 \n' +
  '    )    /\\      \n' +
  '   (    ( -)     \n' +
  '    \\  /  )      \n' +
  '     \\(__)|      \n' +
  '                 ',
  '%c                 \n' +
  '    \\    /\\      \n' +
  '     )  ( \')     \n' +
  '    (  /  )      \n' +
  '     \\(__)|      \n' +
  '                 ',
  '%c                 \n' +
  '    )    /\\      \n' +
  '   (    ( -)     \n' +
  '    \\  /  )      \n' +
  '     \\(__)|      \n' +
  '                 ',
  '%c                 \n' +
  '    \\    /\\      \n' +
  '     )  ( \')     \n' +
  '    (  /  )      \n' +
  '     \\(__)|      \n' +
  '                 ',
  '%c                 \n' +
  '    )    /\\      \n' +
  '   (    ( -)     \n' +
  '    \\  /  )      \n' +
  '     \\(__)|      \n' +
  '                 ',
  '%c                 \n' +
  '    \\    /\\      \n' +
  '     )  ( \')     \n' +
  '    (  /  )      \n' +
  '     \\(__)|      \n' +
  '                 ',
  '%c                 \n' +
  '    )    /\\      \n' +
  '   (    ( -)     \n' +
  '    \\  /  )      \n' +
  '     \\(__)|      \n' +
  '                 ',
  '%c                 \n' +
  '    \\   /V\\      \n' +
  '     ) (\' \')     \n' +
  '    (  /   )/    \n' +
  '     \\(__)|      \n' +
  '                 ',
  '%c                 \n' +
  '    )   /V\\      \n' +
  '   (   (\' \')     \n' +
  '    \\  /   )_    \n' +
  '     \\(__)|  hi! \n' +
  '                 ',
  '%c                 \n' +
  '    \\   /V\\      \n' +
  '     ) (\' \')     \n' +
  '    (  /   )/    \n' +
  '     \\(__)|  hi! \n' +
  '                 ',
  '%c                 \n' +
  '    )   /V\\      \n' +
  '   (   (\' \')     \n' +
  '    \\  /   )_    \n' +
  '     \\(__)|  hi! \n' +
  '                 ',
  '%c                 \n' +
  '    \\   /V\\      \n' +
  '     ) (\' \')     \n' +
  '    (  /   )/    \n' +
  '     \\(__)|   ♥  \n' +
  '                 ',
  '%c                 \n' +
  '    )   /V\\      \n' +
  '   (   (\' \')     \n' +
  '    \\  /   )_  ♥ \n' +
  '     \\(__)|      \n' +
  '                 ',
  '%c                 \n' +
  '    \\   /V\\      \n' +
  '     ) (^ ^) %c♥%c   \n' +
  '    (  /   )/    \n' +
  '     \\(__)|      \n' +
  '                 \n' +
  '   Thanks for    \n' +
  '    visiting!    \n' +
  '                 '
];

var style = 'color: white; background-color: black; font-size: 15px;';
var heartStyle = 'color: red; background-color: black; font-size: 15px;';

var hi = function() {
  function start(counter){
     if (counter === lines.length - 1) {
      console.clear();
      console.log(lines[lines.length - 1], style, heartStyle, style);
    } else if(counter < lines.length - 1){
      setTimeout(function(){
        counter++;
        console.clear();
        console.log(lines[counter], style);
        start(counter);
      }, 500);
    }
  }
  start(0);
  return 'Okay!';
};
