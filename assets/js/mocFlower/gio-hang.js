//-------------------------------------------------- Lấy số lượng sản phẩm từ LocalStorage
let totalProducts = $(".cart__total-products");
let totalBag = 0;
for (let i = 0; i < localStorage.length; i++) {
  let product = JSON.parse(localStorage.getItem(localStorage.key(i)));
  if (product.id.includes("GH")) {
    totalBag++;
  }
}
totalProducts.html("Có <span>" + totalBag + "</span> sản phẩm");
// lấy product từ LocalStorage
let wrapperProducts = $(".cart__product");
function getProducts() {
  if (typeof localStorage != undefined) {
    for (let i = 0; i < localStorage.length; i++) {
      let product = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (product.id.includes("GH")) {
        let html = $(
          `
                    <div class="cart__product-item" data-id="` +
            product.id +
            `">
                        <img class="cart__product-item-image" src="` +
            product.image +
            `" alt="">
                        <div class="cart__product-item-detail">
                            <p class="cart__product-item-name">` +
            product.name +
            `</p>
                            <span class="cart__product-item-wrapper-price">
                              <span class="cart__product-item-price" data-id="` +
            product.id +
            `">` +
            product.price +
            `</span><span class="currency-unit">đ</span>
                            </span> 
                            <div class="cart__product-option">
                                <span btn-id="` +
            product.id +
            `" class="cart__product-option-delete cart__product-option-item">
                                    <img src="assets/image/Moc-Flowers/Cart/icon-delete.svg" alt="">
                                    <span>Xóa sản phẩm</span>
                                </span>
                                <span class="cart__product-option-border"></span>
                                <span class="cart__product-option-buy-later cart__product-option-item">
                                    <img src="assets/image/Moc-Flowers/Cart/icon-buy-later.svg" alt="">
                                    <span>Để dành mua sau</span>
                                </span>
                            </div>
                        </div>
                        <div class="cart__product-current-quantity">
                            <span class="cart__product-current-quantity-minus cart__product-current-quantity-item--disable  cart__product-current-quantity-item">-</span>
                            <span class="cart__product-current-quantity-total cart__product-current-quantity-item" data-id="` +
            product.id +
            `">` +
            product.quantity +
            `</span>
                            <span class="cart__product-current-quantity-plus cart__product-current-quantity-item">+</span>
                        </div>
                    </div>
                    <span class="cart__product-border-line"></span>
      `
        );
        wrapperProducts.append(html);
      }
    }
  }
}
getProducts();

//Xóa sản phẩm
let btnDelete = $(".cart__product-option-delete");
btnDelete.click(function () {
  let id = $(this).attr("btn-id");
  let product = JSON.parse(localStorage.getItem(id));
  if (id == product.id) {
    localStorage.removeItem(id);
    reFreshHtml();
  }
});

//Làm mới  html , dom
function reFreshHtml() {
  location.reload();
}

//Event click số lượng và cộng tiền vào sản phẩm
let btnMinus = $(".cart__product-current-quantity-minus");
let btnPlus = $(".cart__product-current-quantity-plus");
let priceProduct = $(".cart__product-item-price");
let productItem = $(".cart__product-item");
// Tính tiền sản phẩm
function totalPrice(index) {
  let quantityProduct = $(".cart__product-current-quantity-total").eq(index);
  let quantity = parseInt(quantityProduct.text());
  idItem = productItem.attr("data-id");
  let product = JSON.parse(localStorage.getItem(idItem));
  if (product.id != null && idItem == product.id) {
    let price = parseInt(product.price);
    let totalPrice = price * quantity;
    // limit to three significant digits
    let priceFormat = new Intl.NumberFormat("en-US", {
      maximumSignificantDigits: 3,
    }).format(totalPrice);
    priceProduct.eq(index).text(priceFormat);
  }
}
btnMinus.click(function () {
  let index = btnMinus.index(this);
  let quantityProductElement = $(".cart__product-current-quantity-total").eq(
    index
  );
  let getQuantity = quantityProductElement.text();
  let quantity = parseInt(getQuantity);
  if (quantity > 1) {
    quantity -= 1;
    btnMinus
      .eq(index)
      .removeClass("cart__product-current-quantity-item--disable");
    quantityProductElement.text(quantity);
    totalPrice(index);
  }
  if (quantity === 1) {
    btnMinus.eq(index).addClass("cart__product-current-quantity-item--disable");
  }
  sumTotalOrder();
  updateQuantityProduct();
});
btnPlus.click(function () {
  let index = btnPlus.index(this);
  let quantityProductElement = $(".cart__product-current-quantity-total").eq(
    index
  );
  let getQuantity = quantityProductElement.text();
  let quantity = parseInt(getQuantity);
  quantity++;
  if (quantity > 1) {
    btnMinus
      .eq(index)
      .removeClass("cart__product-current-quantity-item--disable");
    quantityProductElement.text(quantity);
    totalPrice(index);
  }
  sumTotalOrder();
  updateQuantityProduct();
});

function showDataCurrent() {
  // kiểm tra số lượng , nếu bằng 1 thì disable nút trừ số lượng
  for (let i = 0; i < btnMinus.length; i++) {
    let quantityProductElement = $(".cart__product-current-quantity-total").eq(
      i
    );
    let getQuantity = quantityProductElement.text();
    let quantity = parseInt(getQuantity);
    if (quantity > 1) {
      btnMinus
        .eq(i)
        .removeClass("cart__product-current-quantity-item--disable");
      quantityProductElement.text(quantity);
    }
    if (quantity === 1) {
      btnMinus.eq(i).addClass("cart__product-current-quantity-item--disable");
    }
  }
  // Tính tổng tiền của 1 sản phẩm khi lấy từ localStorage
  for (let i = 0; i < priceProduct.length; i++) {
    let priceElement = $(".cart__product-item-price").eq(i);
    let getPrice = priceElement.text();
    let price = parseInt(getPrice);
    let quantityProductElement = $(".cart__product-current-quantity-total").eq(
      i
    );
    let getQuantity = quantityProductElement.text();
    let quantity = parseInt(getQuantity);
    let total = price * quantity;
    let priceFormat = new Intl.NumberFormat("en-US", {
      maximumSignificantDigits: 3,
    }).format(total);
    priceElement.text(priceFormat);
  }
}
showDataCurrent();

// Format tiền
// function formatMoney() {
//   for (let i = 0; i < localStorage.length; i++) {
//     let product = JSON.parse(localStorage.getItem(localStorage.key(i)));
//     let price = product.price;
//     // limit to three significant digits
//     let priceFormat = new Intl.NumberFormat("en-US", {
//       maximumSignificantDigits: 3,
//     }).format(price);
//     priceProduct.text(priceFormat);
//   }
// }
// formatMoney();

// Tính tổng đơn hàng
let totalOrder = $(".cart__order-price");
let orderPrice = $(".cart__order-price");
let orderTotalPrice = $(".cart__order-total-price");
function sumTotalOrder() {
  let sum = 0;
  for (let i = 0; i < priceProduct.length; i++) {
    let priceProductElement = $(".cart__product-item-price").eq(i);
    let getPrice = priceProductElement.text().split(",").join("");
    let price = parseInt(getPrice);
    sum += price;
  }
  let priceFormat = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
  }).format(sum);
  orderPrice.text(priceFormat);
  orderTotalPrice.text(priceFormat);
}
sumTotalOrder();

// Cập nhật số lượng của giỏ hàng vào localStorage
// quantityProductElement.text()
function updateQuantityProduct() {
  for (let i = 0; i < btnPlus.length; i++) {
    let id = $(".cart__product-item").eq(i).attr("data-id");
    let quantity = $(".cart__product-current-quantity-total").eq(i).text();
    let product = JSON.parse(localStorage.getItem(id));
    let item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
    };
    if (id == product.id) {
      localStorage.setItem(product.id, JSON.stringify(item));
    }
  }
}
updateQuantityProduct();
//-------------------------------------------------- Recommend product Carousel
$("#recommend-product__carousel").owlCarousel({
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
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

var recommendProduct = $("#recommend-product__carousel");
recommendProduct.owlCarousel();
// Go to the next item
$(".recommend-product__carousel-next").click(function () {
  recommendProduct.trigger("next.owl.carousel");
});
// Go to the previous item
$(".recommend-product__carousel-pre").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  recommendProduct.trigger("prev.owl.carousel", [300]);
});
