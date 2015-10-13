var slides_iceland = 23;
var slides_israel = 29;
var slides_southwest = 22;
var slides_artphotos = 10;
var slides_painting = 17;
var slides_illustration = 43;

// go to next slide
function getSecondPart(str) {
  return str.split('#')[1];
};   

function nextSlide(slide){
      //hide last slide
    var anchor = "#" + slide;
    $(anchor).toggle();

    //show next slide
    slide += 1;
    var anchor = "#" + slide;
    location.href = anchor;
    $(anchor).toggle();

    return
}

$(document).ready(function(){

  //get current slide
  var slide = parseInt(getSecondPart(window.location.href));
  var anchor = "#" + slide;
  $(anchor).toggle();


  //next button to next slide
  $("#next").click(function(){
    var meta = $('meta[name="page"]').attr("content");
    switch(meta){
      case 'iceland':
          if (slide < slides_iceland){
            nextSlide(slide);
            slide += 1;
          }
          break;
      case 'israel':
          if (slide < slides_israel){
            nextSlide(slide);
            slide +=1;
          }
          break;
      case 'artphotos':
          if (slide < slides_artphotos){
            nextSlide(slide);
            slide +=1;
          }
          break;
      case 'southwest':
          if (slide < slides_southwest){
            nextSlide(slide);
            slide +=1;
          }
          break;
      case 'illustration':
          if (slide < slides_illustration){
            nextSlide(slide);
            slide +=1;
          }
          break;
      case 'painting':
          if (slide < slides_painting){
            nextSlide(slide);
            slide +=1;
          }
          break;
      default:
          nextSlide(slide);
    }

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

      //back
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

      //next
      if (e.which==39){
          //hide last slide
         
    var meta = $('meta[name="page"]').attr("content");
    console.log(meta);
    switch(meta){
      case 'iceland':
          if (slide < slides_iceland){
            nextSlide(slide);
            slide += 1;
          }
          break;
      case 'israel':
          if (slide < slides_israel){
            nextSlide(slide);
            slide +=1;
          }
          break;
      case 'artphotos':
          if (slide < slides_artphotos){
            nextSlide(slide);
            slide +=1;
          }
          break;
      case 'southwest':
          if (slide < slides_southwest){
            nextSlide(slide);
            slide +=1;
          }
          break;
      case 'illustration':
          if (slide < slides_illustration){
            nextSlide(slide);
            slide +=1;
          }
          break;
      case 'painting':
          if (slide < slides_painting){
            nextSlide(slide);
            slide +=1;
          }
          break;
      default:
          nextSlide(slide);
    }

      }

  });
});
 
});  

$(document).ready(function(){
 var fullscreen = false;
  var img_source = "source"
   $('.al_slideshow').click(function(){
    img_source = $(this).attr("src")
    $('.fullscreen-img').attr("src",img_source)
    $('.fullscreen').fadeToggle("slow", function(){
        fullscreen = true;
    });
  })
  $('.fullscreen').click(function(){
    if (fullscreen == true){
      $('.fullscreen').fadeToggle("slow", function(){
        fullscreen = false;
    });
    }
    
  })

})
