import { removeBook } from './bookActions.js';
import { saveBooksToStorage } from './storage.js';

export default function displayBooks(collection) {
  const bookContainer = document.querySelector('.books-container');
  bookContainer.innerHTML = '';
  collection.books.forEach((book) => {
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
      removeBook(collection, book.id);
      saveBooksToStorage(collection.books);
      displayBooks(collection);
    });

    bookItemElement.appendChild(titleElement);
    bookItemElement.appendChild(authorElement);

    bookElement.appendChild(bookItemElement);
    bookElement.appendChild(removeButton);

    bookContainer.appendChild(bookElement);
  });
}
