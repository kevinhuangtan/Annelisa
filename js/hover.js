$(window).load(function(){
// hover show text
$(document).on('mouseover',function(e) {
  var id_pic = $(e.target).attr('id');
  var class_pic  = $(e.target).attr('class');
  if (class_pic=="category"){
    if (id_pic=="photography-pic"){
      $("#photography-text").show();
      $("#illustration-text").hide();
      $("#painting-text").hide();
    }
    if (id_pic=="painting-pic"){
      $("#painting-text").show();
      $("#photography-text").hide();
      $("#illustration-text").hide();

    }
    if (id_pic=="illustration-pic"){
      $("#illustration-text").show();
      $("#photography-text").hide();
      $("#painting-text").hide();
    }
  }
  else{
    $("#photography-text-pic").hide();
    $("#illustration-text").hide();
    $("#painting-text").hide();
  }
});

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
