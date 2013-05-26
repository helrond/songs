$(document).ready(function () {
    if ($(window).width() > 480) {
        $("a").prop("href", "#");
        $('.song-list-title').click(function () {
            $('.song-list-content').css('display', 'none;');
            $(this).css('background-color', '#ffffff');
            $(this).next().slideToggle();
            $(this).css('background-color', '#999999');
        });
    }
});
