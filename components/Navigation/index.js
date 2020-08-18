import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Components
import Home from "../Home";
import VendorList from "../VendorList";
import BookList from "../BookList";

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
        options={{ title: "Bookshop" }}
      />
      <Screen name="Books" component={BookList} />
    </Navigator>
  );
};

export default RootNavigator;
