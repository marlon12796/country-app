import { API_URL } from "../constants";
import type { Country } from "@/types/country";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getCountries = async (): Promise<Country[]> => {
  // ⏳ Simula espera de 5 segundos
  await sleep(5000);

  const response = await fetch(
    `${API_URL}/all?fields=name,flags,population,region,capital,cca3`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  return response.json();
};
