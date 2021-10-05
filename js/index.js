import { renderProducts } from "./components/renderProducts.js";
import { searchProducts } from "./components/searchProducts.js";
import { displayMessage } from "./components/displayMessage.js";

const url = "https://fakestoreapi.com/products";

//fetching products from the url.
async function getProducts() {
  try {
    const response = await fetch(url);

    const json = await response.json();

    const products = json;

    renderProducts(products);
    searchProducts(products);
  } catch (error) {
    displayMessage("error", error, ".products-container");
  }
}

getProducts();
