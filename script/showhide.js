$(document).ready(function () {
    if ($(window).width() > 768) {
        $('.song-list-title').click(function (event) {
            event.preventDefault();
            $('.song-list-content').hide();
            var id = $(this).attr('data-identifier');
            var scrolltop = $(window).scrollTop();
            var height = $(window).height()-10;
            $('.song-list-content').each(function(){
                if ($(this).attr('data-identifier') === id) {
                    if (scrolltop === 0) {
                        $(this).css('top', scrolltop+57)
                        $(this).css('min-height', height-52);
                    } else if (scrolltop <= 57) {
                        $(this).css('top', scrolltop + (57-scrolltop));
                        $(this).css('min-height', height-(52-scrolltop));
                    } else {
                        $(this).css('top', scrolltop+5)
                        $(this).css('min-height', height);
                    }
                    
                    $(this).show();
                }
            });
        });
        $('.song-print').on('click', function(){
            window.print();
        });
        $('.list-print').on('click', function(){
            window.print();
        });
    }
});
