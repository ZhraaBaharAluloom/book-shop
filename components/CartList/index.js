import React from "react";
import { observer } from "mobx-react";
import { List, Content } from "native-base";

// Components
import CartItem from "./CartItem";

// Store
import cartStore from "../../stores/cartStore";
import bookStore from "../../stores/bookStore";

const CartList = () => {
  if (cartStore.loading) return <Spinner />;
  const cartList = cartStore.items
    .map((item) => ({
      ...bookStore.getBookById(item.bookId),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem item={item} key={item.name} />);
  return (
    <Content>
      <List>{cartList}</List>
    </Content>
  );
};

export default observer(CartList);
