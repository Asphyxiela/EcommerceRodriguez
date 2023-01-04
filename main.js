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

if (document.querySelector(".toggle-dark-mode") != null) {
  const toggle = document.querySelector('.toggle-dark-mode');
    toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
} else {

}

window.onload = function() {
  var cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    for (var i = 0; i < cart.length; i++) {
      addItemToCart(cart[i]);
    }
  }
};

const clickFormulario = document.querySelector(".botonClickeado")
clickFormulario.addEventListener("click", submitForm, true)

function submitForm( event ) {
  // event.preventDefault()
  var nombre = document.getElementById("nombre").value;
  var numero = document.getElementById("numeroTelefono").value;
  var correo = document.getElementById("correo").value;
  var comentarios = document.getElementById("comentarios").value;
  const cambioJSON = {
    "nombre": nombre,
    "numero": numero,
    "correo": correo,
    "comentarios": comentarios,
    }
  document.querySelector(".result").innerHTML = "Has enviado tus datos. ¡En breve te responderemos!"
  localStorage.setItem('datosDeContacto', JSON.stringify(cambioJSON))
  document.querySelector(".claseFormulario").reset();
  console.log(localStorage.getItem("datosDeContacto"))
} 



// const addItem = document.querySelector(".carroCompras")

// addItem.onclick = ( event ) => {

// }

function addToCart() {
  var name = document.getElementById("name");
  var price = document.getElementById("price");
  var quantity = document.getElementById("quantity");

  var item = {
    name: name,
    price: price,
    quantity: quantity,
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
  quantityElement.innerHTML = item.quantity + "unidades";
  itemElement.appendChild(quantityElement);

  var cartElement = document.getElementById("cart");
  cartElement.appendChild(itemElement);
}