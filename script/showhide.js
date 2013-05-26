$(document).ready(function () {
    if ($(window).width() > 480) {
        $('.song-list-title a').prop('href', '#');
        $('.song-list-title').mouseenter(function () {
            $(this).css('background-color', '#eeeeee');
        });
        $('.song-list-title').mouseleave(function () {
            $(this).css('background-color', '#ffffff');
        });
        $('.song-list-title').click(function () {
            $('.song-list-content').css('display', 'none');
            $('.song-list-title').css('background-color', '#ffffff');
            $(this).next().slideToggle();
            $(this).css('background-color', '#dddddd');
        });
    }
});
