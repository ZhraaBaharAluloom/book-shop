import React, { useState } from "react";
import { observer } from "mobx-react";
import NumericInput from "react-native-numeric-input";

// Stores
import cartStore from "../../stores/cartStore";

// Default image
import bookitem from "../../bookitem.jpg";

// Styles
import { BookItemStyled, AddButtonStyled } from "./styles";
import { ListItem, Thumbnail, Left, Body, Right } from "native-base";

const BookItem = ({ book, navigation }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    const newItem = { quantity, bookId: book.id };
    cartStore.addItemToCart(newItem);
  };

  return (
    <ListItem
      avatar
      onPress={() => navigation.navigate("Book Detail", { book: book })}
    >
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
          totalHeight={25}
          initValue={1}
          totalWidth={60}
          minValue={1}
          containerStyle={{ borderColor: "#723d46" }}
        />
        <AddButtonStyled transparent onPress={handleAdd}>
          Add
        </AddButtonStyled>
      </Right>
    </ListItem>
  );
};

export default observer(BookItem);
