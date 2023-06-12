// Function for displaying date and time

export const updateTime = () => {
  const dateTime = document.querySelector('#datetime');
  const date = new Date().toLocaleString();
  dateTime.innerHTML = date;
};

export const startUpdatingTime = () => {
  setInterval(updateTime, 1000);
};
