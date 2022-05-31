$(document).ready(function(){

    // scroll position
    $(window).on('scroll',function(){
     var scrolling = $(this).scrollTop();
 
     // back to top appearance 
     if(scrolling > 100){
       $('.back-to-top').fadeIn();
     }else{
       $('.back-to-top').fadeOut();  
     }
     // navbar class 
     if(scrolling > 150){
       $('nav').addClass('nav-fix');
     }else{
       $('nav').removeClass('nav-fix');
     }
 
   });
 
   // back to top action 
   $('.back-to-top').on('click',function(){
     $('html,body').animate({
     scrollTop: '0px',
   },2000);
 
   });  
 
   //slick slider
   $('.service-slider').slick({
    //  arrows:true,
     slidesToShow:3,
     // autoplay:true,
     prevArrow:'<i class="fas fa-chevron-left slick-prev prev-arrow"></i>',
     nextArrow:'<i class="fas fa-chevron-right slick-next next-arrow"></i>',
     responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:true,
        }
      },
      {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:true,
          }
      },
      {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true,
          }
      },

    ],
   });

    //wow js
    new WOW().init();
    
    //product filter
    var mixer = mixitup('.work-main');

    //gallery popup
    $('.venobox').venobox({
      arrowsColor:'#403951;',
    });

    //slick slider
    $('.education-slider').slick({
     arrows:true,
     slidesToShow:5,
     vertical:true,
     slidesToScroll:1,
     // autoplay:true,
     prevArrow:'<i class="fa-solid fa-arrow-down slick-prev prev-arrow"></i>',
     nextArrow:'<i class="fa-solid fa-arrow-up slick-next next-arrow"></i>',
     responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows:true,
        }
      },
      {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true,
          }
      },
      {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            arrows:true,
            // autoplay:true,
          }
      },

    ],
   });

   
 });   