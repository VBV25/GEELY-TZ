$(document).ready(function(){$(".advertising-form-block").fancybox({hideOnOverlayClick:!0,overlayShow:!0,overlayOpacity:.7}),$(".advertising-block__text-wrapper").slick({fade:!0,arrows:!1,speed:1e3,infinite:!0,draggable:!0,swipe:!0,touchThreshold:3,touchMove:!0,autoplay:!0,autoplaySpeed:3500}),$(".photo-slider").slick({arrows:!0,slidesToShow:3,slidesToScroll:1,speed:1e3,infinite:!0,draggable:!0,swipe:!0,touchThreshold:3,touchMove:!0,vertical:!0,verticalSwiping:!0,responsive:[{breakpoint:768.5,settings:{vertical:!1,verticalSwiping:!1}}]}),$(".car-slider").slick({arrows:!1,dots:!0,appendDots:$(".car-slider__bullet"),fade:!0,speed:1e3,infinite:!0,draggable:!0,swipe:!0,touchThreshold:3,touchMove:!0}),$(".navigation-block__menu-mobile").click(function(){$(".navigation-block__menu").css("right","0%"),$("body,html").addClass("hidden")}),$(".navigation-block__model-mobile").click(function(){$(".navigation-block__model").css("left","0%"),$("body,html").addClass("hidden")}),$(".navigation-block__btn-exit").click(function(){$(".navigation-block__model").attr("style",""),$(".navigation-block__menu").attr("style",""),$("body,html").removeClass("hidden")}),$(window).resize(function(){$(".photo-slider").slick("setPosition"),$(".car-slider").slick("setPosition")}),$(".model-link").click(function(){$(".model-link").removeClass("active-nav-link"),$(this).addClass("active-nav-link");var i=$(this).text();$(".model-car-text").text(i)})});