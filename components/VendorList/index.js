import React from "react";
import vendorStore from "../../stores/vendorStore";
import { observer } from "mobx-react";
import VendorItem from "./VendorItem";
import { List, Content, Spinner } from "native-base";

const VendorList = () => {
  if (vendorStore.loading) return <Spinner />;

  const vendorList = vendorStore.vendors.map((vendor) => (
    <VendorItem vendor={vendor} key={vendor.id} />
  ));
  return (
    <Content>
      <List>{vendorList}</List>
    </Content>
  );
};

export default observer(VendorList);
