// Date picker
$(function () {
  $("#datepicker").datepicker({ dateFormat: "dd-mm-yy" });
});
$(".date-picker-input-group").click(function () {
  $("#datepicker").datepicker("show");
});
// Clock picker
$(".clock-picker").clockpicker();

// Lấy sản phẩm từ LocalStorage
function getProducts() {
  let wrapperProducts = $(".info__order-wrapper-products");
  if (typeof localStorage != undefined) {
    for (let i = 0; i < localStorage.length; i++) {
      let product = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (product.id.includes("GH")) {
        let htmls = $(
          `
          <p class="info__order-product-name">` +
            product.name +
            `</p>
          <div class="info__order-product-detail">
              <div class="info__order-group-price">
                  <span class="info__order-product-price price">` +
            product.price +
            `</span><span class="currency-unit">đ</span>
              </div>
              <div><span class="info__order-product-quantity">` +
            product.quantity +
            `</span>x</div>
          </div>
          <span class="info__order-border-line"></span>
        `
        );
        wrapperProducts.append(htmls);
      }
    }
  }
}
getProducts();

function sumOrder() {
  let ePrice = $(".info__order-product-price");
  let eQuantity = $(".info__order-product-quantity");
  let ePriceOrder = $(".info__order-price");
  let ePriceShip = $(".info__order-ship-price");
  let priceOrder = 0;
  // Tính tiền của TÔNG ĐƠN HÀNG
  for (let i = 0; i < ePrice.length; i++) {
    let getPrice = ePrice.eq(i);
    let price = parseInt(getPrice.text());
    let getQuantity = eQuantity.eq(i);
    let quantity = parseInt(getQuantity.text());
    let totalProduct = price * quantity;
    priceOrder += totalProduct;
  }
  ePriceOrder.text(priceOrder);

  // Tính tiền của THÀNH TIỀN
  let eTotalOrder = $(".info__order-total-price");
  let priceShip = parseInt(ePriceShip.text());
  let totalOrder = priceOrder + priceShip;
  eTotalOrder.text(totalOrder);
}

sumOrder();

// Lấy thông tin thanh toán vào LocalStorage
let totalMoney = $(".info__order-total-price").text();
let payment = "";
$(".info__form-wrapper input").on("change", function () {
  let valueRadio = $("input[name=thanh-toan]:checked").val();
  let index = parseInt(valueRadio) - 1;
  let payments = $(".info__form-radio span").eq(index).text();
  payment = payments;
});
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
today = dd + "/" + mm + "/" + yyyy;

$(".info__order-btn").click(function () {
  let id = "D2101";
  let order = {
    id: id,
    date: today,
    totalMoney: totalMoney,
    payment: payment,
  };
  localStorage.setItem(id,JSON.stringify(order));
});

// Format Tiền
function formatMoney() {
  let allElementPrice = $(".price");
  for (let i = 0; i < allElementPrice.length; i++) {
    let getPrice = allElementPrice.eq(i);
    let price = parseInt(getPrice.text());
    // limit to three significant digits
    let priceFormat = new Intl.NumberFormat("en-US", {
      maximumSignificantDigits: 3,
    }).format(price);
    allElementPrice.eq(i).text(priceFormat);
  }
}
formatMoney();
