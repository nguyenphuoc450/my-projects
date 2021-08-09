// Animation
$('.number').countUp({
    delay: 10,
    time: 1000
});

// Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:100,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

var listCurrent = $('.list__current');
var current = 1;
var listTotal = 5;
var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.btn-next').click(function() {
    owl.trigger('next.owl.carousel');
    current++;
    if(current > listTotal){
        current = 1;
        $('.btn-pre').addClass('disable');
    }
    if(current > 1) {
        $('.btn-pre').removeClass('disable');
    }
    listCurrent.text('0'+current);
})
// Go to the previous item
$('.btn-pre').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
    current--;
    if(current <= 1){
        current = 1;
        $('.btn-pre').addClass('disable');
    }
    if(current > 1) {
        $('.btn-pre').removeClass('disable');
    }
    
    listCurrent.text('0'+current);
})

// menu mobile
let iconMobile = document.querySelector('.menu-mobile__icon');
let navMenu = document.querySelector('.menu-mobile__nav');
let iconClose = document.querySelector('.icon-close');

iconMobile.addEventListener('click',function(){
    navMenu.style.animation = 'scaleIn ease 0.7s';
    navMenu.style.display = 'block';
    iconMobile.style.opacity = '0';
});

iconClose.addEventListener('click',function(){
    navMenu.style.animation = 'fadeOut ease 0.7s';
    setTimeout(function(){
        navMenu.style.display = 'none';
    },700);
    iconMobile.style.opacity = '1';
});
