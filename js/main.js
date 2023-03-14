
$( document ).ready(function() {

  $(".burger-button").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").toggleClass("active");
  });


    $('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
        },
        {
        breakpoint: 769,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        },
        {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
        }
    ]
});


const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});

(function() {
    
    function controls() {
      $(this).addClass('selected').siblings('button').removeClass('selected');
      $('.slideDiv').animate({
        top: -$('.container').height() * $(this).index()
      }, 450);
    }
    
    /***Event Listeners***/
    const runCode = () => {
      const button = document.querySelectorAll('.button');
      if ( button ) {
        for ( var i = 0; i < button.length; i++ ) {
          button[i].addEventListener('click', controls, false);
        }
      }
    }
    
    runCode();
    
  })();

  
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
      item.addEventListener("click", () => {
          item.classList.toggle("open");
      });
  });



});