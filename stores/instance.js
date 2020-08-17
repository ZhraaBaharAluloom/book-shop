import axios from "axios";

const instance = axios.create({
  baseURL: "https://secret-tundra-53961.herokuapp.com",
});

export default instance;
