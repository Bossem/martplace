$(function(){

	
	$(".star-rate").rateYo({
		rating: 4.5,
		starWidth: "15px",
		readOnly: true,
	});

	$(".star-rate__product").rateYo({
		rating: 4.5,
		starWidth: "13px",
		readOnly: true,
	});

	$(".star-rate__single").rateYo({
		rating: 4.5,
		starWidth: "20px",
		readOnly: true,
	});

	$('.weekly-slider').slick({

		prevArrow: '<button type="button" class="slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="lnr lnr-chevron-right"></span></button>',
	});

	$('.followers-slider').slick({

		slidesToShow: 3,
		slidesToScroll: 3,
		prevArrow: '<button type="button" class="slick-prev"><span class="lnr lnr-chevron-left"></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="lnr lnr-chevron-right"></span></button>',
	});

	$('.header__burger').click(function () {
		$(".header__burger").toggleClass('show-burger');
		$(".nav-menu").slideToggle();
	});

	$('input[type="checkbox"], input[type="radio"], select').styler();

	$('.icon-th').on('click', function(){
    	$('.favourites-product__inner .product-card').removeClass('list');
    	$('.icon-th').addClass('sort-card');
    	$('.icon-th-list').removeClass('sort-card');
    });
    $('.icon-th-list').on('click', function(){
    	$('.favourites-product__inner .product-card').addClass('list');
    	$('.icon-th-list').addClass('sort-card');
    	$('.icon-th').removeClass('sort-card');
    });

    $(function(){

$('.tab-title li').not('.active').click(function(){
    var index = $(this).index();
    var content = $('.tab-content li').eq(index);
    $(this).addClass('active').siblings().removeClass('active');
    $('.tab-content li').css('display', 'none').eq(index).css('display', 'block');
});

    $('.tab-title li:first').addClass('active');
    $('.tab-content li:first').css('display', 'block');

});

	var mixer = mixitup('.products__items');
	
});