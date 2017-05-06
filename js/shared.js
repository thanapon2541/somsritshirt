// Scroll top 
$(document).on('click','.scroll_top',function(){
  $('body,html').animate({scrollTop:0},400);
  return false;
});

setInterval(function() {
  if ($(window).scrollTop()==0) {
    $(".scroll_top").css("pointer-events","none");
    $(".scroll_top").css("opacity",0);
  } else {
    $(".scroll_top").css("pointer-events","auto");
    $(".scroll_top").css("opacity",1);
  }
},200);

//fade transition
function stopfade() {
  $("#fader").animate({opacity:0},500,function() {
    $("#fader").css("display","none");
  });
}

function startfade() {
  $("body").append('<link rel="stylesheet" href="/css/fade.css">');
  $("body").append('<div id="fader"></div>');
}

$(document).ready(function() { //don't change
  if (window.parent==window) startfade(); //run for first time (for page without iframe)
});

$(window).on("load",function() { //don't change
    console.log(window.location+" loaded");
    window.parent.stopfade();
});

//new version fade (modern fade transition -> secret of programming world)
function isPathAbsolute(path) { //library function
  return /^(?:\/|[a-z]+:\/\/)/.test(path);
}

function changepage(href,nopushstate) {
  //if in iframe -> do change page in root instead
  //will do only in iframe that has this script
  //if iframe to google it won't do change page
  if (window.parent!=window) {
    window.parent.changepage(href,nopushstate);
    return;
  }
  
  //if not in iframe -> do change page
  if (!nopushstate) nopushstate = false;
  console.log("Change page : "+href);
  if (isPathAbsolute(href)) {
    window.location = href;
  }
  if (!nopushstate) window.history.pushState(href, "", href);
  $.get(href,function(data) {
    $("html").html("");
    console.log("Code deleted but continue to run");
    $("html,body").css("width","100%");
    $("html,body").css("height","100%");
    $("html,body").css("margin","0");
    $("html,body").css("overflow","hidden");
    $("body").html('<iframe id="main" src='+href+' style="border:none;width:100%;height:100%;"></iframe>');
    startfade();
  })
}

$(document).ready(function() { //don't change
  if (window.parent!=window) {
    window.parent.document.title = document.title;
  }
});

$(window).on('popstate', function (e) {
    var state = e.originalEvent.state;
    if (state !== null) {
        changepage(state,true);
        console.log("Back : "+state);
    }
});

$(document).ready(function() {
  $("a").click(function(e) {
    e.preventDefault();
    changepage($(this).attr("href"));
  });
});