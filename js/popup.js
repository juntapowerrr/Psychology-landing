$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(500);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});