// Lấy đơn hàng từ LocalStorage
let orderID = $(".order__id");
let orderDate = $(".order__date");
let orderPayment = $(".order__payment");
let orderPrice = $(".order__price");
function getOrder() {
  if (typeof localStorage != undefined) {
    for (let i = 0; i < localStorage.length; i++) {
      let order = JSON.parse(localStorage.getItem(localStorage.key(i)));
      if (order.id.includes("D")) {
        orderID.text(order.id);
        orderDate.text(order.date);
        orderPayment.text(order.payment);
        orderPrice.text(order.totalMoney);
      }
    }
  }
}
getOrder();

let orderTitle = $('.order__title');
if(orderID.text() == ''){
  orderTitle.text('Bạn chưa có đơn hàng nào');
}

// Format Tiền
function formatMoney() {
  let ePrice = $(".order__price");
  let price = parseInt(ePrice.text());
  // limit to three significant digits
  let priceFormat = new Intl.NumberFormat("en-US", {
    maximumSignificantDigits: 3,
  }).format(price);
  ePrice.text(priceFormat);
}
formatMoney();
