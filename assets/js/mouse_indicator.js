jQuery(document).ready(function ($) {

    $('a.scroll-link').click(function (e) {
        e.preventDefault();
        $id = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $($id).offset().top - 60
        }, 750);
    });

});