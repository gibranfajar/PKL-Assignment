let items = [
  ["001", "Keyboard Logitek", 60000, "Keyboard yang mantap untuk kantoran", "assets/img/logitek.jpg"],
  ["002", "Keyboard MSI", 300000, "Keyboard gaming MSI mekanik", "assets/img/msi.jpg"],
  ["003", "Mouse Genius", 50000, "Mouse Genius biar lebih pinter", "assets/img/genius.jpeg"],
  ["004", "Mouse Jerry", 30000, "Mouse yang disukai kucing", "assets/img/jerry.jpg"],
];

let listBarang = document.getElementById("listBarang");

function display(array) {
  let tampung = "";

  for (let i = 0; i < array.length; i++) {
    tampung += `
            <div class="col-4 mt-2">
                    <div class="card" style="width: 18rem;">
                        <img src="${array[i][4]}" class="card-img-top" height="200px" width="200px" alt="...">
                        <div class="card-body">
                            <h5 class="card-title" id="itemName">${array[i][1]}</h5>
                            <p class="card-text" id="itemDesc">${array[i][3]}</p>
                            <p class="card-text">Rp.${array[i][2]}</p>
                            <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
                        </div>
                    </div>
                </div>
            `;
  }
  listBarang.innerHTML = tampung;
}
display(items);

function search(keyword) {
  let filterItem = [];
  for (let j = 0; j < items.length; j++) {
    let namaItem = items[j][1];
    let match = namaItem.toLowerCase().includes(keyword.toLowerCase());

    if (match == true) {
      filterItem.push(items[j]);
    }
  }
  return filterItem;
}
let formSearch = document.getElementById("formItem");
formSearch.addEventListener("submit", function (event) {
  event.preventDefault();
  let keyword = document.getElementById("keyword").value;
  let terFilter = search(keyword);
  display(terFilter);
});
