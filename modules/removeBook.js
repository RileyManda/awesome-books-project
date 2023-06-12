export default function removeBook(collection, bookID) {
  collection.books = collection.books.filter((book) => book.id !== bookID);
}
