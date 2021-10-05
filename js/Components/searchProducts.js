import { renderProducts } from "./renderProducts.js";

export function searchProducts(products) {
  const errordiv = document.querySelector(".error");
  const search = document.querySelector(".search");

  //maps out products finding the object with the highest price.
  const maxProductPrice = Math.max(...products.map((o) => o.price), 0);

  search.onkeyup = function (event) {
    let searchValue = event.target.value.trim();

    //makes sure the highest value will always be the most expensive product in the array.
    if (searchValue === "") {
      searchValue = maxProductPrice;
    }

    //filters items by price making the search bar work.
    const filteredProducts = products.filter((product) => {
      if (product.price <= searchValue) {
        errordiv.innerHTML = ``;
        return true;
      } else {
        return false;
      }
    });

    //displays a message should no price match your search value.
    if (filteredProducts.length === 0) {
      errordiv.innerHTML = `<h1 class="noproducts">Sorry, no products found :(</h1>`;
    }
    renderProducts(filteredProducts);
  };
}
