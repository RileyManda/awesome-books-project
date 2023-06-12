export function addBook(collection, title, author) {
  const newBook = { id: collection.nextBookId, title, author };
  collection.books.push(newBook);
  collection.nextBookId += 1;
}

export function removeBook(collection, bookID) {
  collection.books = collection.books.filter((book) => book.id !== bookID);
}
