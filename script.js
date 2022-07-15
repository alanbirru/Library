// Modal appear selectors
const addBookBtn = document.querySelector(".add-book-btn");

const newBookModal = document.querySelector(".newBook-modal");
const closeModalBtn = document.querySelector(".close");

const addBtn = document.querySelector(".add");
const titleInput = document.querySelector("#title-input");
const authorInput = document.querySelector("#author-input");
const pagesInput = document.querySelector("#pages-input");
const readInput = document.querySelector("#read-input");
const bookContainer = document.querySelector(".book-container");
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let myBook = new Book(title, author, pages, read);
  myLibrary.push(myBook);
  // IndexOf the book
  myBook.myIndex = myLibrary.indexOf(myBook);

  // showing card
  let cardDiv = document.createElement("div");
  cardDiv.classList.add(`card-${myBook.myIndex}`);
  bookContainer.appendChild(cardDiv);

  let titleH4 = document.createElement("h4");
  titleH4.textContent = myBook.title;
  let authorH4 = document.createElement("h4");
  authorH4.textContent = myBook.author;
  let pagesH4 = document.createElement("h4");
  pagesH4.textContent = myBook.pages;
  let readH4 = document.createElement("h4");
  readH4.textContent = myBook.read;
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add(`button-${myBook.myIndex}`);

  cardDiv.appendChild(titleH4);
  cardDiv.appendChild(authorH4);
  cardDiv.appendChild(pagesH4);
  cardDiv.appendChild(readH4);
  cardDiv.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", function () {
    cardDiv.remove();
  });

  console.log();

  // cardDiv.classList.add(`card ${myBook.myIndex}`);
}

function closeModalFunc() {
  newBookModal.style.display = "none";
  titleInput.value = "";
  authorInput.value = "";
  pagesInput.value = "";
  readInput.checked = false;
}
function deleteBook() {
  element.delete();
}

// Modal events
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

// add event
addBtn.addEventListener("click", function () {
  if (
    titleInput.value === "" ||
    authorInput.value === "" ||
    pagesInput.value === ""
  ) {
    alert("fill all the fields");
  } else {
    addBookToLibrary(
      titleInput.value,
      authorInput.value,
      pagesInput.value,
      readInput.checked
    );

    closeModalFunc();
    console.log(myLibrary);
  }
});
console.log(myLibrary);
