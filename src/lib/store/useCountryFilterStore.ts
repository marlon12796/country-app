import { create } from "zustand";
import type { RegionTypes } from "../constants";
interface CountryFilterStore {
  minPopulation: number;
  maxPopulation: number;
  region: RegionTypes;
  search: string;
  sort: string;
  changeMinPopulation: (minPopulation: number) => void;
  changeMaxPopulation: (maxPopulation: number) => void;
  updateSort: (value: string) => void;
  updateSearch: (search: string) => void;
  updateRegion: (region: RegionTypes) => void;
  resetFilters: () => void;
}
export const useCountryFiltersStore = create<CountryFilterStore>((set, get) => ({
  search: "",
  region: "All",
  minPopulation: 0,
  maxPopulation: Number.POSITIVE_INFINITY,
  sort: "name-asc",
  changeMinPopulation: (minPopulation: number) => set({ minPopulation }),
  changeMaxPopulation: (maxPopulation: number) => set({ maxPopulation }),
  updateSearch: (search: string) => set({ search }),
  updateRegion: (region: RegionTypes) => set({ region }),
  updateSort: (value: string) => set({ sort: value }),
  resetFilters: () =>
    set({
      search: "",
      region: "All",
      sort: "name-asc",
      minPopulation: 0,
      maxPopulation: Number.POSITIVE_INFINITY,
    }),
}));
