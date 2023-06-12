import { saveBooksToStorage } from './modules/storage.js';
import addBook from './modules/addBook.js';
import { startUpdatingTime } from './modules/displayTime.js';
import BookCollection from './modules/bookCollection.js';

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

// Function for displaying date and time
startUpdatingTime();
