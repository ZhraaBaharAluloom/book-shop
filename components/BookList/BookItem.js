import React, { useState } from "react";
import NumericInput from "react-native-numeric-input";
import { observer } from "mobx-react";

// Stores
import cartStore from "../../stores/cartStore";

// Default image
import bookitem from "../../bookitem.jpg";

// Styles
import { BookItemStyled, AddButtonStyled } from "./styles";
import {
  ListItem,
  Thumbnail,
  Left,
  Body,
  Right,
  Button,
  Text,
} from "native-base";

const BookItem = ({ book }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { quantity, bookId: book.id };
    console.log("handleAdd -> newItem", newItem);
    cartStore.addItemToCart(newItem);
  };

  return (
    <ListItem avatar>
      <Left>
        <Thumbnail source={book.image ? { uri: book.image } : bookitem} />
      </Left>
      <Body>
        <BookItemStyled>{book.name}</BookItemStyled>
      </Body>
      <Right>
        <NumericInput
          rounded
          value={quantity}
          onChange={setQuantity}
          totalHeight={30}
          initValue={1}
          totalWidth={60}
          minValue={1}
        />
        <AddButtonStyled transparent onPress={handleAdd}>
          Add
        </AddButtonStyled>
      </Right>
    </ListItem>
  );
};

export default observer(BookItem);
