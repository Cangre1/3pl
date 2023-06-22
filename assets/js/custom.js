(function ($) {
	
	"use strict";

	// Header Scrolling Set White Background
	scrollNavBar();

	// Window Resize Mobile Menu Fix
	mobileNav();

	/*
	var settings = {
		"url": "https://v1.nocodeapi.com/digitalfellow/instagram/jcLgiTaQvpQlwgUk?limit=4",
		"method": "get",
		"timeout": 0,
		"headers": {
			"Content-Type": "application/json"
		},
	};
	
	$.ajax(settings).done(function (response) {
		for (var i = 0; i < response.data.length; i++) {
			console.log(response.data[i])
			$(".grilla-item-" + i).html("<a target='_blank' href=" + response.data[i].permalink + "><img src='" + response.data[i].media_url +"'></img></a>");
		}
	}); 
	*/

	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$(".menu-trigger").on('click', function() {	
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 30
				}, 700);
				return false;
			}
		}
	});

	// Home Video
	if ($('.btn-play').length) {
		console.log('holis');
		$('.btn-play').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});
	}

	// Home number counterup
	if($('.count-item').length){
		$('.count-item strong').counterUp({
			delay: 10,
			time: 1000
		});
	}


	// Blog cover image
	if($('.blog-post-thumb').length){
		$('.blog-post-thumb .img').imgfix();
	}


	// Page standard gallery
	if($('.page-gallery').length && $('.page-gallery-wrapper').length){
		$('.page-gallery').imgfix({
			scale: 1.1
		});

		$('.page-gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
			}
		});
	}


	// Page loading animation
	$(window).on('load', function() {
		$(".loader-wrapper").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				// Home Parallax
				if($('#download').length){
					$('#download').parallax({
						imageSrc: 'assets/images/photos/parallax.jpg',
						zIndex: '1'
					});
				}

				// Home Parallax Subscribe
				if($('#subscribe').length){
					$('#subscribe').parallax({
						imageSrc: 'assets/images/photos/parallax-subscribe.jpg',
						zIndex: '1'
					});
				}
				$(".loader-wrapper").css("visibility", "hidden").fadeOut();
			}, 300);
		});
		
	});


	// Header Scrolling Set White Background
	$(window).on('scroll', function() {
		scrollNavBar();
	});


	// Window Resize Mobile Menu Fix
	$(window).on('resize', function() {
		mobileNav();
	});


	// Window Resize Mobile Menu Fix
	function mobileNav() {
		var width = $(window).width();
		$('.submenu').on('click', function() {
			if(width < 992) {
				$('.submenu ul').removeClass('active');
				$(this).find('ul').toggleClass('active');
			}
		});
	}


	// Navbar Scroll Set White Background Function
	function scrollNavBar() {
		var width = $(window).width();
		if(width > 0) {
			var scroll = $(window).scrollTop();
			if (scroll >= 30) {
				$(".header-area").addClass("header-sticky");
			}else{
				$(".header-area").removeClass("header-sticky");
			}
		}
	}

	var phrases1 = ["Carga y generación de pedidos", "Stock online", "Tracking y seguimiento de cada pedido", "100% integrable con tu ERP"];
	var indexx1 = 0;

	var phrases2 = ["Seguridad 24HS", " Red de incendios con hidrantes y sprinkler", "Docks de carga para contenedores", "Wharehouse 100% digital con WMS", "Racks de calidad internacional adaptables"];
	var indexx2 = 0;

	var phrases3 = ["Picking selectivo y preparación de pedidos, locales y de exportación", "Embolsado y termocontraido", "Etiquetados y estampillado", "Desconsolidación de contenedores", "Paletizado y acondicionamiento de productos"];
	var indexx3 = 0;

	var phrases4 = ["Envíos a todo el país", "Logística inversa: retiro y gestión de devoluciones", " Gestión y envío de pedidos de exportación", "Tracking de despachos online", " Gestión y administración de documentación"];
	var indexx4 = 0;

	window.setInterval(function() {
		if(indexx1 < phrases1.length) {
			indexx1++ ;	
		} else if (indexx1 === phrases1.length) {
			indexx1 = 0;
		}
		//console.log(indexx1);
		$('.card-phrase-text-animation-1').text(phrases1[indexx1]);
	}, 3000);

	window.setInterval(function () {
		if (indexx2 < phrases2.length) {
			indexx2++;
		} else if (indexx2 === phrases2.length) {
			indexx2 = 0;
		}
		//console.log(indexx2);
		$('.card-phrase-text-animation-2').text(phrases2[indexx2]);
	}, 3500);

	window.setInterval(function () {
		if (indexx3< phrases3.length) {
			indexx3++ ;
		} else if (indexx3 === phrases3.length) {
			indexx3= 0;
		}
		//console.log(indexx3;
		$('.card-phrase-text-animation-3').text(phrases3[indexx3]);
	}, 3100);

	window.setInterval(function () {
		if (indexx4< phrases4.length) {
			indexx4++ ;
		} else if (indexx4 === phrases4.length) {
			indexx4= 0;
		}
		$('.card-phrase-text-animation-4').text(phrases4[indexx4]);
	}, 3800);

	if ($('.js-ajax-form').length) {
		$('.js-ajax-form').each(function() {
		  $(this).validate({
			errorClass: 'error wobble-error',
			submitHandler: function(form) {
			  $.ajax({
				type: 'POST',
				url: '../../mail.php',
				data: $(form).serialize(),
				success: function() {
				  console.log('todo okey!');
				  
				},
	
				error: function() {
				  $('.col-message, .error-message').show();
				}
			  });
			}
		  });
		});
	  }


	


})(window.jQuery);