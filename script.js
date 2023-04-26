// Define variables
const library = [];
let bookId = 0;
const container = document.querySelector('.book-container');
const newBookBtn = document.querySelector('.btn-newBook');
const submitBtn = document.querySelector('.submitBtn');
const modal = document.getElementById('myModal');
const closeBtn = document.querySelector('.close');
const authorInput = document.querySelector('.authorInput');
const titleInput = document.querySelector('.titleInput');
const pageInput = document.querySelector('.pageInput');
const readInput = document.querySelector('.readInput');

// Define Book class
class Book {
  constructor(id, author, title, pages, read) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
  }
}

// Define functions
function addBookToLibrary() {
  const readValue = readInput.checked ? 'Read' : 'Unread';
  const book = new Book(
    bookId,
    authorInput.value,
    titleInput.value,
    pageInput.value,
    readValue
  );
  library.push(book);
  bookId++;
  return book;
}

function displayBooks() {
  container.innerHTML = '';
  library.forEach((book) => {
    const div = document.createElement('div');
    div.classList.add('book');
    div.setAttribute('data-id', book.id);
    const authorP = createParagraph(book.author);
    const titleP = createParagraph(book.title);
    const pagesP = createParagraph(book.pages);
    const readBtn = createButton(book.read, 'read-toggle');
    if (book.read === 'Read') {
      readBtn.style.backgroundColor = '#51FA7D';
    } else {
      readBtn.style.backgroundColor = '#FA5151';
    }
    const deleteBtn = createButton('Delete', 'deleteBtn');
    div.append(authorP, titleP, pagesP, readBtn, deleteBtn);
    container.appendChild(div);
  });
}

function createParagraph(text) {
  const p = document.createElement('p');
  p.textContent = text;
  return p;
}

function createButton(text, className) {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.classList.add(className);
  return btn;
}

function toggleReadStatus(event) {
  const bookId = parseInt(event.target.parentNode.getAttribute('data-id'));
  const index = library.findIndex((book) => book.id === bookId);
  if (index !== -1) {
    library[index].read = library[index].read === 'Read' ? 'Unread' : 'Read';
    displayBooks();
  }
}

function closeModal() {
  modal.style.display = 'none';
  clearModal();
}

function clearModal() {
  authorInput.value = '';
  titleInput.value = '';
  pageInput.value = '';
  readInput.checked = false;
}

function deleteBook(event) {
  const bookId = parseInt(event.target.parentNode.getAttribute('data-id'));
  const index = library.findIndex((book) => book.id === bookId);
  if (index !== -1) {
    library.splice(index, 1);
    displayBooks();
  }
}

// Event listeners
newBookBtn.addEventListener('click', () => (modal.style.display = 'block'));
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});

container.addEventListener('click', (event) => {
  if (event.target.classList.contains('read-toggle')) {
    toggleReadStatus(event);
  } else if (event.target.classList.contains('deleteBtn')) {
    deleteBook(event);
  }
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const book = addBookToLibrary();
  displayBooks();
  closeModal();
  return book;
});

// Display initial books
displayBooks();

console.log(library);
