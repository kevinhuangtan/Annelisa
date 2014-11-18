$(window).load(function(){
// hover show text


	//size text 
	height = $(".category").height()/2.8;
	height_painting = $(".category").height()/6;
	width = $(".category").width();

	$(".work-text").css('margin-top', height+'px')
	$("#painting-text").css('margin-top', height_painting+'px')
	$(".work-text").css('width', width+'px')

	// size text on resize
	$(window).resize(function(){
	  height = $(".category").height()/2.8;
	$(".work-text").css('margin-top', height+'px')
	});
	$(window).resize(function(){
	  height_painting = $(".category").height()/6;
	  $("#painting-text").css('margin-top', height_painting+'px')
	});
	//size width text-align:center works!
	$(window).resize(function(){
	  width = $(".category").width();
	  $(".work-text").css('width', width+'px')
	});

});