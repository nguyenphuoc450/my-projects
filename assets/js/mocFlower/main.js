$(document).ready(function () {
  // Số lượng sản phẩm trong giỏ hàng
  function updateCart(){
    let bagCart = $(".icon-bag__amount");
    let bag = 0;
    if (typeof localStorage !== undefined) {
      for (let i = 0; i < localStorage.length; i++) {
        let product = JSON.parse(localStorage.getItem(localStorage.key(i)));
        if(product.id.includes('GH')) {
          bag++;
        }
        else {
          bag =0;
        }
      }
    }
    bagCart.text(bag);
  }
  updateCart()
  
  // Menu mobile
  let iconMobile = $(".icon-menu-mobile");
  let iconCloseMobile = $(".menu-mobile-icon-close");
  let menuMobile = $(".menu-mobile");
  let headerTop = $(".header-top");
  let headerMain = $(".header-main");
  let headerNav = $(".header-nav");
  iconMobile.click(function () {
    menuMobile.css("transform", "translateX(0)");
    menuMobile.css("opacity", "1");
  });
  iconCloseMobile.click(function () {
    menuMobile.css("transform", "translateX(-100%)");
    menuMobile.css("opacity", "0");
  });

  // Event On Scroll fixed header
  let header = $("#header");
  let headerHeight = headerNav.height();
  var windowY = window.scrollY;
  let n = 0;
  let formSearchNav = $(".form-search-header-nav");
  let iconBagNav = $(".icon-bag-header-nav ");
  if (windowY === 0) {
    header.removeClass("active-fixed-scroll");
    headerTop.show();
    headerMain.show();
    formSearchNav.css("display", "none");
    iconBagNav.hide();
    headerNav.css("padding", "25px 0 35px");
  }
  $(window).scroll(function () {
    var y = window.scrollY;
    if (n === 0) {
      if (y > headerHeight) {
        header.addClass("active-fixed-scroll");
        headerTop.hide();
        headerMain.hide();
        headerNav.css("padding", "10px 0");
        formSearchNav.css("display", "flex");
        iconBagNav.show();
      } else if (y > headerHeight || y === 0) {
        header.removeClass("active-fixed-scroll");
        headerTop.show();
        headerMain.show();
        headerNav.css("padding", "25px 0 35px");
        formSearchNav.hide();
        iconBagNav.hide();
      }
    } else {
      return;
    }
  });

  //-------------------------------------------------- Carousel
  $("#owl-one").owlCarousel({
    loop: true,
    items: 3,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  //-------------------------------------------------- Why choose Carousel
  $("#why-choose__carousel").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    dots: true,
    // autoplay: true,
    margin: 0,
    height: 400,
    responsive: {
      0: {
        items: 1,
        stagePadding: 100,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  //-------------------------------------------------- Feedback Carousel
  $("#feedback__carousel").owlCarousel({
    loop: true,
    margin: 32,
    items: 6,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  });

  var feedBack = $("#feedback__carousel");
  feedBack.owlCarousel();
  // Go to the next item
  $(".feedback__carousel-next").click(function () {
    feedBack.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".feedback__carousel-pre").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    feedBack.trigger("prev.owl.carousel", [300]);
  });

  //-------------------------------------------------- Partner Carousel
  $("#partner__carousel").owlCarousel({
    loop: true,
    items: 8,
    margin: 32,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
  });

  var partner = $("#partner__carousel");
  partner.owlCarousel();
  // Go to the next item
  $(".partner__carousel-next").click(function () {
    partner.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".partner__carousel-pre").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    partner.trigger("prev.owl.carousel", [300]);
  });
});
