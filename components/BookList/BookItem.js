import React from "react";
import { View } from "react-native";
import { BookItemStyled } from "./styles";
import { ListItem, Thumbnail } from "native-base";
import bookitem from "../../bookitem.jpg";
import VendorList from "../VendorList";

const BookItem = ({ book }) => {
  return (
    <View>
      <ListItem>
        <Thumbnail
          source={book.image ? { uri: book.image } : bookitem}
        ></Thumbnail>
        <BookItemStyled>{book.name}</BookItemStyled>
      </ListItem>
    </View>
  );
};

export default BookItem;
