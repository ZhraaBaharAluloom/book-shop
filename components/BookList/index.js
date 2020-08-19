import React, { useState } from "react";
import bookStore from "../../stores/bookStore";
import BookItem from "./BookItem";
import { Content, List } from "native-base";
import { observer } from "mobx-react";
import SearchBar from "../SearchBar";
import VendorList from "../VendorList";
import VendorItem from "../VendorList/VendorItem";

const BookList = ({ route }) => {
  const [query, setQuery] = useState("");

  const { vendor } = route.params;

  const bookList = vendor.books
    .map((book) => bookStore.getBookById(book.id))
    .filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
    .map((book) => <BookItem book={book} key={book.id} />);
  return (
    <Content>
      <SearchBar setQuery={setQuery} />
      <List>{bookList}</List>
    </Content>
  );
};

export default observer(BookList);
