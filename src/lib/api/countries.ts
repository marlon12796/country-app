import { API_URL } from "../constants";

export const fetchCountries = async () => {
  const response = await fetch(
    `${API_URL}/all?fields=name,flags,population,region,capital,cca3`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }
  return response.json();
};
