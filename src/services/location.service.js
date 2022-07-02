import { Location } from "./api";

const getByAddress = async ({ 
  city,
  state,
  street
}) => {
  return await Location.get(`search?country=Brazil&city=${city}&state=${state}&street=${street}&format=json&limit=1`);
}

export const locationServices = {
  getByAddress
};