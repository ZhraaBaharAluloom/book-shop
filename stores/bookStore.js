import { decorate, observable } from "mobx";
import instance from "./instance";

class BookStore {
  books = [];

  fetchBooks = async () => {
    try {
      const response = await instance.get("/books");
      this.books = response.data;
    } catch (error) {
      console.error(error);
    }
  };

  getBookById = (bookId) => {
    return this.books.find((book) => book.id === bookId);
  };
}

decorate(BookStore, {
  books: observable,
});

const bookStore = new BookStore();
bookStore.fetchBooks();

export default bookStore;
