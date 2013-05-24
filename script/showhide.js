$(document).ready(function(){
$('.song-list-title').click(function(){
$('.content').css("display", "none");
$(this).next().slideToggle();
});
});