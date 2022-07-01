import api from "./api";

const getByCEP = async cep => await api.get(`ws/${cep}/json/`);

export const cepService = {
  getByCEP
};