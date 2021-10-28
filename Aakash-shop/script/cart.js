var arr = [];
var wishArr = [];

let cartStorage = JSON.parse(localStorage.getItem("CartItem"));
let wishStorage = JSON.parse(localStorage.getItem("WishlistItem"));

for (let i = 0; i < cartStorage.length; i++) {
  arr.push(cartStorage[i]);
}
for (let i = 0; i < wishStorage.length; i++) {
  wishArr.push(wishStorage[i]);
}

//store cart item to storage
function storeItem(a = "Dummy", b = "$99.00", c = "img/image01.jpg", d = 1) {
  //name, cost, quantity --> plz pass in this order
  let item;
  item = {
    name: a,
    cost: b,
    img: c,
    quantity: d,
  };
  for (let a = 0; a < arr.length; a++) {
    if (arr[a].name == item.name) {
      arr[a].quantity++;
      localStorage.setItem("CartItem", JSON.stringify(arr));
      return;
    }
  }
  arr.push(item);
  localStorage.setItem("CartItem", JSON.stringify(arr));
}
//store wishlist item to storage
function storeWishItem(a, b, c, d = true) {
  //a = name, b = cost, c = img, d = availability
  item = {
    name: a,
    cost: b,
    img: c,
    availability: d,
  };

  for (let a = 0; a < wishArr.length; a++) {
    if (wishArr[a].name == item.name) {
      alert("Item already in wishlist");
      return false;
    }
  }
  wishArr.push(item);
  localStorage.setItem("WishlistItem", JSON.stringify(wishArr));
}
//get cart items
function getCartItem() {
  let getArr = JSON.parse(localStorage.getItem("CartItem"));
  for (let i = 0; i < getArr.length; i++) {
    addItem(getArr[i]);
  }
}
//get wishlist items
function getWishlist() {
  let getArr = JSON.parse(localStorage.getItem("WishlistItem"));
  for (let i = 0; i < getArr.length; i++) {
    makeWishItem(getArr[i]);
  }
}
//paste item to cart
function addItem(dum) {
  let box = document.querySelector("#cartTable");

  let new_item = document.createElement("div");
  box.append(new_item);

  let totalCost = Number(dum.cost) * dum.quantity;
  new_item.outerHTML = `<tr class="cart-item" >
  <td><span class="fa fa-times"></span></td>
  <td data-title="Product:" ><span class="imageIcon" ><img src="${dum.img}" alt=""></span>${dum.name}</td>
  <td data-title="Cost:" >$${dum.cost}</td>
  <td data-title="Quantity:" >
    <input id="quantity" class="breadcrumb" value="${dum.quantity}" type="number">
  </td>
  <td data-title="Total Cost:" >$${totalCost}</td>
</tr>`;
}
//paste item to wishlist
function makeWishItem(item) {
  let box = document.querySelector("#cartTable");

  let new_item = document.createElement("div");
  box.append(new_item);

  let temp = "";
  if (item.availability) temp = "In Stock";
  else temp = "Out of Stock";

  new_item.outerHTML = `<tr class="cart-item">
  <td><span class="fa fa-times"></span></td>
  <td data-title="Product" class="large" ><span class="imageIcon"><img class="img" src="${item.img}" alt=""></span>${item.name}</td>
  <td data-title="Cost"  class="prod-cost" >$${item.cost}</td>
  <td data-title="Availability" ><span class="bold" >${temp}</span></td>
  <td data-title="Action" ><button title="Add to Cart" class="breadcrumb bold large" >Add to cart</button></td>
</tr>`;
}
//remove item from cart & storage
function removeItem(item) {
  item.remove();
  let z = JSON.parse(localStorage.getItem("CartItem"));
  arr = [];
  for (let k = 0; k < Object.keys(z).length; k++) {
    if (z[k].name == item.children[1].innerText) continue;
    else arr.push(z[k]);
  }
  localStorage.setItem("CartItem", JSON.stringify(arr));
  emptyCheck();
}
//remove item from wishlist & storage
function removeWishItem(item) {
  console.log("called");
  item.remove();
  let z = JSON.parse(localStorage.getItem("WishlistItem"));
  wishArr = [];
  for (let k = 0; k < Object.keys(z).length; k++) {
    if (z[k].name == item.children[1].innerText) continue;
    else wishArr.push(z[k]);
  }
  localStorage.setItem("WishlistItem", JSON.stringify(wishArr));
  wishEmptyCheck();
}
//check if cart is empty
function emptyCheck() {
  let z = JSON.parse(localStorage.getItem("CartItem"));
  if (z == null) {
    document.getElementById("container").style.display = "none";
    document.getElementsByClassName("emptyCart")[0].style.display = "block";
    return false;
  }
  let itemLength = Object.keys(z).length;
  if (itemLength < 1) {
    document.getElementById("container").style.display = "none";
    document.getElementsByClassName("emptyCart")[0].style.display = "block";
  } else {
    document.getElementById("container").style.display = "block";
    document.getElementsByClassName("emptyCart")[0].style.display = "none";
  }
}
//check if wishlist is empty
function wishEmptyCheck() {
  let z = JSON.parse(localStorage.getItem("WishlistItem"));
  if (z == null) {
    document.getElementById("cartTable").style.display = "none";
    document.getElementsByClassName("emptyCart")[0].style.display = "block";
    return false;
  }
  let itemLength = Object.keys(z).length;
  if (itemLength < 1) {
    document.getElementById("cartTable").style.display = "none";
    document.getElementsByClassName("emptyCart")[0].style.display = "block";
  } else {
    document.getElementById("cartTable").style.display = "table";
    document.getElementsByClassName("emptyCart")[0].style.display = "none";
  }
}
//update cart items quantity on input change
function updateQuantity() {
  let prod = this.closest(".cart-item");
  let prod_cost = prod.children[2].innerText.slice(1);
  prod.children[4].innerText = `$${Number(prod_cost)*this.value}`

  let z = JSON.parse(localStorage.getItem("CartItem"));
  arr = [];
  for (let k = 0; k < Object.keys(z).length; k++) {
    if (z[k].name == prod.children[1].innerText) {
      z[k].quantity = this.value;
    }
    arr.push(z[k]);
  }
  localStorage.setItem("CartItem", JSON.stringify(arr));
}
