import { DateTime } from '../node_modules/luxon/src/luxon.js';
// eslint-disable-next-line quotes
// import { DateTime } from "/luxon";

// Function for updating and displaying date and time
const updateDateTime = (dateTimeElement) => {
  const updateClock = () => {
    const currentDateTime = DateTime.now().setZone('Europe/Paris');
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

  // Update the clock immediately
  updateClock();

  // Update the clock every second
  setInterval(updateClock, 1000);
};

export default updateDateTime;
