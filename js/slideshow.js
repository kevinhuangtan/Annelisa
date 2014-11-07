// go to next slide
function getSecondPart(str) {
return str.split('#')[1];
};   

$(window).load(function(){

  //get current slide
  var slide = parseInt(getSecondPart(window.location.href));
  var anchor = "#" + slide;
  $(anchor).toggle();


  //next button to next slide
  $("#next").click(function(){

    //hide last slide
    var anchor = "#" + slide;
    $(anchor).toggle();

    //show next slide
    slide += 1;
    var anchor = "#" + slide;
    location.href = anchor;
    $(anchor).toggle();

  });

  //back button to back slide
  $("#back").click(function(){
    if (slide>1){
    
    var anchor = "#" + slide;
    $(anchor).toggle();

    slide -= 1;

    var anchor = "#" + slide;
    location.href = anchor;
    $(anchor).toggle();
    }
  });

  //navigate with keys
  $(function(){
  $('html').keydown(function(e){

      if (e.which==37){
          if (slide>1){
    
            var anchor = "#" + slide;
            $(anchor).toggle();

            slide -= 1;

            var anchor = "#" + slide;
            location.href = anchor;
            $(anchor).toggle();
          }     
      }

      if (e.which==39){
          //hide last slide
          var anchor = "#" + slide;
          $(anchor).toggle();

          //show next slide
          slide += 1;
          var anchor = "#" + slide;
          location.href = anchor;
          $(anchor).toggle();

      }

  });
});


});  

//move to next slides wit harrows



