$(document).ready(function(){
$('.song-list-title').click(function(){
$('.song-list-content').css({"display: none", "background-color: #ffffff"});
$(this).next().slideToggle();
$(this).css('background-color', '#999999');
});
});