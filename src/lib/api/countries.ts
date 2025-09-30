import type { Country } from "@/types/country";
import { API_URL } from "../constants";



export const getCountries = async (): Promise<Country[]> => {

  const response = await fetch(
    `${API_URL}/all?fields=name,flags,population,region,capital,cca3`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch countries");
  }

  return response.json();
};
/**
 * Obtiene varios países por sus códigos (cca3)
 * @param codes Array de códigos cca3, ejemplo: ["USA","PER","BRA"]
 * @param options Opciones extra de fetch (ej: { signal })
 */
export const getCountriesByCodes = async (
  codes: string[],
  options?: RequestInit
): Promise<Country[]> => {
  if (codes.length === 0) return [];
  const countriesCodes = codes.join(",");
  const response = await fetch(
    `${API_URL}/alpha?codes=${countriesCodes}&fields=name,flags,population,region,capital,cca3`,
    {
      ...options, // 👈 inyectamos signal y cualquier otra opción
    }
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch countries by codes");
  }
  return data;
};
