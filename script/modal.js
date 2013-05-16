$(document).ready(function() {
$('.song-list-title a').bind('click', function() {
   var $this = $(this);
   var outputHolder = $("<div class='home'></div>");
   $("body").append(outputHolder);
   outputHolder.load($this.attr("href"), null, function() {
      outputHolder.dialog({
         closeOnEscape: true,
         modal: true,
         });
   });
   return false;
});
});
