$(function(){

 $("#top_pop .xi-close").on("click", function(){
    $("#top_pop").addClass("on");
 });

 $(".main_slider").slick({
     arrows:false,
     dots:true,
     autoplay:true,
     autoplaySpeed:4000,
     pauseOnHover:false,
     pauseOnFocus:false,
 });

 $(".main_slider figure").eq(1).addClass("on");
 $(".main_slider").on("afterChange", function(e,s,c){
    $(".main_slider figure").eq(c+1).addClass("on").siblings().removeClass("on");
 });



 //비디오

 $("#content04 .xi-pause").on("click", function(){
    $(".movie01").trigger("pause");
 });

 $("#content04 .xi-play").on("click", function(){
   $(".movie01").trigger("play");
});

jQuery("#bgndVideo").YTPlayer({
   showControls:false,
   containment:'#content05',
   autoPlay:true, 
   mute:true,
   startAt:0, 
   opacity:1
  

});


$("#content07 .container").slick({
   arrows:false,
   dots:true,
   slidesToShow: 5,
   autoplay:true,
   centerMode:true,
   responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
      }    
     }
    ]
});


$("#content07 figure").eq(7).addClass("on")
$("#content07 .container").on("afterChange", function(e,s,c){
   $("#content07 figure").eq(c+7).addClass("on").siblings().removeClass("on");
});


// $(this) -- 이벤트가 발생한 이것
// $(this).index() -- 이벤트가 발생한 이것 번호 


$(".tab_tit li").on("click", function(){
   var idx=$(this).index();
   $(".tab_con>div").eq(idx).addClass("on").siblings().removeClass("on");
   $(this).addClass("on").siblings().removeClass("on");
});


$(".link select").on("change", function(){
   var lik=$(this).val();
   if(lik) window.open(lik)
});

$("#popup a").on("click", function(){
   $("#popup").hide();
});

$("#Mopen").on("click", function(){
   $("nav").toggleClass("on");
});



AOS.init();


});