$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(300);
    $('body').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(300);
    $('body').removeClass('no-scroll');
});