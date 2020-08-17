import { decorate, observable } from "mobx";
import instance from "./instance";

class VendorStore {
  vendors = [];
  loading = true;

  fetchVendors = async () => {
    try {
      const response = await instance.get("/vendors");
      this.vendors = response.data;

      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };
}

decorate(VendorStore, {
  vendors: observable,
  loading: observable,
});

const vendorStore = new VendorStore();
vendorStore.fetchVendors();

export default vendorStore;
