var itemName = document.getElementById("itemName");
var itemDescription = document.getElementById("itemDescription");
var itemPrice = document.getElementById("itemPrice");
var itemCost = document.getElementById("itemCost");
var itemQuantity = document.getElementById("itemQuantity");

document.getElementById("addItemForm").addEventListener("submit", function (e) {
  //prevent the normal submission of the form
  // e.preventDefault();

  const objectifsd = {
    name: itemName.value,
    description: itemDescription.value,
    price: itemPrice.value,
    cost: itemPrice.value,
    stock: itemQuantity.value,
  };

  fetch("http://localhost:8000/inventory/", {
    method: "POST",
    body: JSON.stringify(objectifsd),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  window.location.href = "http://localhost:8080/inventory.html";
});
