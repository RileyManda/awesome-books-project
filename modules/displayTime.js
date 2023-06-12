import { DateTime } from '../node_modules/luxon/src/luxon.js';
// import { DateTime } from 'luxon';

// Function for updating and displaying date and time
const updateDateTime = (dateTimeElement) => {
  const currentDateTime = DateTime.now()
    .setZone('Europe/Paris')
    .minus({ weeks: 1 })
    .endOf('day');

  const formattedDateTime = currentDateTime.toLocaleString({
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  // Update the text content of the DOM element
  dateTimeElement.textContent = formattedDateTime;
};

export default updateDateTime;
