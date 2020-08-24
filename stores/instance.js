import axios from "axios";

const instance = axios.create({
  // baseURL: "https://secret-tundra-53961.herokuapp.com",
  baseURL: "http://localhost:8000",
});

export default instance;
