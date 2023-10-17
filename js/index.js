var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var ProductDescInput = document.getElementById("productDesc");
var btnAddProduct = document.getElementById("addProduct");
var btnudateProduct = document.getElementById("udateProduct");
var search = document.getElementById("search");
var index = 0;
var productContainer = [];





if(localStorage.getItem("productContainer")!==null){
  productContainer=JSON.parse(localStorage.getItem("productContainer"));
  displayProduct(productContainer);
}

function addProduct() {
  product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: ProductDescInput.value,
  };
  productContainer.push(product);
  localStorage.setItem("productContainer",JSON.stringify(productContainer));
  displayProduct(productContainer);
  clearForm();
}

function clearForm() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  ProductDescInput.value = "";
}

function displayProduct(productContainer) {
  var cartoona = ``;
  for (var i = 0; i < productContainer.length; i++) {
    cartoona += `
            <tr>
                <td>${productContainer[i].name}</td>
                <td>${productContainer[i].price}</td>
                <td>${productContainer[i].category}</td>
                <td>${productContainer[i].desc}</td>
                <td><button onclick="setUdateProduct(${i})" class="btn btn-outline-warning">update</button></td>
                <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
            </tr>
        `;
  }

  document.getElementById("data").innerHTML = cartoona;
}

function deleteProduct(i) {
  productContainer.splice(i, 1);
  localStorage.setItem("productContainer",JSON.stringify(productContainer));
  displayProduct(productContainer);
}

function setUdateProduct(i) {
  btnAddProduct.classList.replace("d-block", "d-none");
  btnudateProduct.classList.replace("d-none", "d-block");
  productNameInput.value = productContainer[i].name;
  productPriceInput.value = productContainer[i].price;
  productCategoryInput.value = productContainer[i].category;
  ProductDescInput.value = productContainer[i].desc;
  index = i;
}

function udateProduct() {
  var arrey = [];
  product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    desc: ProductDescInput.value,
  };
  arrey.push(product);
  productContainer.splice(index, 1, product);
  localStorage.setItem("productContainer",JSON.stringify(productContainer));
  displayProduct(productContainer);
  clearForm()
  btnAddProduct.classList.replace("d-none", "d-block");
  btnudateProduct.classList.replace("d-block", "d-none");
}

function searchProduct(term) {
  var searchPro = [];
  for (var i = 0; i < productContainer.length; i++) {
    if (productContainer[i].name.toLowerCase().includes(term.toLowerCase()) === true) {
      searchPro.push(productContainer[i]);
    }
  }
  displayProduct(searchPro);  

}
