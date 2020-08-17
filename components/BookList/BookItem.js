import React from "react";
import { View } from "react-native";
import { BookItemStyled } from "./styles";
import { ListItem } from "native-base";

const BookItem = ({ book }) => {
  return (
    <ListItem>
      <BookItemStyled>{book.name}</BookItemStyled>
    </ListItem>
  );
};

export default BookItem;
