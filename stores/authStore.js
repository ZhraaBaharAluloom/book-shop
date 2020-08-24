import { decorate, observable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import { AsyncStorage } from "react-native";

class AuthStore {
  user = null;

  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    this.user = decode(token);
  };

  signup = async (userData) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      console.log("AuthStore -> signup -> res.data.token", res.data.token);
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
    }
  };

  signin = async (userData) => {
    try {
      const res = await instance.post("/signin", userData);
      this.setUser(res.data.token);
    } catch (error) {
      console.log("AuthStore -> signin -> error", error);
    }
  };
  signout = async () => {
    delete instance.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
    this.user = null;
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    console.log("checkForToken -> token", token);
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.signout();
      }
    }
  };

  // clearStorage = async () => {
  //   await AsyncStorage.removeItem("myToken");
  // };
}

decorate(AuthStore, {
  user: observable,
});

const authStore = new AuthStore();
authStore.checkForToken();
// authStore.clearStorage();
export default authStore;
