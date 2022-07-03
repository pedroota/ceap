import { CEP } from "./api";

const getByCEP = async cep => await CEP.get(`ws/${cep}/json/`);

export const cepService = {
  getByCEP
};