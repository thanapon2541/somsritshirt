$(window).on("load",function() {
    console.log(window.location+" loaded");
    window.parent.stopfade();
});

// Scroll top 
$(document).on('click','.scroll_top',function(){
  $('body,html').animate({scrollTop:0},400);
  return false;
});

setInterval(function() {
  if ($(window).scrollTop()==0) {
    $(".scroll_top").css("opacity",0);
  } else {
    $(".scroll_top").css("opacity",1);
  }
},200);