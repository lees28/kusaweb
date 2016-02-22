$(document).ready(function() {
	
//--------------- navbar/navigation ------------------//
	//fix nav bar at top when scrolled down
	$(window).bind('scroll', function() {
		var header_height = $('#header').height();
		var nav_height = $('#navbar').height();
		var height = header_height - nav_height
		if($(window).scrollTop() > height) {
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
	$('#toTop a').click(function (e) {
		e.preventDefault();
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

//----------------------Events-----------------------//
	$("#event-pagination li").click(function (e) {
		e.preventDefault();

		// currently activated page
		var activeID = '#' + $('#event-pagination .active').attr('id');
		$(activeID).css({'display': 'none'});
		$('#event-pagination li').removeClass('active');

		// id of next page
		id = '#' + $(this).attr('id');	
		$(id).css({'display': 'block'});
		$(this).addClass('active');

		// change which page in the pagination bar is active
		// $('#prev-photo-page').removeClass('disabled');
		// $('#next-photo-page').removeClass('disabled');
		// if(id == '#photo-page-1') {
		// 	$('#prev-photo-page').addClass('disabled');
		// } else if(id == '#photo-page-2') {
		// 	$('#next-photo-page').addClass('disabled');
		// } 
	});

//------------------ Photo gallery-------------------//


	// photo pagination
	$("#photo-pagination li").click(function (e) {
		e.preventDefault();

		// currently activated page
		var activeID = '#' + $('#photo-pagination .active').attr('id');
		$(activeID).css({'display': 'none'});
		$('#photo-pagination li').removeClass('active');

		// id of next page
		id = '#' + $(this).attr('id');	
		$(id).css({'display': ''});
		$(this).addClass('active');

		// change which page in the pagination bar is active
		// $('#prev-photo-page').removeClass('disabled');
		// $('#next-photo-page').removeClass('disabled');
		// if(id == '#photo-page-1') {
		// 	$('#prev-photo-page').addClass('disabled');
		// } else if(id == '#photo-page-2') {
		// 	$('#next-photo-page').addClass('disabled');
		// } 
	});

	// lightbox for photos
	$(".fancybox").fancybox({
		modal: true,
		arrows: false,
		closeBtn : true,
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
	    },
	    afterShow : function() {
	        $('.fancybox-skin').append('<a title="Close" class="fancybox-item fancybox-close" href="javascript:jQuery.fancybox.close();"></a>');
	    }
	});
	
	// Galleria photo slideshow
	Galleria.loadTheme('/static/galleria/themes/classic/galleria.classic.min.js');
	Galleria.ready(function() {
	    this.attachKeyboard({
	        left: this.prev,
	        right: this.next,
	        13: function() {
		        // start playing when return (keyCode 13) is pressed:
		        this.play(3000);
		    }
	    });
	});
	$(".fancybox").click(function() {
		var title = $(this).attr('href');
		var gallery = "#" + $(title).children().first().attr('id');
		Galleria.run(gallery);	
	});

//----------------Contact Form---------------//
	$('#form-submit').click(function (e) {
		if($('#form-subject').val().length == 0) {
			e.preventDefault();
			alert("Enter a subject!");
		} else if($('#form-email').val().length == 0) {
			e.preventDefault();
			alert("Enter your email address!");
		} else if($('#form-email').val().indexOf("@") == -1) {
			e.preventDefault();
			alert("Enter a valid email address!");
		} else if($('#form-message').val().length == 0) {
			e.preventDefault();
			alert("Enter your message!");
		} else {
			alert("Thanks for your feedback! :)");
		}
	});
	
});

