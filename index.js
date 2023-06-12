// import { saveBooksToStorage } from './modules/storage.js';
// import addBook from './modules/addBook.js';
import { startUpdatingTime } from './modules/displayTime.js';
import BookCollection from './modules/bookCollection.js';
import { initializeMenu, initializeForm } from './modules/menu.js';

const collection = new BookCollection();
collection.saveData();

initializeMenu(collection);
initializeForm(collection);
// Function for displaying date and time
startUpdatingTime();
