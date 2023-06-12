const addBook = (collection, title, author) => {
  const newBook = { id: collection.nextBookId, title, author };
  collection.books.push(newBook);
  collection.nextBookId += 1;
};

export default addBook;
