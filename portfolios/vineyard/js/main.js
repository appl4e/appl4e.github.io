"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function fixedHeader(){$(window).scroll(function(){var e=$(window).scrollTop(),t=$(".floating-menu-bar");1452<=e?(t.addClass("show"),$(".back-to-top").addClass("show")):(t.removeClass("show"),$(".back-to-top").removeClass("show"))})}function openMainMenu(e){e.preventDefault(),$(".main-menu").addClass("show")}function triggerMainMenu(e){e.preventDefault(),$(".body").addClass("bounceToLeft"),setTimeout(function(){$(".floating-menu-bar").removeClass("show")},200),$(".main-menu").addClass("bounceFromRight"),setTimeout(function(){$(".body").removeClass("bounceToLeft")},1200)}function closeMainMenu(e){$(".main-menu").removeClass("show bounceFromRight"),$("#resortMenu").hasClass("show")&&setTimeout(function(){$("#resortMenu").removeClass("show")},1e3)}function showResortMenu(e){e.preventDefault(),$("#resortMenu").addClass("show")}function hideResortMenu(e){e.preventDefault(),$("#resortMenu").removeClass("show")}function showPropertyMenu(e){e.preventDefault(),$(".main-menu").addClass("hideToLeft"),$("#propertyMenu").addClass("show"),setTimeout(function(){$(".main-menu").removeClass("hideToLeft"),$("#resortMenu").removeClass("show"),$(".main-menu").removeClass("show")},1e3)}function hidePropertyMenu(e){e.preventDefault(),$(".main-menu").addClass(".show"),setTimeout(function(){$("#propertyMenu").removeClass("show")},1e3),openMainMenu()}function initPropertySlider(){var e=$("#propertySlider");e.owlCarousel({items:2,dots:!1,smartSpeed:800,nav:!1}),$("#otherRooms").click(function(){e.trigger("to.owl.carousel",[2,800])})}function awardDetails(){$(".award-blocks").click(function(){var e=$(this).index();$(".details-modal-tab-backdrop").addClass("show"),$(".details-modal-tab").addClass("show"),$(".details-modal-tab .nav-pills li").eq(e).children("a").addClass("active"),$(".details-modal-tab .tab-content .tab-pane").eq(e).addClass("fade show active"),$("#awardDetailsClose, .details-modal-tab-backdrop").click(function(){$(".details-modal-tab-backdrop").removeClass("show"),$(".details-modal-tab").removeClass("show"),setTimeout(function(){$(".details-modal-tab .nav-pills li").eq(e).children("a").removeClass("active"),$(".details-modal-tab .tab-content .tab-pane").eq(e).removeClass("fade show active")},900)})})}function showBookNowModal(e){e.preventDefault(),$("#bookNowModal").addClass("show")}function triggerBookNowModal(e){e.preventDefault(),$(".body").addClass("bounceToLeft"),setTimeout(function(){$(".floating-menu-bar").removeClass("show")},200),$("#bookNowModal").addClass("bounceFromRight"),setTimeout(function(){$(".body").removeClass("bounceToLeft")},1200)}function closeBookNowModal(e){e.preventDefault(),$("#bookNowModal").removeClass("show bounceFromRight")}function getWeekDays(){var e,t=new Date;getHours(t.getUTCHours());for(var o=0;o<7;o++)e=0==o?"Today":t.toLocaleDateString("en-Us",{weekday:"long"}),t.setDate(t.getDate()+1),$("#weekDays li").eq(o).children().text(e)}function getHours(e){for(var t=new Date(2021,1,0,e,0,0,0),o=new Date(t-18e6),a=0;a<8;a++){var n=o.getHours()+":00";console.log(o),16<o.getHours()||o.getHours()<5?$("#recentHours li:eq("+a+") a i").removeClass("icon-sun").addClass("icon-moon"):$("#recentHours li:eq("+a+") a i").removeClass("icon-moon").addClass("icon-sun"),o=new Date(o.setTime(o.getTime()+36e5)),$("#recentHours li:eq("+a+") span").text(n)}}function storeWeatherData(){var e="http://api.openweathermap.org/data/2.5/onecall?lat=".concat(30.84377207379563,"&lon=").concat(-97.72949600822162,"&appid=").concat("bca485db76d07a23830fddff9706629d");$.ajax({url:e,async:!0,type:"GET",dataType:"jsonp",success:function(o){var t;console.log(o),getWeatherData(o.current),$("#weekDays li a").click(function(e){e.preventDefault(),$(this).parent().siblings().children().removeClass("active"),$(this).addClass("active"),t=$(this).parent().index(),getWeatherData(o.daily[t])}),$("#recentHours li a").on("click",function(e){e.preventDefault(),$(this).parent().siblings().removeClass("active"),$(this).parent().addClass("active");var t=$(this).parent().index();getWeatherData(o.hourly[t])})}})}function getWeatherData(e){console.log(e);var t,o=e.wind_speed;t="object"==_typeof(e.temp)?Math.floor(e.temp.day-273):Math.floor(e.temp-273);var a=e.weather[0].main,n="Weak",s=0,r="No rain";o<=.5?n="calm":o<=1.5&&.5<o?n="Light air":o<=3&&1.5<o?n="Light breeze":o<=3&&1.5<o?n="Light breeze":o<=5&&3<o?n="Gentle breeze":o<=8&&5<o?n="Moderate breeze":o<=10.5&&8<o?n="Fresh breeze":o<=13.5&&10.5<o?n="Strong breeze":o<=16.5&&13.5<o?n="Moderate gale":o<=20&&16.5<o?n="Fresh gale":o<=23.5&&20<o?n="Strong gale":o<=27.5&&23.5<o?n="Whole gale":o<=31.5&&27.5<o?n="Storm":o<=32&&31.5<o&&(n="Hurricane"),$("#windSpeed").text(o),$("#main").text(a),$("#windtype").text(n),e.rain&&(s="object"==_typeof(e.rain)?e.rain["1h"]:e.rain,r=e.weather[0].description),$("#rainValue").text(s),$("#rain").text(r),$("#temparature").text(t)}function scrollToTop(e){e.preventDefault(),$("html, body").animate({scrollTop:0},"linear")}$(document).ready(function(){AOS.init({useClassNames:!0,initClassName:"aos-init",animatedClassName:"aos-animate"}),initPropertySlider(),$("[data-scroll-to]").click(function(){var e=$(this).attr("data-scroll-to");$("html, body").animate({scrollTop:$(e).offset().top},600)}),fixedHeader(),awardDetails(),getWeekDays(),storeWeatherData(),$(document).click(function(e){var t=$(".services");t.is(e.target)||0!==t.has(e.target).length||t.removeClass("show")}),$(".services .bar").click(function(){$(".services").addClass("show")})});