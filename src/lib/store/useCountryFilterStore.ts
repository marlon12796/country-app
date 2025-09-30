import { create } from "zustand";
import type { RegionTypes } from "../constants";
export enum SortOptions {
  NameAsc = "name-asc",
  NameDesc = "name-desc",
  PopulationAsc = "population-asc",
  PopulationDesc = "population-desc",
}
interface CountryFilterStore {
  minPopulation: number;
  maxPopulation?: number;
  region: RegionTypes;
  search: string;
  sort: SortOptions;
  changeMinPopulation: (minPopulation: number) => void;
  changeMaxPopulation: (maxPopulation?: number) => void;
  updateSort: (value: SortOptions) => void;
  updateSearch: (search: string) => void;
  updateRegion: (region: RegionTypes) => void;
  resetFilters: () => void;
}

export const useCountryFiltersStore = create<CountryFilterStore>((set) => ({
  search: "",
  region: "All",
  minPopulation: 0,
  maxPopulation: undefined,
  sort: SortOptions.NameAsc,
  changeMinPopulation: (minPopulation: number) => set({ minPopulation }),
  changeMaxPopulation: (maxPopulation?: number) => set({ maxPopulation }),
  updateSearch: (search: string) => set({ search }),
  updateRegion: (region: RegionTypes) => set({ region }),
  updateSort: (value: SortOptions) => set({ sort: value }),
  resetFilters: () =>
    set({
      search: "",
      region: "All",
      sort: SortOptions.NameAsc,
      minPopulation: 0,
      maxPopulation: undefined,
    }),
}));
