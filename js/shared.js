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

//fade loading transition use pace.js instead (update fade.css to use pace class selector instead of writing new fucking long js)

//Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-104199832-1', 'auto');
ga('send', 'pageview');