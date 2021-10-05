import { renderBooks } from "./renderBooks.js";

export function searchBooks(books) {
  const errordiv = document.querySelector(".error");
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    // console.log(event);

    const searchValue = event.target.value.trim().toLowerCase();

    const filteredBooks = books.filter(function (book) {
      if (book.author.toLowerCase().startsWith(searchValue)) {
        errordiv.innerHTML = ``;
        return true;
      } else {
        return false;
      }
    });

    if (filteredBooks.length === 0) {
      errordiv.innerHTML = `<h1>No Author by the name: ${searchValue}</h1>`;
      console.log(filteredBooks);
    }
    console.log(filteredBooks);
    renderBooks(filteredBooks);
  };
}
