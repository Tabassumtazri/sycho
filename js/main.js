$(function(){

// background image--------
$("[data-background]").each(function (){
  $(this).css("background-image","url(" + $(this).attr("data-background") + ")");
});

//mobile menu activation-----------
$('.main-menu').stellarNav({
  theme: 'dark',
  breakpoint: 991,
  position: 'right',
  closeLabel:"",
  menuLabel: "",
  showArrows: true,
  openingSpeed: 250,
  closingDelay: 250, 
  sticky     : false,
  scrollbarFix: false,
  phoneBtn: "+1 (202) 588-6500",
  // locationBtn: 'https://www.google.com/maps'
});
  
//sticky menu============
var wind = $(window);
var sticky = $("#header-sticky");
wind.on('scroll', function () {
   var scroll = $(wind).scrollTop();
   if (scroll < 700) {
	 sticky.removeClass("sticky-menu");
   } else {
	 $("#header-sticky").addClass("sticky-menu");
   }
}); 

//active1-------
$(".menu") .on("mouseenter", function () {
  $(this).addClass("active").parent().siblings().find(".menu").removeClass("active");
});

//active2-------
$(".socials") .on("mouseenter", function () {
  $(this).addClass("active").parent().siblings().find(".socials").removeClass("active");
});


//slick slider-----
$('.slider-active').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  arrows: false,
  prevArrow:'<b><i class="fas fa-long-arrow-alt-left l-a"></i></b>',
  nextArrow:'<b><i class="fas fa-long-arrow-alt-right r-a"></i></b>',
  autoplay: true,
  autoplaySpeed: 1500,

});

//case-studies-slider(center-mode)------
$('.case-studies-slider').slick({
  infinite: true,
  centerMode: true,
  centerPadding: '0',
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:'<b><i class="l-a"><img src="images/logo/left-arrow.png" alt=""></i></b>',
  nextArrow:'<b><i class="r-a"><img src="images/logo/right-arrow.png" alt=""></i></b>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
      }
    }
  ]
});


//slick clint logo active ---------
$('.client-logo-active').slick({
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      }
    }
  ]
});

//patient-feedback-active----------
$('.patient-feedback').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  focusOnSelect: false,
  arrows: true,
  prevArrow:'<b><i class="l-a"><img src="images/logo/theme-left-arrow.png" alt=""></i></b>',
  nextArrow:'<b><i class="r-a"><img src="images/logo/primary-right-arrow.png" alt=""></i></b>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 786,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
      }
    }
  ]
});

//scroll top function------
$(window).on('scroll', function() {
  var windowscroll = $(window).scrollTop();
  if (windowscroll > 350) {
      $('.top').fadeIn(650);
  } else {
      $('.top').fadeOut(650);
  }
});
$('.top').on('click', function() {

  $('html,body').animate({
      scrollTop: 0,
  }, 400);
});

//one page nav-----------
$('.menu').onePageNav({
	filter: ':not(.external)'
});




});





