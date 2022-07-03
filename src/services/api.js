import axios from "axios";

export const CEP =  axios.create({
  baseURL: "https://viacep.com.br/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json"
  }
});

export const Location = axios.create({
  baseURL: "https://nominatim.openstreetmap.org/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json"
  }
});