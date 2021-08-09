let parent = document.querySelector('.image-group__elipse-line');
let items = document.querySelectorAll('.image-group__item');
let pre = document.querySelector('.btn-pre');
let next = document.querySelector('.btn-next');
let detailName = document.querySelector('.detail__name');
let detailPrice = document.querySelector('.detail__price');
let detailDescription = document.querySelector('.detail__description');
let detailBtn = document.querySelector('.detail__btn');
let imageGroup = document.querySelector('.image-group');
let imageMain = document.querySelector('.image-main');
let currentAngle = 0;
let angle = 360 - 90;
let dangle = 360 / items.length;
let n = 0;

for (let i = 0; i < items.length; i++) {
    let circle = items[i];
    angle += dangle;
    circle.style.transform = `rotate(${angle}deg) translate(${parent.clientWidth /
        2}px) rotate(-${angle}deg)`;
}

let preImage = 4;
let nextImage = 4;
pre.addEventListener('click', function () {
    n--;
    nextImage++;
    let image = 0;
    if(nextImage > 4 ){
        nextImage =4 ;
    }

    if (n < -4){
        n = 0;
    }
    if ( n === -1 ) {
        image = 4;
    }
    
    if (n >= 0){
        image = n;
        preImage = 4;
    }
    
    if(n < -1 && n >= -4){
        preImage--;
        image = preImage;
    }

    // console.log(n);
    // console.log('pre : '+preImage);
    // console.log('img : '+image);
   
    currentAngle = currentAngle - 36;
    parent.style.transform = `rotate(${currentAngle}deg)`;
    detailName.style.animation = 'fadeIn ease 0.7s';
    detailPrice.style.animation = 'fadeIn ease 0.7s';
    detailDescription.style.animation = 'fadeIn ease 0.7s';
    detailBtn.style.transformOrigin = 'top left';
    detailBtn.style.animation = 'btnPre ease 0.7s';
    let node = document.querySelector('.image-main__item');
    node.style.animation = 'fadeOut  ease 0.7s';
    node.style.opacity = '0';
    // node.style.animation = 'rotate360 ease 0.7s';
    if (n %2 == 0) {
        imageGroup.style.background = '#EAFFE2';
        pre.style.background = '#54BF29';
        next.style.background = '#54BF29';
        detailPrice.style.color = '#54BF29';
        detailBtn.style.background = '#54BF29';
        detailPrice.innerText = '$35';
        detailName.innerText = 'Asian Cucumber Salad';
        detailDescription.innerText = 'Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!';
    }

    else {
        imageGroup.style.background = '#ffeede';
        pre.style.background = '#FF922C';
        next.style.background = '#FF922C';
        detailPrice.style.color = '#FF922C';
        detailBtn.style.background = '#FF922C';
        detailPrice.innerText = '$32';
        detailName.innerText = 'Green Goddess Chicken Salad';
        detailDescription.innerText = 'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.';
    }

    // Xóa animation
    setTimeout(function () {
        detailName.style.animation = 'none';
        detailPrice.style.animation = 'none';
        detailDescription.style.animation = 'none';
        detailBtn.style.animation = 'none';
        imageMain.removeChild(imageMain.childNodes[0]);
        imageMain.innerHTML = ` <img class="image-main__item" src="assets/image/Slider/main-${image}.png" alt="">`;
    }, 700);

});


next.addEventListener('click', function () {
    n++;
    let image = 0;
    preImage++;
    if(preImage > 4) {
        preImage = 4 ;  
    }
    if(n === -1 );{
        nextImage =4 ;
        image = nextImage;
    }

    if(n < -1 && n >= -4){
        nextImage--;
        image = nextImage;
    }

    if (n < -4) {
        n = 0 ;
    }

    if(n >= 0 &&  n <=4 ) {
        image = n;
    }
    if( n > 4) {
        n = 0;
        image = 0;
    }

    // console.log(n);
    // console.log('next : '+nextImage);
    // console.log('img : '+image);

    detailName.style.animation = 'fadeIn ease 0.7s';
    detailPrice.style.animation = 'fadeIn ease 0.7s';
    detailDescription.style.animation = 'fadeIn ease 0.7s';
    detailBtn.style.transformOrigin = 'top right';
    detailBtn.style.animation = 'btnNext ease 0.7s';
    let node = document.querySelector('.image-main__item');
    node.style.animation = 'fadeOut  ease 0.7s';
    node.style.opacity = '0';
    // node.style.animation = 'rotate360 ease 0.7s';
    currentAngle = currentAngle + 36;
    parent.style.transform = `rotate(${currentAngle}deg)`;

    if (n %2 == 0) {
        imageGroup.style.background = '#EAFFE2';
        pre.style.background = '#54BF29';
        next.style.background = '#54BF29';
        detailPrice.style.color = '#54BF29';
        detailBtn.style.background = '#54BF29';
        detailPrice.innerText = '$35';
        detailName.innerText = 'Asian Cucumber Salad';
        detailDescription.innerText = 'Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice wine vinegar, and a few secret ingredients!';
    }

    else {
        imageGroup.style.background = '#ffeede';
        pre.style.background = '#FF922C';
        next.style.background = '#FF922C';
        detailPrice.style.color = '#FF922C';
        detailBtn.style.background = '#FF922C';
        detailPrice.innerText = '$32';
        detailName.innerText = 'Green Goddess Chicken Salad';
        detailDescription.innerText = 'It is a non vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives and celery.';
    }

    // Xóa animation
    setTimeout(function () {
        detailName.style.animation = 'none';
        detailPrice.style.animation = 'none';
        detailDescription.style.animation = 'none';
        detailBtn.style.animation = 'none';
        imageMain.removeChild(imageMain.childNodes[0]);
        imageMain.innerHTML = ` <img class="image-main__item" src="assets/image/Slider/main-${image}.png" alt="">`;
    }, 700);


    console.log(n);
});

// menu mobile 
let menuMobile = document.querySelector('.nav-mobile');
let links = document.querySelector('.nav-mobile__links');
let iconClose = document.querySelector('.nav-mobile__links-close');

menuMobile.addEventListener('click',function(){
    links.style.animation = 'fadeIn ease 0.7s';
    menuMobile.style.opacity = '0';
    links.style.display = 'block';
});

iconClose.addEventListener('click',function(){
    links.style.animation = 'closeMobile ease 0.7s';
    menuMobile.style.opacity = '1';
    setTimeout(function(){
        links.style.display = 'none';
    },700);
});