//store cookies for intro
function get_cookie_string(str) {
  return str.split('=')[1];
};   
// window.onload=function(){
//   if (document.cookie){
//         document.getElementById("cover").style.display ='none';
//   }
//   else{
//     if (!document.cookie){
//         document.getElementById("intro").style.display ='block';
//         var intro = document.getElementById("intro");
//         var cover = document.getElementById("cover");

//         fade_delay(intro);
//         fade_cover_delay(cover);
//         document.cookie="visited=yes";
//     }
//   }
// };
function run(){
  if (document.cookie){
        document.getElementById("cover").style.display ='none';
  }
  else{
    if (!document.cookie){
        document.getElementById("intro").style.display ='block';
        var intro = document.getElementById("intro");
        var cover = document.getElementById("cover");

        fade_delay(intro);
        fade_cover_delay(cover);
        document.cookie="visited=yes";
    }
  }
};
run();
function fade_delay(element) {
    var timer = setTimeout(function () {
        fade(element);
    }, 2000);
  }
function fade_cover_delay(element) {
    var op = 1;  // initial opacity
    var timer = setTimeout(function () {
        fade_cover(element);
    }, 3150);
  }

  function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 30);
  } 
  
  function fade_cover(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 20);
  } 
