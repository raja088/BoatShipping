function myFunction(x) {
    let menu = document.getElementById("mobile-menu");
    x.classList.toggle("change");
    menu.classList.toggle("active");
  }
  $(document).ready(function(){
    $('.banner-slider-wrapper').slick({
      arrows:false,
      dots:true,
    });
  });
  $(document).ready(function(){
    $('.ship-here-slider').slick({
      arrows:false,
      dots:true,
    });
  });