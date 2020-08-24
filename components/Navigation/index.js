import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Home from "../Home";
import VendorList from "../VendorList";
import BookList from "../BookList";
import CartList from "../CartList";
import CartButton from "../Buttons/CartButton";
import Signin from "../Authentication/Signin";
import Signup from "../Authentication/Signup";
import Dropdown from "../DropdownMenu/Dropdown";
import BookDetail from "../BookList/BookDetail";

const { Navigator, Screen } = createStackNavigator();
const RootNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "#c9ada7",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen
        name="Vendors"
        component={VendorList}
        options={{
          title: "SHOPS",
          headerRight: () => <CartButton />,
        }}
      />
      <Screen
        name="Books"
        component={BookList}
        options={({ route }) => {
          const { vendor } = route.params;
          return {
            title: vendor.name,
            headerRight: () => <CartButton />,
          };
        }}
      />
      <Screen
        name="Book Detail"
        component={BookDetail}
        options={({ route }) => {
          const { book } = route.params;
          return {
            title: book.name,
          };
        }}
      />

      <Screen
        name="CART"
        component={CartList}
        options={{
          headerRight: () => <CartButton />,
          headerLeft: () => <Dropdown />,
        }}
      />
      <Screen name="Sign in" component={Signin} />
      <Screen name="Sign up" component={Signup} />
    </Navigator>
  );
};

export default RootNavigator;
