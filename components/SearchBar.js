import React from "react";
import { View } from "react-native";
import { SearchBarStyled } from "../styles";
import { TextInput } from "react-native-gesture-handler";

const SearchBar = ({ setQuery }) => {
  return (
    <View>
      <SearchBarStyled placeholder="Search.." onChangeText={setQuery} />
    </View>
  );
};

export default SearchBar;
