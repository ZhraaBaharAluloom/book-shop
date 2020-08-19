import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Home from "../Home";
import VendorList from "../VendorList";
import BookList from "../BookList";
import CartList from "../CartList";
import CartButton from "../Buttons/CartButton";

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
        options={{ title: "Bookshops", headerRight: () => <CartButton /> }}
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
        name="Cart"
        component={CartList}
        options={{
          headerRight: () => <CartButton />,
        }}
      />
    </Navigator>
  );
};

export default RootNavigator;
