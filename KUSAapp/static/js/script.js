$(document).ready(function() {
	//fix nav bar at top when scrolled down
	$(window).bind('scroll', function() {
		var height = $('#nav').height() + 'px';
		if($(window).scrollTop() > 240) {
			$('#nav').addClass('fixed');
			$('#nav').css('border-top', 0);
			$('#maininfo').css('margin-top', height)
		} else {
			$('#nav').removeClass('fixed');
			$('#nav').css('border-top', '1px solid grey');
			$('#maininfo').css('margin-top', 0)
		}
	});

	//parallax scrolling
	// $('#carousel').stellar();

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
    	},
    	'carousel': $('.jcarousel')
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

	// Exec members tab
	
	var checked = new Array();
	checked[0] = "tab-1";

	$('.tab').click(function() {
		var currInput = $(this).children('input');
		checked.push(currInput.attr('id'));
        
        var prevID = checked[checked.length-2];
        var parent = $('#' + prevID).parent();
        parent.children('.content').children().css('display', 'none');
		$(this).children('.content').children().fadeIn('fast');

    });
	
});