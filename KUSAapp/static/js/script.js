$(document).ready(function() {
	// photo carousel
	var carousel = $('.jcarousel').jcarousel({
		wrap: 'both'
	}); 
	carousel.jcarouselAutoscroll({
            interval: 3000,
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
    	}
    });

    $('.jcarousel-pagination img').hover(function() {
    	$(this).attr('src', '/static/images/grey_dot.png')
    }, function() {
	  $(this).attr('src', '/static/images/dot.png');
	});


    // smooth scrolling to anchor
    $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	    	var target = $(this.hash);
	      	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      	if (target.length) {
	        	$('html,body').animate({
	          		scrollTop: target.offset().top
			    }, 1000);
			    return false;
			}
	    }
	});

    // scroll to top
	$("#toTop").click(function () {
		$("html, body").animate({scrollTop: 0}, 1000);
	});
	
});