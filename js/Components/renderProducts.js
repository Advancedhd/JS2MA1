export function renderProducts(products) {
  const productsContainer = document.querySelector(".products-container");
  productsContainer.innerHTML = "";

  //Creates the product cards. Uses for loop to loop them through into .products-container class.
  for (let i = 0; i < products.length; i++) {
    productsContainer.innerHTML += `<div class="products">
                                      <h2>Name:</h2> 
                                        <p>${products[i].title}</p> <br> 
                                      <h2>Price:</h2> 
                                        <p>${products[i].price}$</p> <br> 
                                    </div>`;
  }
}
