$(document).ready(function () {
	var mySwiper = new Swiper ('.swiper-container', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		speed: 1000,
        autoplay: true
    });

	// Hamburger on click events
    $('.hamburger').on('click', function() {
    	$(this).toggleClass('active');
    	$('.sub-li, .sub-li-sub').addClass('canclick');
    	if ($(this).hasClass('active')) {
    		$('.header-nav').addClass('active');
    	} else {
    		$('.header-nav').removeClass('active');
    	}
    });
    // Hamburger on click events

    // Nav(media < 1024) click events
    function subMenu(li, ul) {
    	li.on('click', '> a', function(e) {
    		e.stopPropagation();
    		$(this).parent(li).toggleClass('active');
    		ul.toggleClass('active');
    	});
    }
    subMenu($('.sub-li'), $('.sub-ul'));
    subMenu($('.sub-li-sub'), $('.sub-ul-sub'));
    // Nav(media < 1024) click events

    // Header navigation onclick scrolling to section
    $('.header-nav > li').on('click', 'a', function(e) {
        e.preventDefault();
        var idSection = $(this).attr('href'),
            section = $(idSection).offset().top + 1;
        $('body, html').animate({scrollTop: section}, 1500);
    });
    // Header navigation onclick scrolling to section

    // Sticky header and active <li> when scroll to section
    function onScroll() {
    	var scrollTop = $(document).scrollTop();
        $('.header-nav > li > a').each(function() {
            var hash = $(this).attr('href'),
                target = $(hash);
            if (target.position().top <= scrollTop &&  target.position().top + target.outerHeight() > scrollTop) {
                $('.header-nav li.active').removeClass('active');
                $(this).parent('li').addClass('active-li');
			    if (hash == '#about') {
			    	$('.progress-line').addClass('active');
			    }
            } else {
                $(this).parent('li').removeClass('active-li');
            }
        });
        if ($(window).scrollTop() > 100) {
            $('.header').addClass('sticky');
        } else {
            $('.header').removeClass('sticky');
        }
    }

    $(document).on('scroll', onScroll);
    // Sticky header and active <li> when scroll to section
});
    