//Old browser not supported
var isoldandroid = false;
var isbot = false;
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
    isoldandroid = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1) && (!(nua.indexOf('Chrome') > -1) || parseFloat(getAndroidVersion(nua))<5));
    if (nua.indexOf('Chrome') > -1 && getChromeVersion()>=40) {
        isoldandroid = false;
    }
    
    if (isoldandroid) {
        //alert("Browser ของคุณอาจไม่รองรับการแสดงผลหน้าเว็บ แนะนำให้คุณเปลี่ยนไปใช้ Google Chrome เวอร์ชั่นล่าสุด");
    }
    
    isbot = /bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent);;
    
    //alert("duck");
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

//mobile fix
//fix menu
$(document).ready(function() {
    if(isoldandroid) {
        //$("body").append('<div class="menu-wapp clearfix"><div class="wappp"><div class="menum"><div class="container"> <aside class="sidebar"> <nav class="nav"> <ul class="nav-items"> <li class="nav-title">เมนู</li><li> <a href="shop.html" class="nav-link">สั่งทำเสื้อ</a> </li><li> <a href="Blogs.html" class="nav-link">บล็อก</a> </li><li> <a href="contact.html" class="nav-link">ติดต่อสมศรี</a> </li></ul> </nav> </aside> <div class="hamburger"> <div class="bar"></div><div class="bar"></div><div class="bar"></div></div></div><script src="js/index_tgm.js"></script></div><div class="logoim left"><a href="index.html"><img class="loim" src="im/somlogo.png"></a></div><nav class="menudis right"><ul class="meundis_ul"><div class="dr"><a href="shop.html"><li class="meundis_li">สั่งทำเสื้อ</li></a></div><div class="dr"><a href="Blogs.html"><li class="meundis_li">บล็อก</li></a></div><a href="contact.html"><li class="meundis_li meundis_linone">ติดต่อสมศรี</li></a></ul></nav></div></div>');
        //$("body").append(' <nav id=\"topmenu\" class=\"navbar navbar-expand-lg navbar-dark fixed-top\"> <a class=\"navbar-brand\" href=\"index.html\"><img src=\"im\/somlogobeta.png\"><\/a> <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"> <span class=\"navbar-toggler-icon\"><\/span> <\/button> <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"> <ul class=\"navbar-nav mr-auto\"> <\/ul> <ul class=\"navbar-nav my-2 my-lg-0\"> <li class=\"nav-item\"> <a class=\"nav-link\" href=\"shop.html\">\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E40\u0E2A\u0E37\u0E49\u0E2D<\/a> <\/li><li class=\"nav-item\"> <a class=\"nav-link\" href=\"portfolio.html\">\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E32\u0E19\u0E21\u0E32<\/a> <\/li><li class=\"nav-item\"> <a class=\"nav-link\" href=\"price.html\">\u0E23\u0E32\u0E04\u0E32<\/a> <\/li><li class=\"nav-item dropdown\"> <a class=\"nav-link dropdown-toggle\" href=\"#\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> \u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14 <\/a> <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"> <a class=\"dropdown-item\" href=\"size.html\">\u0E02\u0E19\u0E32\u0E14\u0E40\u0E2A\u0E37\u0E49\u0E2D<\/a> <a class=\"dropdown-item\" href=\"faq.html\">\u0E04\u0E33\u0E16\u0E32\u0E21\u0E17\u0E35\u0E48\u0E1E\u0E1A\u0E1A\u0E48\u0E2D\u0E22<\/a> <a class=\"dropdown-item\" href=\"fabric.html\">\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E1C\u0E49\u0E32<\/a> <a class=\"dropdown-item\" href=\"why.html\">\u0E17\u0E33\u0E44\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E40\u0E23\u0E32?<\/a> <a class=\"dropdown-item\" href=\"example.html\">\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E40\u0E2A\u0E37\u0E49\u0E2D<\/a><!--<div class=\"dropdown-divider\"><\/div><a class=\"dropdown-item\" href=\"#\">Something else here<\/a>--> <\/div><\/li><li class=\"nav-item\"> <a class=\"nav-link\" href=\"about.html\">\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32<\/a> <\/li><li class=\"nav-item\"> <a class=\"nav-link\" href=\"contact.html\">\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E2A\u0E21\u0E28\u0E23\u0E35<\/a> <\/li><\/ul> <\/div><\/nav>');
        $("#topmenu .nav-link").css("font-size","12.5pt");
        
    }
});