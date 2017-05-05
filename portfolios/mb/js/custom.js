$(document).ready(function(){
	$(".navbar-header .navbar-toggle").click(function () {
		    $(this).toggleClass("active");	    
		    $('.text-menu').toggle();
		    $(this).siblings('img').toggle();
		    $(this).parents('.menu').toggleClass('menu2');
	  });
	$('#our-slider').owlCarousel({
		items: 1,
		itemsCustom: [0,1],
		singleitem: true,
		responsive: true,
		pagination: false
	});
	$('.next').click(function(){
		$('#our-slider').trigger('owl.next');
		return false;
	})
	$('.prev').click(function(){
		$('#our-slider').trigger('owl.prev');
		return false;
	});

});