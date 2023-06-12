import { saveBooksToStorage } from './storage.js';
import addBook from './addBook.js';

export default function initializeForm(collection) {
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
}
