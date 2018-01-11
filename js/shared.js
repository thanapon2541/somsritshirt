//Old browser not supported
var isoldandroid = false;
var isbot = false;
var isMobile = false; //initiate as false

$(document).ready(function() {
    // device detection
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
    
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

$("document").ready(function() { setTimeout(function() {
    //console.log($(this.$el));
    $("#topmenu").find('li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeIn(100);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut(100);
    });
},10); });

//fade loading transition use pace.js instead (update fade.css to use pace class selector instead of writing new fucking long js)

//Google analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

//hotjar analytics
(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:734867,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');

//fb pixel
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '132063814134906'); // Insert your pixel ID here.
fbq('track', 'PageView');

//Google tag manager
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KG5R8HS');


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