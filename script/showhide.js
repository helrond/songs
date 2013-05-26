$(document).ready(function () {
    if ($(window).width() > 480) {
        $('.song-list-title a').prop('href', '#');
        $('.song-list-title').hover(function () {
            $('.song-list-title').css('background-color', '#e9e9e9e9');
        });
        $('.song-list-title').click(function () {
            $('.song-list-content').css('display', 'none');
            $('.song-list-title').css('background-color', '#ffffff');
            $(this).next().slideToggle();
            $(this).css('background-color', '#d9d9d9d9');
        });
    }
});
