import { create } from "zustand";
import { persist } from "zustand/middleware";
interface FavoritesStore {
  favorites: string[];
  toggleFavorite: (countryCode: string) => void;
  isFavorite: (countryCode: string) => boolean;
  removeFavorite: (countryCode: string) => void;
  addFavorite: (countryCode: string) => void;
}
export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      isFavorite: (countryCode: string) => {
        return get().favorites.includes(countryCode);
      },
      removeFavorite: (countryCode: string) =>
        set((state) => ({
          favorites: state.favorites.filter((code) => code !== countryCode),
        })),
      addFavorite: (countryCode: string) =>
        set((state) => ({
          favorites: [...state.favorites, countryCode],
        })),
      toggleFavorite: (countryCode: string) => {
        const { favorites, removeFavorite, addFavorite } = get();
        favorites.includes(countryCode)
          ? removeFavorite(countryCode)
          : addFavorite(countryCode);
      },
    }),
    { name: "countries-favorites" }
  )
);
