$(document).ready(function(){
$('.song-list-title').click(function(){
$(this).parent().next().toggle("slow")
});
});