import { getBooksFromStorage, saveBooksToStorage } from './modules/storage.js';
import addBook from './modules/addBook.js';
import removeBook from './modules/removeBook.js';

class BookCollection {
  constructor() {
    this.books = [];
    this.nextBookId = 1;
  }

  // Save data to the local storage
  saveData() {
    document.addEventListener('DOMContentLoaded', () => {
      this.books = getBooksFromStorage() || [];
      this.nextBookId = this.books.length > 0
        ? Math.max(...this.books.map((book) => book.id)) + 1
        : 1;
      this.displayBooks();
    });
  }

  // Display books method
  displayBooks() {
    const bookContainer = document.querySelector('.books-container');
    bookContainer.innerHTML = '';
    this.books.forEach((book) => {
      const bookElement = document.createElement('div');
      bookElement.classList.add('book');
      const bookItemElement = document.createElement('div');
      bookItemElement.classList.add('book-item');
      const titleElement = document.createElement('p');
      titleElement.classList.add('book-title');
      titleElement.textContent = book.title;
      const authorElement = document.createElement('p');
      authorElement.classList.add('book-author');
      authorElement.textContent = book.author;
      const removeButton = document.createElement('button');
      removeButton.classList.add('btn', 'remove');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        removeBook(this, book.id);
        saveBooksToStorage(this.books);
        this.displayBooks();
      });

      bookItemElement.appendChild(titleElement);
      bookItemElement.appendChild(authorElement);

      bookElement.appendChild(bookItemElement);
      bookElement.appendChild(removeButton);

      bookContainer.appendChild(bookElement);
    });
  }
}

const collection = new BookCollection();
collection.saveData();

// Add event listener to each menu item
const menuItems = document.querySelectorAll('.row-list li a');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault();

    // Remove active class from all menu items
    menuItems.forEach((item) => {
      item.classList.remove('active');
    });

    // Add active class to the clicked menu item
    menuItem.classList.add('active');

    // Get the target section from the data attribute
    const targetSectionId = menuItem.getAttribute('data-section');

    // Hide all sections
    const sections = document.querySelectorAll('.section-container');
    sections.forEach((section) => {
      section.classList.remove('active');
    });

    // Show the target section
    const targetSection = document.getElementById(targetSectionId);
    targetSection.classList.add('active');
  });
});

const form = document.querySelector('#add-book-section form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const titleInput = document.getElementById('title');
  const authorInput = document.getElementById('author');

  const title = titleInput.value;
  const author = authorInput.value;

  if (title && author) {
    addBook(collection, title, author);
    saveBooksToStorage(collection.books);
    collection.displayBooks();

    titleInput.value = '';
    authorInput.value = '';
  }
});
