var wplook = (function ($) {
	"use strict";

	$(document).foundation();

	// Pour firefox, désactivation du rechargement de la page lors du clic sur un
	// bouton dans un formulaire
	$('#resaForm').on('submit', function(){
		return false;
	});
	$('#idnewsletter').on('submit', function(){
		return false;
	});

	$('#intro-ml').on('click', function(){
		$('#MLIntroModal').foundation('reveal', 'open');

		return false;
	})
	$('#deep-learning').on('click', function(){
		$('#MLDeepLearningModal').foundation('reveal', 'open');

		return false;
	})
	$('#deep-learning-cv').on('click', function(){
		$('#MLDeepLearningCVModal').foundation('reveal', 'open');

		return false;
	})
	$('#deep-learning-nlp').on('click', function(){
		$('#MLDeepLearningNLPModal').foundation('reveal', 'open');

		return false;
	})
	$('#techniques-ml').on('click', function(){
		$('#MLTechniquesA').foundation('reveal', 'open');

		return false;
	})
	$('#intro-skl-tf').on('click', function(){
		$('#MLScikitTF').foundation('reveal', 'open');

		return false;
	})
	$('#theorie').on('click', function(){
		$('#Theorie').foundation('reveal', 'open');

		return false;
	})
	$('#cours').on('click', function(){
		$('#Cours').foundation('reveal', 'open');

		return false;
	})
	

	var postGoogleForm = function(idForm) {
		var name = $('#name').val();
		var email = $('#email').val();

		if(name == null || name == "" || email == null || email == "") {
			$('#ErrorModal').foundation('reveal', 'open');
		} else {
			$.ajax({
				url: 'https://cors.5apps.com/?uri=https://docs.google.com/forms/d/1UtaASKQICsUli1TQcQgPegrFtTsdQusB-8jx4cgnwIA/formResponse',
				type: 'post',
				data: $(idForm).serialize(),
				success: function(data) {
					$('#RegisterModal').foundation('reveal', 'open');
				}
			});
		}
	};

	var wplook = {

		reserver: function() {
			postGoogleForm('#resaForm');
		}
		,
		postMailingList: function() {
			postGoogleForm('#idnewsletter');
		},

		// Start Functions
		startWpl: function () {
			wplook.ParallaxBackgroundsWpl();
			wplook.MobileMenuWpl();
			wplook.OwlSliderWpl();
			wplook.MainMenuWpl();
			if(window.wplMap) {
				wplook.GoogleMapsWpl();
			}

			wplook.DetectiOSWpl();
		},

		// Parallax Backgrounds
		ParallaxBackgroundsWpl: function () {
			$(window).stellar({
				responsive: true,
				horizontalScrolling: false,
				verticalScrolling: true,
				parallaxBackgrounds: true,
				parallaxElements: true,
				hideDistantElements: true
			});
		},



		// Mobile Menu
		MobileMenuWpl: function () {
			$( ".navmobile a" ).click(function(e) {
				e.preventDefault();
				$(this).toggleClass('close');
				$(".nav-menu").toggleClass('showme');
			});
			$(".nav-menu li a").click(function(e) {
				$(this).toggleClass('close');
				$(".nav-menu").toggleClass('showme');
			});
			$(".navmobile").waypoint(function(direction) {
				$(".navbar-fixed").toggleClass("isStuck");
			}, {offset: -1});

			if ($(window).width() < 950) {
				$(".main_menu.navbar-fixed").css("position", "relative");
			}
		},


		//
		OwlSliderWpl: function () {
			//Slider owl-testimonials
			var owltestimonials = $("#owl-testimonials");
			owltestimonials.owlCarousel({
				items : 3,
				itemsDesktop : [1000,3],
				itemsDesktopSmall : [900,2],
				itemsTablet: [600,1],
				itemsMobile : [480,1]
			});
			// Navigation owl-testimonials
			$(".next").click(function(){
				owltestimonials.trigger('owl.next');
			});
			$(".prev").click(function(){
				owltestimonials.trigger('owl.prev');
			});

			//Owl-gallery
			var owlgallery = $("#owl-gallery");
				owlgallery.owlCarousel({
				singleItem:true
			});
			$(".next-gallery").click(function(){
				owlgallery.trigger('owl.next');
			});
			$(".prev-gallery").click(function(){
				owlgallery.trigger('owl.prev');
			});
		},

		// Main menu
		MainMenuWpl: function () {
			$('.nav-menu').onePageNav({
				currentClass: 'active',
				changeHash: false,
				scrollSpeed: 750,
				scrollThreshold: 0.5,
				filter: '',
				easing: 'swing'
			});
		},
		// iosDetect
		DetectiOSWpl: function () {
			Modernizr.addTest('ipad', function () {
				return !!navigator.userAgent.match(/iPad/i);
			});
			Modernizr.addTest('iphone', function () {
				return !!navigator.userAgent.match(/iPhone/i);
			});
			Modernizr.addTest('ipod', function () {
				return !!navigator.userAgent.match(/iPod/i);
			});
			Modernizr.addTest('appleios', function () {
				return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone);
			});
		},

		// Google maps
		GoogleMapsWpl: function () {

			var map;
			var montreal = new google.maps.LatLng(wplMap.Lat, wplMap.Long);

			var MY_MAPTYPE_ID = 'custom_style';
			function initialize() {
				var featureOpts = [
					{
						stylers: [
							{ saturation: -20 },
							{ lightness: 40 },
							{ visibility: 'simplified' },
							{ gamma: 0.8 },
							{ weight: 0.4 }
						]
					},
					{
						elementType: 'labels',
						stylers: [
							{ visibility: 'on' }
						]
					},
					{
						featureType: 'water',
						stylers: [
							{ color: '#dee8ff' }
						]
					}
				];

				var mapOptions = {
					zoom: 14,
					scrollwheel: false,
					panControl: false,
					mapTypeControl: false,
		  			streetViewControl: false,
					center: new google.maps.LatLng(wplMap.Lat, wplMap.Long),
					mapTypeControlOptions: {
						mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
					},
					mapTypeId: MY_MAPTYPE_ID
				};

				map = new google.maps.Map(document.getElementById('js-map'),mapOptions);
				var image = '/img/map-marker.png';
				var myLatLng = new google.maps.LatLng(wplMarker.Lat, wplMarker.Long);
				var beachMarker = new google.maps.Marker({
					position: myLatLng,
					map: map,
					icon: image
				});
				var styledMapOptions = {
					name: 'Custom Style'
				};

				var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

				map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
			}

			google.maps.event.addDomListener(window, 'load', initialize);
		}
	};

	$(document).ready(function () {
		wplook.startWpl();
	});

	return wplook;

})(jQuery);
