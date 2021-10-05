export function renderBooks(books) {
  const booksContainer = document.querySelector(".books-container");
  booksContainer.innerHTML = "";

  for (let i = 0; i < books.length; i++) {
    booksContainer.innerHTML += `<div class="books">
                                     <h2>Title:</h2> 
                                        <p>${books[i].title}</p> <br> 
                                    <h2>Author:</h2> 
                                        <p>${books[i].author}</p> <br> 
                                    <h2>Publisher:</h2> 
                                        <p>${books[i].publisher}/<p>
                                 </div>`;
  }
}
