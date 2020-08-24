import React from "react";
import { View, Text, Icon } from "native-base";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

//Styles
import { DropdownIcon, DropdownStyled, HomeIcon } from "./style";

import { useNavigation } from "@react-navigation/native";

//Stores
import authStore from "../../stores/authStore";

const Dropdown = () => {
  const navigation = useNavigation();
  return (
    <DropdownStyled>
      <Menu>
        <MenuTrigger text={<DropdownIcon type="Entypo" name="menu" />} />

        <MenuOptions
          optionsContainerStyle={{ width: "25%", alignItems: "center" }}
        >
          <MenuOption onSelect={() => alert(`Save`)} text="My profile" />
          <MenuOption onSelect={authStore.signout}>
            <Text style={{ color: "red" }}>Sign out</Text>
          </MenuOption>
          <MenuOption
            onSelect={() => navigation.navigate("Home")}
            text={<HomeIcon type="AntDesign" name="home" />}
          />
        </MenuOptions>
      </Menu>
    </DropdownStyled>
  );
};

export default Dropdown;
