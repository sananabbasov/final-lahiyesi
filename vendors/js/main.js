$(function(){
    
    $(".booking-area .tab-content").hide();
    $(".booking-area .tab-content").first().show();

    $(".booking-area button").on("click", function(){

        let tabs = $(this).index();

        $(".booking-area .tab-content").hide()
        $(".booking-area .tab-content").eq(tabs).fadeIn();

    })
})