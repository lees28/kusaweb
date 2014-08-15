$(document).ready(function() {
	//fix nav bar at top when scrolled down
	$(window).bind('scroll', function() {
		var height = $('#navbar').height() + 'px';
		if($(window).scrollTop() > 240) {
			$('#navbar').addClass('fixed');
			$('#navbar').css('border-top', 0);
		} else {
			$('#navbar').removeClass('fixed');
			$('#navbar').css('border-top', '1px solid #EAEAEA');
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
            interval: 8000,
            target: '+=1',
            autostart: true,
    });

	// set width of images to be same as browser width
	var carousel_width = $('.jcarousel').width();
    $(".jcarousel li").width(carousel_width);

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
		keys: {
			next: null,
			prev: null,
			play: null
		},
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
		Galleria.ready(function() {
			this.attachKeyboard({
				left: this.prev,
				right: this.prev
			});
		});
		var title = "#" + $(this).attr('title')
		var gallery = "#" + $(title).children().first().attr('id');
		Galleria.run(gallery);	
	})


    // smooth scrolling to anchor
    $('#navbar a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    	var target = $(this.hash);
	      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      	if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - $('#navbar').height()
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