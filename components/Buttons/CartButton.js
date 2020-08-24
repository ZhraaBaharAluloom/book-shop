import React from "react";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";

// Stores
import cartStore from "../../stores/cartStore";

// Styles
import { CartButtonStyled, CartTextStyled } from "./styles";
import { Button } from "native-base";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Button transparent light onPress={() => navigation.navigate("CART")}>
      <CartTextStyled>{cartStore.totalQuantity}</CartTextStyled>
      <CartButtonStyled type="FontAwesome" name="shopping-cart" />
    </Button>
  );
};

export default observer(CartButton);
