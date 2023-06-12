// import { DateTime } from './node_modules/luxon/src/luxon.js';
import updateDateTime from './modules/displayTime.js';
import BookCollection from './modules/bookCollection.js';
import initializeMenu from './modules/menu.js';
import initializeForm from './modules/form.js';

// Function for displaying date and time
const dateTimeElement = document.querySelector('#datetime');
// book collection
const collection = new BookCollection();
// save data
collection.saveData();
// dom elements:Menu and Form
initializeMenu(collection);
initializeForm(collection);
updateDateTime(dateTimeElement);
