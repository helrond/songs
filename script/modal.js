$(document).ready(function() {
$('a.song-list-title').bind('click', function() {
   var $this = $(this);
   var outputHolder = $("<div class='home'></div>");
   $("body").append(outputHolder);
   outputHolder.load($this.attr("href"), null, function() {
      outputHolder.dialog();
   });
   return false;
});
});