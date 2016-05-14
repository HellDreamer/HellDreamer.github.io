$(function(){
	
	$('.js-tab-control').on('click', function(){
		$('.js-tab-control').removeClass('active');
		$(this).addClass('active');

		$('.js-tab').removeClass('active');
		$('.' + $(this).attr('data-tab')).addClass('active');

		return false;
	})


	$('.slider-carousel').bxSlider({
		minSlides: 5,
		maxSlides: 5,
		slideWidth: 180,
		slideMargin: 10,
		moveSlides: 1,
		pager: false
	});

	$('.slider-carousel-3').bxSlider({
		minSlides: 3,
		maxSlides: 3,
		slideWidth: 330,
		slideMargin: 10,
		moveSlides: 1,
		pager: false
	});

	$('.slider-feedback').bxSlider({
		auto: true,
		controls: false,
		pager: false,
		mode: 'fade',
		speed: 1000
	});

	$('.slider-carousel-1').bxSlider({
		pager: false
	});

	$('.see-password').on('click', function(){
		var field = $('.changer');

		$(this).toggleClass('active');

		if( field.attr('type') == 'password')
			field.attr('type','text');

		else if( field.attr('type') == 'text' )
			field.attr('type','password');

		return false;
	})

	$('.save-me').on('click', function(){
		$(this).toggleClass('active');
		return false;
	})
	
});