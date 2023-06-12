import { DateTime } from './node_modules/luxon/src/luxon.js';
import BookCollection from './modules/bookCollection.js';
import initializeMenu from './modules/menu.js';
import initializeForm from './modules/form.js';

// Function for displaying date and time
const dateTimeElement = document.querySelector('#datetime');

function updateDateTime() {
  const currentDateTime = DateTime.now()
    .setZone('America/New_York')
    .minus({ weeks: 1 })
    .endOf('day');

  const formattedDateTime = currentDateTime.toLocaleString({
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  // Update the text content of the DOM element
  dateTimeElement.textContent = formattedDateTime;
}

updateDateTime();
// book collection
const collection = new BookCollection();
// save data
collection.saveData();
// dom elements:Menu and Form
initializeMenu(collection);
initializeForm(collection);
