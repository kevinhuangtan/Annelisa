
$(document).ready(function() {
  // var class_pic  = $(e.target).attr('class');

  // if (class_pic=="mos_pic reveal"){
  //   $(e.target).css('opacity', '1');
  // };
     var numbers = [];
    while (numbers.length < 96) {
        // ParseInt for rounding. Real random numbers are 99 starting on 1.
        var number = Math.floor(Math.random() * 102 + 1); ; 
        // save the number into an array and avoid duplicated.
        if( $.inArray(number, numbers) == -1 ){
            numbers.push(number);
            var newid = "thumb" + number;
            $("#thumb").attr("id",newid);
        }
    }
});