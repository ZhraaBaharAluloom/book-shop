import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import RootNavigator from "./components/Navigation";
import VendorList from "./components/VendorList";
import { NavigationContainer } from "@react-navigation/native";

const theme = {
  light: {
    mainColor: "#363636",
    backgroundColor: "#f7f7ee",
    lightGrey: " #6d6875",
    grey: "#424b54",
    red: "#6a040f",
    brown: "#463f3a",
  },
  dark: {
    mainColor: "#faeee7",
    backgroundColor: "#363636",
    lightGrey: " #979797",
    red: "#ff3232",
  },
};

const MyTheme = {
  dark: false,
  colors: {
    primary: "#ccc5b9",
    background: "#ffffff",
    card: "#ccc5b9",
    text: "#ccc5b9",
    border: "#5e6472",
    notification: "rgb(255, 69, 58)",
  },
};

export default function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      <NavigationContainer theme={MyTheme}>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
