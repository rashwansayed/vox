$('.carousel').flipster({
    style: `carousel`,
spacing:-0.3,
nav:true,
button:true,
});


const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});




$(document).ready(function(){
  $("#testimonial-slider").owlCarousel({
      items:3,
      itemsDesktop:[1000,3],
      itemsDesktopSmall:[979,2],
      itemsTablet:[768,2],
      itemsMobile:[650,1],
      pagination:true,
      autoPlay:true
  });
});


var swiper = new Swiper(".review-slider", {
  spaceBetween:20,
  loop:true,
  autoplay:{
      delay:2500
  },
  breakpoints:{
      640:{
          slidesPerView:1
      },
      768:{
          slidesPerView:2
      },
      1024:{
          slidesPerView:3
      }
  }

});