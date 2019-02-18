$(document).ready(function(){

	//wow-js-active
	new WOW().init();

	// menu-fixed
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		if (top>120)
		{
			$('header').addClass('header-bg');
		}
		else
			if($('header').hasClass('header-bg'))
			{
				$('header').removeClass('header-bg');
			}
	});
	
	// calender
	window.addEventListener('load', function () {
			vanillaCalendar.init({
				disablePastDays: true
			});
		})
	
	// slicknav js
	$(function(){
		$('#menu').slicknav({
			label:"",
		});
	});

	//go to top
	$(window).scroll(function(){
		if($(this).scrollTop() > 150)
		{
			$('#gotopbtn').fadeIn();
		}
		else{
			$('#gotopbtn').fadeOut();
		}
	});
	$('#gotopbtn').click(function(){

		$('html ,body').animate({scrollTop : 0},800);

	});





})