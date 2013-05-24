$(document).ready(function(){
$('.song-list-title').click(function(){
$('.content').css("display", "none");
$(this).parent().next().children().slideToggle("slow")
});
});