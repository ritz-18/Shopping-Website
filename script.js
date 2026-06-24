let cart = 0;

function addCart() {
cart++;
document.getElementById("cartCount").innerText = cart;
}

function showDetails(name, desc, price) {
document.getElementById("popup").style.display = "flex";

document.getElementById("pname").innerText = name;
document.getElementById("pdesc").innerText = desc;
document.getElementById("pprice").innerText = price;
}

function closePopup() {
document.getElementById("popup").style.display = "none";
}

function openLogin() {
document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
document.getElementById("loginModal").style.display = "none";
}

function openRegister() {
document.getElementById("registerModal").style.display = "flex";
}

function closeRegister() {
document.getElementById("registerModal").style.display = "none";
}

/* Search Product */

document
.getElementById("searchInput")
.addEventListener("keyup", function() {

let value = this.value.toLowerCase();

let products = document.querySelectorAll(".card");

products.forEach(product => {

let title = product
.querySelector("h3")
.innerText
.toLowerCase();

product.style.display =
title.includes(value)
? "block"
: "none";

});
});