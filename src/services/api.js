import axios from "axios";

export default axios.create({
  baseURL: "https://viacep.com.br/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json"
  }
});