$(document).ready(function() {
	//fix nav bar at top when scrolled down
	$(window).bind('scroll', function() {
		var height = $('#nav').height() + 'px';
		if($(window).scrollTop() > 240) {
			$('#nav').addClass('fixed');
			$('#nav').css('border-top', 0);
		} else {
			$('#nav').removeClass('fixed');
			$('#nav').css('border-top', '1px solid grey');
			$('#maininfo').css('margin-top', 0);
		}
	});

	//parallax scrolling
	// $('#carousel').stellar();

	// photo carousel
	var carousel = $('.jcarousel').jcarousel({
		scroll: 1,
		wrap: 'both'
	}); 
	carousel.jcarouselAutoscroll({
            interval: 6000,
            target: '+=1',
            autostart: true,
    });

	//arrows
	$('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    //pagination
    $('.jcarousel-pagination').jcarouselPagination({
    	'perPage': 1,
    	'item': function(page, carouselItems) {
        	return '<a href="#' + page + '"> <img src="/static/images/dot.png"> </a>';
    	},
    	'carousel': $('.jcarousel')
    });

    $('.jcarousel-pagination img').hover(function() {
    	$(this).attr('src', '/static/images/grey_dot.png')
    }, function() {
	    $(this).attr('src', '/static/images/dot.png');
	});
	
	// about tabs
	$('#about-tab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

    // exec tabs
	$('#exec-tab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

	// lightbox for photos
	$(".fancybox").fancybox({
		arrows: false,
		helpers : {
	        overlay : {
	            css : {
	                'background' : 'rgba(58, 42, 45, 0.5)'
	            }
	        },
	        title : null
	    }
	});
	
	Galleria.loadTheme('/static/galleria/themes/classic/galleria.classic.min.js');
	$(".fancybox").click(function() {
		var title = "#" + $(this).attr('title')
		var gallery = "#" + $(title).children().first().attr('id');
		Galleria.run(gallery);	
	})


    // smooth scrolling to anchor
    $('#nav a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    	var target = $(this.hash);
	      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      	if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - $('#nav').height()
				}, 1000);
			    return false;
			}
	    }
	});

    // scroll to top
	$('#toTop').click(function () {
		$('html, body').animate({scrollTop: 0}, 1000);
	});
	
});