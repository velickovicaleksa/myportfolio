$(document).ready(function(){$(window).scroll(function(){this.scrollY>20?$(".navbar").addClass("sticky"):$(".navbar").removeClass("sticky"),this.scrollY>500?$(".scroll-up-btn").addClass("show"):$(".scroll-up-btn").removeClass("show")}),$(".scroll-up-btn").click(function(){$("html").animate({scrollTop:0}),$("html").css("scrollBehavior","auto")}),$(".navbar .menu li a").click(function(){$("html").css("scrollBehavior","smooth")}),$(".menu-btn").click(function(){$(".navbar .menu").toggleClass("active"),$(".menu-btn i").toggleClass("active")});new Typed(".typing",{strings:["Student","Developer","Basketball player","Designer","Freelancer"],typeSpeed:100,backSpeed:60,loop:!0}),new Typed(".typing-2",{strings:["Student"],typeSpeed:100,backSpeed:60,loop:!0});$(".carousel").owlCarousel({margin:20,loop:!0,autoplayTimeOut:2e3,autoplayHoverPause:!0,responsive:{0:{items:1,nav:!1},600:{items:2,nav:!1},1000:{items:3,nav:!1}}})});