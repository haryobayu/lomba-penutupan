// JavaScript Document
 $(document).ready(function() {
 
  // For Preloader
  $(window).on('load', function() {
            $('.loadscreen').fadeOut();
            $('.preloader').delay(350).fadeOut('slow');
   });
  
  // For Services Cube Effect
  
   
   // media queries add remove class for overlay
    $(window).resize(function(){
       var width = $(window).width();
       if(width >= 700 && width <= 1000){
           $('#bg_overlay').removeClass('overlay_bg').addClass('overlay_bg1');
       }
       else{
           $('#bg_overlay').removeClass('overlay_bg1').addClass('overlay_bg');
       }
    })
    .resize();//trigger the resize event on page load.
   
});


