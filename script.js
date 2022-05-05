// Modal appear selectors
const addBookBtn = document.querySelector(".add-book-btn");

const newBookModal = document.querySelector(".newBook-modal");
const closeModalBtn = document.querySelector(".close");
const addBtn = document.querySelector(".add");

let myLibrary = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
  myLibrary.push(new Book(title, author, pages));
}

function closeModalFunc() {
  newBookModal.style.display = "none";
}

addBookBtn.addEventListener("click", function () {
  newBookModal.style.display = "flex";
});

closeModalBtn.addEventListener("click", function () {
  closeModalFunc();
});

window.onclick = function (event) {
  if (event.target == newBookModal) {
    closeModalFunc();
  }
};
