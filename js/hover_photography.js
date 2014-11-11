$(window).load(function(){
  $(document).on('mouseover',function(e) {
    var id_pic = $(e.target).attr('id');
    var class_pic  = $(e.target).attr('class');
    if (class_pic=="work-img"){
      if (id_pic=="iceland"){
        $("#iceland-text").show();
        $("#israel-text").hide();
        $("#art-text").hide();
        $("#south-text").hide();
      }
      if (id_pic=="israel"){
        $("#israel-text").show();
        $("#iceland-text").hide();
        $("#art-text").hide();
        $("#south-text").hide();
    }
      if (id_pic=="art"){
        $("#art-text").show();
        $("#iceland-text").hide();
        $("#israel-text").hide();
        $("#south-text").hide();
      }
      if (id_pic=="southwest"){
        $("#south-text").show();
        $("#iceland-text").hide();
        $("#israel-text").hide();
        $("#art-text").hide();
      }
    }
    else{
      $("#iceland-text").hide();
      $("#israel-text").hide();
      $("#art-text").hide();
      $("#south-text").hide();
    }
  });


  height = $(".work-img").height()/2.8;
  width = $(".work-img").width();

  $(".work-text").css('margin-top', height+'px')
  $(".work-text").css('width', width+'px')

  // size text 
  $(window).resize(function(){
    height = $(".work-img").height()/2.8;
  $(".work-text").css('margin-top', height+'px')
  });
  //size width text-align:center works!


  $(window).resize(function(){
    width = $(".work-img").width();
    $(".work-text").css('width', width+'px')
  });

});
