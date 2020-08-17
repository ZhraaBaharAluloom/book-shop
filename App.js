import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import VendorList from "./components/VendorList";
import BookList from "./components/BookList";

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
export default function App() {
  return (
    <ThemeProvider theme={theme.dark}>
      {/* <VendorList /> */}
      {/* <BookList /> */}
      <Home />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
