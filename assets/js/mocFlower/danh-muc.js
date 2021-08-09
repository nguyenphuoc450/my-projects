//-------------------------------------------------- Menu dropdown
let iconDropdown = $('.sidebar-left__dropdown');
let dropDown = $('.sidebar-left__menu-dropdown');
let arrowDropdown = $('.sidebar-left__arrow-icon');
iconDropdown.click(function(){
    let index = $(iconDropdown).index(this);
    dropDown.eq(index).toggleClass('sidebar-left__menu-dropdown--active')
    arrowDropdown.eq(index).toggleClass('sidebar-left__arrow-icon--active') 
});
    



//-------------------------------------------------- Partner Carousel
$('#special-offers__carousel').owlCarousel({
    loop:true,
    items: 8,
    margin: 32,
    nav: false,
    dots: false,
    autoplay: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})

var specialOffers = $('#special-offers__carousel');
specialOffers.owlCarousel();
// Go to the next item
$('.special-offers__carousel-next').click(function() {
    specialOffers.trigger('next.owl.carousel');
})
// Go to the previous item
$('.special-offers__carousel-pre').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    specialOffers.trigger('prev.owl.carousel', [300]);
})