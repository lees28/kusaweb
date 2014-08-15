$(document).ready(function() {
	
//--------------- navbar/navigation ------------------//
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

//----------------- photo carousel ------------------//
	var carousel = $('.jcarousel').jcarousel({
		scroll: 1,
		wrap: 'both'
	}); 
	carousel.jcarouselAutoscroll({
            interval: 6000,
            target: '+=1',
            autostart: true,
    });

	// set width of images to be same as browser width
	var width = $('.jcarousel').width();
    $(".jcarousel li").width(width);

    // set position for photo descriptions
    var ltwidth = 2*width - 442;
    var ldwidth = 2*width - 212;
    $("#learn-title").css({"left": ltwidth});	
	$("#learn-desc").css({"left": ldwidth});
	var ctwidth = 3*width - 488;
	var cdwidth = 3*width - 158;
	$("#connect-title").css({"left": ctwidth});	
	$("#connect-desc").css({"left": cdwidth});

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

//-------------- bootstrap tabs/pills --------------//
	// about pills
	$('#about-tab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
	// absolute position for white rectangle at the end of about
	$('#white-rectangle').css({"left": width/2, "top":$("#header").height() + $("#carousel").height() + 410});

    // exec tabs
	$('#exec-tab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

//------------------ Photo gallery-------------------//
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
	
	// Galleria photo slideshow
	Galleria.loadTheme('/static/galleria/themes/classic/galleria.classic.min.js');
	$(".fancybox").click(function() {
		Galleria.ready(function() {
			this.attachKeyboard({
				left: this.prev,
				right: this.prev
			});
		});
		var title = $(this).attr('href');
		var gallery = "#" + $(title).children().first().attr('id');
		Galleria.run(gallery);	
	})
	
});