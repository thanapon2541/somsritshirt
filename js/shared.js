//Old browser not supported
$(document).ready(function() {
  function getAndroidVersion(ua) {
      ua = (ua || navigator.userAgent).toLowerCase(); 
      var match = ua.match(/android\s([0-9\.]*)/);
      return match ? match[1] : false;
  };
  function getChromeVersion () {     
      var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
  
      return raw ? parseInt(raw[2], 10) : false;
  }
  var nua = navigator.userAgent;
  var isoldandroid = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && (!(nua.indexOf('Chrome') > -1) || parseFloat(getAndroidVersion(nua))<5));
  if (nua.indexOf('Chrome') > -1 && getChromeVersion()>=40) {
    isoldandroid = false;
  }
  if (isoldandroid) {
    alert("Browser ของคุณอาจไม่รองรับการแสดงผลหน้าเว็บ แนะนำให้คุณเปลี่ยนไปใช้ Google Chrome เวอร์ชั่นล่าสุด");
  }
  //alert(navigator.userAgent);
});

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
  console.log("Stop fade");
}

function startfade() {
  $("body").append('<link rel="stylesheet" href="/css/fade.css">');
  $("body").append('<div id="fader"></div>');
  console.log("Start fade");
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
    return;
  }
  if (!nopushstate) { window.history.pushState(href, "", href); console.log("Push state: "+href); }
  $("html").html("");
  console.log("Code deleted but continue to run");
  $("html,body").css("width","100%");
  $("html,body").css("height","100%");
  $("html,body").css("margin","0");
  $("html,body").css("overflow","hidden");
  startfade();
  $.get(href,function(data) {
    console.log("New page source code loaded");
    $("body").append('<iframe id="main" src='+href+' style="border:none;width:100%;height:100%;"></iframe>');
  })
}

$(document).ready(function() { //don't change
  if (window.parent!=window) {
    window.parent.document.title = document.title;
  } else {
    var href = window.location.pathname;
    window.history.pushState(href, "", href); console.log("Push state: "+href);
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




//disable edut
$(document).ready(function() {
  console.log("aaa");
  $(".nav-items li").each(function() {
    if ($(this).find("a").html()=="EduT-") $(this).remove();
  });
  $(".meundis_ul .dr").each(function() {
    if ($(this).find("li").html()=="EduT-") $(this).remove();
  });
});