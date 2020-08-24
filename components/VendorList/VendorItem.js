import React from "react";

// Styles
import { ListItem, Thumbnail } from "native-base";
import { VendorItemStyled } from "./styles";

// Default image
import defaultbook from "../../defaultbook.jpeg";

const VendorItem = ({ vendor, navigation }) => {
  return (
    <ListItem onPress={() => navigation.navigate("Books", { vendor: vendor })}>
      <Thumbnail
        source={vendor.image ? { uri: vendor.image } : defaultbook}
      ></Thumbnail>
      <VendorItemStyled>{vendor.name}</VendorItemStyled>
    </ListItem>
  );
};

export default VendorItem;
