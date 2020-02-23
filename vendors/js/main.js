$(function(){
    
    $(".booking-area .tab-content").hide();
    $(".booking-area .tab-content").first().show();

    $(".booking-area button").on("click", function(){

        let tabs = $(this).index();

        $(".booking-area .tab-content").hide()
        $(".booking-area .tab-content").eq(tabs).fadeIn();

    })
})



/* Yasin Kodlari */

$(".drop-menu").click(function(){
    $(".dropped-menu").removeClass("active").slideToggle()
    $(".dropped-menu").addClass("active")
    
    
})




/* dasda */

$(".fa-plus").click(function(){
    $(".acilanmenu li").removeClass("active").slideToggle()
    $(".acilanmenu li").addClass("active")
    
    
})




/* Yasin Js */

// $('.summer-slider').slick({
//     dots: true,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 2,
//           infinite: true,
//           dots: true
//         } 
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ]
//   });





  /* Responsive menu */

  function myFnc(e){
    e.classList.toggle("show");

    var elem = document.getElementById("navID"),
    Style = window.getComputedStyle(elem),
    left = Style.getPropertyValue("left");


    if(left == "0px"){
      elem.style.left = "-260px";
    }else{
      elem.style.left = "0px";
    }

}







/* Yasin */


// $(".filter-price").click(function(){
//     $(".active-filter").slideDown(function(){
//         $(".open").stop().hide()
//     })

// })

// $(".filter-price").click(function(){
//     $(".active-filter").stop().slideUp(function(){
//         $(".open").css("display","block"),
//         $(".close").css("display","none")
//     })
// })

// $(".filter-price").click(function(){
//     $(".active-filter").slideToggle(function(){
//         $(".open").css("display","none"),
//         $(".close").css("display","block")
//     })
// })

$(".drop-menu").click(function(){
  $(".dropped-menu").slideToggle()
})




$(".filter-price .row").click(
  function(){
      $(".active-filter").stop().slideUp(function(){$(".close").css("display","block"),$(".open").css("display","none")})
      $(".active-filter").stop().slideToggle(function(){$(".close").css("display","none"),$(".open").css("display","none")})
  }
)

$(".review-score .row").click(
  function(){
      $(".active-review").slideUp()
      $(".active-review").stop().slideToggle()
  }
)


$(".hotel-star .row").click(
  function(){
      $(".star").slideUp()
      $(".star").stop().slideToggle()
  }
)


$(".facilities .row").click(
  function(){
      $(".active-facilities").slideUp()
      $(".active-facilities").stop().slideToggle()
  }
)



$(".hotel-theme .row").click(
  function(){
      $(".active-hotel").slideUp()
      $(".active-hotel").stop().slideToggle()
  }
)



