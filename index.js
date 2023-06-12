import { startUpdatingTime } from './modules/displayTime.js';
import BookCollection from './modules/bookCollection.js';
import initializeMenu from './modules/menu.js';
import initializeForm from './modules/form.js';

const collection = new BookCollection();
collection.saveData();

initializeMenu(collection);
initializeForm(collection);
// Function for displaying date and time
startUpdatingTime();
