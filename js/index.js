$(document).ready(function() {
    //$("a[href^='#']").fixedHeaderScroll( {
    $(".header__link").fixedHeaderScroll( {
        headerSelector: 'header',
        offset: 0,
        //offset: $('.header').offsetHeight,
        smooth: true,
        smoothDuration: 500,
        smoothEasing: 'swing',
    });

    $('.header__burger, .header__link').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $(window).on('scroll', function() {
        $('#container').css({
            opacity: 0.5,
        })
    });
});

$(function() {
    $('.tabs-nav a').click(function() {
  
      // Check for active
      $('.tabs-nav li').removeClass('active');
      $(this).parent().addClass('active');
  
      // Display active tab
      let currentTab = $(this).attr('href');
      $('.tabs-content div').hide();
      $(currentTab).show();
  
      return false;
    });
});