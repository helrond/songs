$(document).ready(function(){
$('.song-list-title').click(function(){
$('.content').css("display", "none");
var $lefty = $(this).parent().next().children();
$lefty.animate({
      left: parseInt($lefty.css('left'),10) == 0 ?
        -$lefty.outerWidth() :
        0
    });
});
});