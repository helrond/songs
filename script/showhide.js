$(document).ready(function () {
    if ($(window).width() > 480) {
        $('.song-list-title a').prop('href', '#');
        $('.song-list-title').mouseenter(function () {
            $(this).addClass("hover");
        });
        $('.song-list-title').mouseleave(function () {
            $(this).removeClass("hover");
        });
        $('.song-list-title').click(function (event) {
        event.preventDefault();
            $('.song-list-content').css('display', 'none');
            $('.song-list-title').removeClass('select');
            $(this).next().slideToggle();
            $(this).addClass('select');
        });
    }
});
