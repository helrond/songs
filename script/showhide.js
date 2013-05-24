$(document).ready(function(){
$('.song-list-title a').click(function(){
$(this).parent().next().children().toggle("slow")
});
});