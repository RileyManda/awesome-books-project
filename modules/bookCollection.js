import removeBook from './removeBook.js';
import { getBooksFromStorage, saveBooksToStorage } from './storage.js';

export default class BookCollection {
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
