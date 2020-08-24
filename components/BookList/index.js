import React, { useState } from "react";
import { observer } from "mobx-react";
import BookItem from "./BookItem";
import SearchBar from "../SearchBar";

// Stores
import bookStore from "../../stores/bookStore";

// Styles
import { Content, List, Thumbnail } from "native-base";
import { VendorTextStyled } from "./styles";

const BookList = ({ route, navigation }) => {
  const [query, setQuery] = useState("");

  const { vendor } = route.params;

  const bookList = vendor.books
    .map((book) => bookStore.getBookById(book.id))
    .filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))
    .map((book) => (
      <BookItem book={book} key={book.id} navigation={navigation} />
    ));
  return (
    <Content>
      <VendorTextStyled>{vendor.name} SHOP</VendorTextStyled>
      <Thumbnail square source={{ uri: vendor.image || "" }} />

      <SearchBar setQuery={setQuery} />
      <List>{bookList}</List>
    </Content>
  );
};

export default observer(BookList);
