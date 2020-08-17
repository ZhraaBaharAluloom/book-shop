import React from "react";
import { ListItem, Thumbnail } from "native-base";
import { VendorItemStyled } from "./styles";

const VendorItem = ({ vendor }) => {
  return (
    <ListItem>
      <Thumbnail
        source={{
          uri:
            vendor.image ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5XPbBtUuN16bFaxmh0Ar6IyZfOk89n9e95Q&usqp=CAU",
        }}
      ></Thumbnail>
      <VendorItemStyled>{vendor.name}</VendorItemStyled>
    </ListItem>
  );
};

export default VendorItem;
