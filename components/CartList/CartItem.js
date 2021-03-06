import React, { useState } from "react";
import { observer } from "mobx-react";
import NumericInput from "react-native-numeric-input";

//Stores
import cartStore from "../../stores/cartStore";
import bookStore from "../../stores/bookStore";

//Srtyles
import { ListItem, Body, Text, Right, Left } from "native-base";
import {
  TotalPrice,
  TrashIcon,
  CartTextStyled,
  AddButtonStyled,
} from "./styles";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const handleUpdate = () => {
    const newItem = { quantity, bookId: item.id };
    cartStore.addItemToCart(newItem);
  };

  return (
    <ListItem>
      <Body>
        <CartTextStyled>{item.name}</CartTextStyled>
        <Text note>
          Price: {item.price} * {item.quantity} $
        </Text>
        <TotalPrice>Total Price: {item.price * item.quantity} $</TotalPrice>
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
          containerStyle={{ borderColor: "#723d46" }}
        />
        <TrashIcon
          type="EvilIcons"
          name="trash"
          onPress={() => cartStore.removeItemFromCart(item.id)}
        />
        <AddButtonStyled transparent onPress={handleUpdate}>
          Update
        </AddButtonStyled>
      </Right>
    </ListItem>
  );
};

export default observer(CartItem);
