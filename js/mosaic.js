
$(document).on('mouseover',function(e) {
  var class_pic  = $(e.target).attr('class');

  if (class_pic=="mos_pic reveal"){
    $(e.target).css('opacity', '1');
  };
});