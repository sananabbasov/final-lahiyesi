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



