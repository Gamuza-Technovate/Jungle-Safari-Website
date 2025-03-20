const xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost:8000/inventory/");
xhr.send();
xhr.responseType = "json";
xhr.onload = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const data = xhr.response;
    console.log(data);
    data.forEach((item) => {
      document.getElementById("inventoryTable").innerHTML +=
        `<tr> <td>${item.name}</td><td>${item.price}</td><td>${item.cost}</td><td>${item.stock}</td> </tr>`;
    });
  } else {
    console.log(`Error: ${xhr.status}`);
  }
};
