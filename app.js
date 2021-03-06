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
        const item = {};
        let fullPath = event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf("images") + 6;
        //this is for the small image
        let partPath = fullPath.slice(pos);
        item.img = `images-cart${partPath}`;
        // this is for the Name
        let name =
          event.target.parentElement.parentElement.nextElementSibling.children[0]
            .children[0].textContent;
        item.name = name;
        // this is for the Price
        let price =
          event.target.parentElement.parentElement.nextElementSibling.children[0]
            .children[1].textContent;
        let finalPrice = price.slice(24).trim();
        item.price = finalPrice;

        // console.log(item);
        const cartItem = document.createElement("div");
        cartItem.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3"
        );
        cartItem.innerHTML = `         
        <img
          src="${item.img}"
          alt=""
          class="img-fluid rounded-circle"
          id="item-img"
        />
        <div class="item-text">
          <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
          <span>$</span>
          <span id="cart-item-price" class="cart-item-price mb-0">${item.price}</span>
        </div>
        <a href="#" id="cart-item-remove" class="cart-item-remove">
          <i class="fas fa-trash"></i>
        </a>
     `;
        //select cart
        const cart = document.getElementById("cart");
        const total = document.querySelector(".cart-total-container");
        cart.insertBefore(cartItem, total);
        alert("item added to the cart");
        showTotals();
      }
    });
  });
  //show total
  function showTotals() {
    const total = [];
    const items = document.querySelectorAll(".cart-item-price");
    items.forEach(function (item) {
      total.push(parseFloat(item.textContent));
    });
    // console.log(total);

    const totalMoney = total.reduce(function (total, item) {
      total += item;
      return total;
    }, 0);
    const finalMoney = totalMoney.toFixed(2);

    //insert value in total
    const cartTotal = document.getElementById("cart-total");
    const itemCount = document.getElementById("item-count");
    const navCartTotal = document.querySelector(".item-total");
    cartTotal.innerHTML = finalMoney;
    navCartTotal.innerHTML = finalMoney;
    itemCount.innerHTML = total.length;
    //clear cart
    if (document.querySelector(".cart-item")) {
      const clearCart = document.getElementById("clear-cart");
      clearCart.addEventListener("click", () => {
        var elem = document.querySelector(".cart-item");
        elem.remove();
        cartTotal.innerHTML = 0;
        navCartTotal.innerHTML = 0;
        itemCount.innerHTML = 0;
      });
    }
  }
})();
