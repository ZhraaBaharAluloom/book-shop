import React, { useState } from "react";
import vendorStore from "../../stores/vendorStore";
import { observer } from "mobx-react";
import VendorItem from "./VendorItem";
import { List, Content, Spinner } from "native-base";
import SearchBar from "../SearchBar";

const VendorList = ({ navigation }) => {
  const [query, setQuery] = useState("");
  if (vendorStore.loading) return <Spinner />;

  const vendorList = vendorStore.vendors
    .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
    .map((vendor) => (
      <VendorItem vendor={vendor} key={vendor.id} navigation={navigation} />
    ));
  return (
    <Content>
      <SearchBar setQuery={setQuery} />
      <List>{vendorList}</List>
    </Content>
  );
};

export default observer(VendorList);
