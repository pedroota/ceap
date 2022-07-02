import { Location } from "./api";

const getByAddress = async ({ 
  city,
  state
}) => {
  return await Location.get(`search?country=Brazil&city=${city}&state=${state}&format=json&limit=1`);
}

export const locationServices = {
  getByAddress
};