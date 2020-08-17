import React from "react";
import bookStore from "../../stores/bookStore";
import BookItem from "./BookItem";
import { Content, List } from "native-base";
import { observer } from "mobx-react";

const BookList = () => {
  const bookList = bookStore.books.map((book) => (
    <BookItem book={book} key={book.id} />
  ));
  return (
    <Content>
      <List>{bookList}</List>
    </Content>
  );
};

export default observer(BookList);
