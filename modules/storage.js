const storageKey = 'books';

export const getBooksFromStorage = () => {
  const books = JSON.parse(localStorage.getItem(storageKey));
  return books || [];
};

export const saveBooksToStorage = (books) => {
  localStorage.setItem(storageKey, JSON.stringify(books));
};
// Retrieve books from local storage
