// JavaScript Document
$(document).on('ready', function() {
	
	// Header CAROUSEL
	  var team = $("#my-carousel");	 //my carousel is user defind
	  team.owlCarousel({
		items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        autoPlay:true
		  
	  });
	   var team = $("#team-slider");	 //my carousel is user defind
	  team.owlCarousel({
		items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,3],
		itemsMobile:[680,1],
		type: 'opacy',
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:false,
		  
	  });
		
	 
	  // Custom Navigation Events
	  $(".next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
		owl.trigger('owl.prev');
	  })
	  $(".play").click(function(){
		owl.trigger('owl.play',500); //owl.play event accept autoPlay speed as second parameter
	  })
	  $(".stop").click(function(){
		owl.trigger('owl.stop');
	  })
	  
});