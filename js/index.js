import { renderBooks } from "./ui/renderBooks.js";
import { searchBooks } from "./ui/searchBooks.js";
import { displayMessage } from "./ui/displayMessage.js";

const url = "https://noroff.herokuapp.com/v1/books";

async function getBooks() {
  try {
    const response = await fetch(url);

    const json = await response.json();

    console.log(json);

    const books = json;

    renderBooks(books);
    searchBooks(books);
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".books-container");
  }
}

getBooks();
