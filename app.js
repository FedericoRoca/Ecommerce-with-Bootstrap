//show cart
(function () {
  const cart = document.getElementById("cart");
  const cartInfo = document.getElementById("cart-info");
  cartInfo.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
  });
})();
// add items to the cart
(function () {
  const cartBtn = document.querySelectorAll(".store-item-icon");
  cartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      // console.log(event.target);
      if (event.target.parentElement.classList.contains("store-item-icon")) {
        console.log(event.target.parentElement.previousElementSibling.src);
        // let pos = fulPath;
      }
    });
  });
})();
