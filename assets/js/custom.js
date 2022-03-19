jQuery(document).ready(function ($) {

	jQuery("a#yt-preview").YouTubePopUp();


	/*==============================================================
	wow animation - on scroll
	==============================================================*/
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	$(window).imagesLoaded(function () {
		wow.init();
	});
	/* Menu Mobile */
	var $menu_show = $('.mobile-toggle'),
		$menu = $('header #menu-main'),
		$list = $("ul.nav-menu li a"),
		$menu_list = $('header li.has-dropdown'),
		$menu_ul = $('ul.sub-menu'),
		$cart_model = $('.cart-model'),
		$cart_link = $('#cart-link'),
		$search_bar = $('#search_bar'),
		$search_close = $('.close-search'),
		$search_bot = $('#search-header'),
		$fixed_header = $('#fixed-header'),
		$fixed_header_dark = $('#fixed-header-dark'),
		$sticky_content = $('.sticky-content'),
		$sticky_sidebar = $('.sticky-sidebar');

	// var list = $("ul.nav-menu li  a"); //Liste de tout les liens
	//Gestion du clique sur le boutton des trois bars afin d'afficher le menu dans les support avec un width <769
	$menu_show.on("click", function (e) {
		$menu.slideToggle();
	});
	//Gestion des cliques sur les liens avec élimination du comportement par défaut du a dans le cas où il existe un sous menu
	$list.on("click", function (e) {
		var submenu = this.parentNode.getElementsByTagName("ul").item(0);
		//S'il existe un sous menu sinon c'est un lien terminal
		if (submenu != null) {
			event.preventDefault();
			$(submenu).slideToggle();
		}
	});

	//Gestion du resize de la fenetre pour eliminer le style ajouté par la méthode .slideToggle()
	$(window).on("resize", function (e) {

		if ($(window).width() > 1024) {
			$("#menu-main > ul, nav > #menu-main  li  ul").removeAttr("style");
		}
	});


	/* Cart */
	$cart_link.on("click", function (e) {
		$cart_model.slideToggle("fast");
	});

	$(window).on("click", function (e) {
		$cart_model.hide("fast");
	});
	$cart_link.on("click", function (e) {
		event.stopPropagation();
	});
	/* Cart */


	/* Search */
	$search_bot.on("click", function (e) {
		$search_bar.slideToggle("fast");
	});

	$search_close.on("click", function (e) {
		$search_bar.hide("fast");
	});


	/* owl Slider  */
	var owl2 = $(".slider-1");
	var owl3 = $(".travelers-say-3");
	var owl = $(".testimonial-carousel");

	owl.owlCarousel({
		items: 3, //10 items above 1000px browser width
		itemsDesktop: [1000, 3], //5 items between 1000px and 901px
		itemsDesktopSmall: [900, 3], // betweem 900px and 601px
		itemsTablet: [600, 1], //2 items between 600 and 0
		slideSpeed: 1000,
		autoPlay: true,
		itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
	});

	owl3.owlCarousel({
		dotsContainer: '#carousel-custom-dots',
		items: 3, //10 items above 1000px browser width
		itemsDesktop: [1000, 3], //5 items between 1000px and 901px
		itemsDesktopSmall: [900, 3], // betweem 900px and 601px
		itemsTablet: [600, 1], //2 items between 600 and 0
		itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
	});

	/* Tooltip  */
	$('[data-toggle="tooltip"]').tooltip()


	/* Light Box */

	$(document).on('click', '[data-toggle="lightbox"]', function (e) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});


	/*  $fixed_header */
	$(window).on("scroll", function (e) {
		if ($(window).scrollTop() >= 300) {
			$fixed_header.addClass('fixed-header');
			$fixed_header_dark.addClass('fixed-header-dark');
		} else {
			$fixed_header.removeClass('fixed-header');
			$fixed_header_dark.removeClass('fixed-header-dark');
		}
	});


	/**************
	 Sticky Sidebar 
	**************/

	$sticky_content.theiaStickySidebar({
		additionalMarginTop: 30
	});
	$sticky_sidebar.theiaStickySidebar({
		additionalMarginTop: 30
	});




	/**************
	 One Page 
	**************/
	$(".nav-btn").on("click", function (e) {

		$(this).addClass("active");
		$(this).siblings().removeClass("active");

		var i = $(this).index();
		$('#nav-indicator').css('left', i * 100 + 'px');

		var name = $(this).attr("data-row-id");
		var id = "#" + name;
		var top = $(id).first().offset().top - 60;
		$('html, body').animate({
			scrollTop: top + 'px'
		}, 300);

	});

	/**************************************************** 
	                      Logo Center                  
	/****************************************************/
	var $logo = $('.div-center'),
		$header_output = $('.with-center');


	$(window).on("resize", function (e) {
		$logo.css({
			"padding-top": ($header_output.height() - ($logo.outerHeight() + 100)) / 2,
			"padding-bottom": ($header_output.height() - ($logo.outerHeight() + 100)) / 2
		});
	});
	$(window).resize();



});
