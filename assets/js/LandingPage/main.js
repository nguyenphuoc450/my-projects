let menuMobile = document.querySelector('.menu-mobile');
let menuClose = document.querySelector('.menu-mobile__icon-close');
let navMobile = document.querySelector('.menu-mobile__wrapper');

menuMobile.addEventListener('click',function(){
    navMobile.style.display = 'block';
});
menuClose.addEventListener('click',function(){
    navMobile.style.display = 'none';
});

