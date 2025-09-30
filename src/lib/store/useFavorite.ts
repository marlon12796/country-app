// useFavorite.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type FavoriteStore = {
  favorites: string[];
  toggleFavorite: (code: string) => void;
  isFavorite: (code: string) => boolean;
  hasHydrated: boolean; // <-- indicador de hidratación
  setHasHydrated: (state: boolean) => void;
};

export const useFavoritesStore = create<FavoriteStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      toggleFavorite: (code) =>
        set((state) => ({
          favorites: state.favorites.includes(code)
            ? state.favorites.filter((c) => c !== code)
            : [...state.favorites, code],
        })),
      isFavorite: (code) => get().favorites.includes(code),
      hasHydrated: false,
      setHasHydrated: (state) => set({ hasHydrated: state }),
    }),
    {
      name: "favorites",
      // Callback que se llama cuando se hidrata el store desde localStorage
      onRehydrateStorage: () => (state) => {
        console.log(state);
        state?.setHasHydrated(true);
      },
    },
  ),
);
