$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(300);
    //$('.popup-bg').addClass('do-scroll');
    $('body').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(300);
    //$('.popup-bg').removeClass('do-scroll');
    $('body').removeClass('no-scroll');
});