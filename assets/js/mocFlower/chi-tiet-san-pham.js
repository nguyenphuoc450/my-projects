//-------------------------------------------------- Add cart
let btnAddCart = $('.detail-product__btn-add-cart');
let imageProduct = $('.detail-product__image');
let nameProduct = $('.detail-product__name');
let priceProduct = $('.detail-product__current-price');
let successAdd = $('.detail-product__add-cart--succcess');
let length = 0;
btnAddCart.click(function () {
  let name = nameProduct.text();
  let price = priceProduct.text();
  let getPrice = price.split(',').join('');
  let image = imageProduct.attr('src');
  let quantity = 1
  createProduct(name,quantity, getPrice, image);
  if(length === 0) {
    successAdd.text('Thêm sản phẩm vào giỏ hàng thành công.');
    length = 1;
  }
  else {
    length++;
    successAdd.html('Đã Thêm '+ length +' sản phẩm vào giỏ hàng thành công.' + '<a href="mocFlowers-gio-hang.html"> Xem giỏ hàng</a>');
  }
})
let id = 0;

// Format Tiền
let price = priceProduct.text();
let priceFormat = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(price);
    priceProduct.html(priceFormat);
// Tạo và lưu product vào LocalStorage
function createProduct(name,quantity, price, image) {
  id++;
  let product = {
    "id": 'GH'+id,
    "name": name,
    "price": price,
    "quantity": quantity,
    "image": image
  }
  localStorage.setItem(product.id, JSON.stringify(product));
}

//-------------------------------------------------- Tab menu
let navBtn = $(".tab-nav__item-btn");
let navContent = $(".tab-nav__item-content");
$(document).ready(function () {
  navBtn.click(function () {
    navBtn.removeClass("tab-nav__item-btn--active");
    $(this).addClass("tab-nav__item-btn--active");
    let index = $(this).index();
    navContent.hide();
    navContent.eq(index).show();
  });
});
//-------------------------------------------------- Detail product Carousel
$("#detail-product__carousel").owlCarousel({
  loop: true,
  items: 4,
  margin: 32,
  nav: false,
  dots: false,
  autoplay: false,
  URLhashListener: true,
  autoplayHoverPause: false,
  startPosition: "URLHash",
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
$("#detail-product__carousel").on('changed.owl.carousel', function (event) {
  location.hash = 'slide' + event.property.value;
  console.log(1);
})

//-------------------------------------------------- Related product Carousel
$("#related-product__carousel").owlCarousel({
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
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

var relatedProduct = $("#related-product__carousel");
relatedProduct.owlCarousel();
// Go to the next item
$(".related-product__carousel-next").click(function () {
  relatedProduct.trigger("next.owl.carousel");
});
// Go to the previous item
$(".related-product__carousel-pre").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  relatedProduct.trigger("prev.owl.carousel", [300]);
});
