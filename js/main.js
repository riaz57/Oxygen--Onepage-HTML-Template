$(function() {

    $(document).ready(function() {
            /*------- preloader -------*/
        $('#loader-body').fadeOut(800);
    });

        /*------- home carousel -------*/
    $('#hero-slider').owlCarousel({
        margin:0,
        loop:true,
        mouseDrag:false,
        autoplay:true,
        animateOut: 'fadeOut',
        autoplayTimeout:7000,
        autoplayHoverPause:true,
        nav:true,
        dots:false,
        items:1,
        navText: ['<i class="fas fa-angle-left"><i>','<i class="fas fa-angle-right"><i>'],
        navElement: 'a'
    });
   
        /*------- smart scroll -------*/
    smartScroll.init({
      addActive: true, // default true
      activeClass: "active", // default active
      offset: 50,
      speed: 1000
    });

        /*------- animated progress bar -------*/
    $('#about').one('inview', function(event, isInView) {
      if (isInView) {
        $('.progress-bar').each(function() {
            var item = parseInt($(this).attr("aria-valuenow"));
            $(this).animate({
                width: item+'%'
            },1500, '');
        });
      }
    });

        /*------- counter -------*/
    $('div').one('inview', function(event, isInView) {
      if (isInView) {
        $('.counter').countTo({
            speed: 4000,
            refreshInterval: 100
        });
      }
    });

        /*------- twitter carousel -------*/
    $('.twitter-slide').owlCarousel({
        loop:true,
        margin:0,
        mouseDrag:false,
        autoplay:true,
        autoplayTimeout:5000,
        nav:true,
        dots:false,
        items:1,
        navText: ['<i class="fas fa-angle-left"><i>','<i class="fas fa-angle-right"><i>'],
        navElement: 'a',
        navContainer: '#call-to-action'
    });

        /*------- google map -------*/
    $('#map')
      .gmap3({
        center:[22.356852, 91.783180],
        zoom:8
      })
      .marker([
        {position:[22.356852, 91.783180]},
        {address:"4203 Chattogram, Bangladesh"}
      ])
      .on('click', function (marker) {
        marker.setIcon('https://maps.google.com/mapfiles/marker_green.png');
      });

      

});