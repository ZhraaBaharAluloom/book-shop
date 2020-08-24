import { computed, observable, decorate } from "mobx";
import AsyncStorage from "@react-native-community/async-storage";
import instance from "./instance";

class CartStore {
  items = [];

  get totalQuantity() {
    let total = 0;
    this.items.forEach((item) => (total += item.quantity));
    return total;
  }

  fetchCart = async () => {
    const items = await AsyncStorage.getItem("myCart");
    this.items = items ? JSON.parse(items) : [];
  };

  addItemToCart = async (newItem) => {
    const foundItem = this.items.find((item) => item.bookId === newItem.bookId);
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  removeItemFromCart = async (itemId) => {
    this.items = this.items.filter((item) => item.bookId !== itemId);
    await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
  };

  checkoutCart = async () => {
    try {
      const res = await instance.post("/checkout", this.items);
      console.log("CartStore -> checkoutCart -> res", res.data);
      this.items = [];
      await AsyncStorage.removeItem("myCart");
    } catch (error) {
      console.log("CartStore -> checkoutCart -> error", error);
    }
  };
}

decorate(CartStore, {
  items: observable,
  totalQuantity: computed,
});

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
