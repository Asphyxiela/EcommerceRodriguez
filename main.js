function decreaseQuantity( button ) {
    var parent = button.parentNode;

    var count = parent.querySelector("#item-count").innerHTML;
  
    count = Math.max(parseInt(count) - 1, 0);
  
    parent.querySelector("#item-count").innerHTML = count;
}
  
function increaseQuantity( button ) {
  var parent = button.parentNode;
  var count = parent.querySelector("#item-count").innerHTML;
  
  count = parseInt(count) + 1;
  parent.querySelector("#item-count").innerHTML = count;
}

window.onload = function() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    for (var i = 0; i < cart.length; i++) {
      addItemToCart(cart[i]);
    }
  }
};

function addToCart() {
  var nombre = document.getElementById("nombre").value;
  var valor = document.getElementById("valor").value;
  var cantidad = document.getElementById("cantidad").value;
  
  var item = {
    nombre: nombre,
    valor: valor,
    cantidad: cantidad,
};
  
addItemToCart(item);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addItemToCart(item) {
  var itemElement = document.createElement("div");
  itemElement.className = "item";
  
  var nameElement = document.createElement("p");
  nameElement.innerHTML = item.name;
  itemElement.appendChild(nameElement);
  
  var priceElement = document.createElement("p");
  priceElement.innerHTML = "$" + item.price;
  itemElement.appendChild(priceElement);
  
  var quantityElement = document.createElement("p");
  quantityElement.innerHTML = item.quantity + " unidades";
  itemElement.appendChild(quantityElement);
  
  var cartElement = document.getElementById("cart");
  cartElement.appendChild(itemElement);
}

const toggle = document.querySelector('.activar-modo-oscuro');
    toggle.addEventListener('click', () => {
    document.body.classList.toggle('modo-oscuro');
});