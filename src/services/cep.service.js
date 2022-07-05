import { CEP } from "./api";

const getByCEP = async cep => await CEP.get(`ws/${cep}/json/`);

const getByAddress = async ({ state, city, street }) => await CEP.get(`ws/${state}/${city}/${street}/json/`)

export const cepService = {
  getByCEP,
  getByAddress
};