import React, { useState } from "react";
import { observer } from "mobx-react";
import { List, Content } from "native-base";

//Styles
import { CheckoutButton, CheckoutTextStyled } from "./styles";

// Components
import CartItem from "./CartItem";
import SearchBar from "../SearchBar";

// Store
import cartStore from "../../stores/cartStore";
import bookStore from "../../stores/bookStore";
import authStore from "../../stores/authStore";

const CartList = ({ navigation }) => {
  const [query, setQuery] = useState("");

  if (cartStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...bookStore.getBookById(item.bookId),
      quantity: item.quantity,
    }))
    .filter((book) => book.name.toLowerCase().includes(query.toLowerCase()))

    .map((item) => <CartItem item={item} key={item.name} />);

  const handleCheckout = async () => {
    if (authStore.user) {
      await cartStore.checkoutCart();
      navigation.navigate("Home");
    } else {
      navigation.navigate("Sign in");
    }
  };
  return (
    <Content>
      <SearchBar setQuery={setQuery} />
      <List>{cartList}</List>
      <CheckoutButton onPress={handleCheckout}>
        <CheckoutTextStyled>
          {authStore.user ? "Checkout" : "Sign in to continue"}
        </CheckoutTextStyled>
      </CheckoutButton>
    </Content>
  );
};

export default observer(CartList);
