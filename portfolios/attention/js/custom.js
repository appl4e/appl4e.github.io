$(document).ready(function () {
			  $(".navbar-toggle").on("click", function () {
				    $(this).toggleClass("active");
			  });
			  
			  $(".portfolio-item").hover(function (){
				$(this).find(".item-text").slideToggle(400);
			  });
			  
			  $('#our-slider').owlCarousel({
				items: 1,
				singleItem: true,
				pagination: false
			  });
			  $('.next').click(function(){
				$('#our-slider').trigger('owl.next');
				return false;
			  });
			  $('.prev').click(function(){
				$('#our-slider').trigger('owl.prev');
				return false;
			  });
			  
		});