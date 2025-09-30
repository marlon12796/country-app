"use client";
import { getCountriesByCodes } from "@/lib/api/countries";
import { useFavoritesStore } from "@/lib/store/useFavorite";
import type { Country } from "@/types/country";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/Button";
import { CountryCard } from "./CountryCard";
import Link from "next/link";
import { CountryCardSkeleton } from "./CountryCardSkeleton";

export const FavoritesList = () => {
  const { favorites, hasHydrated } = useFavoritesStore();
  const [countries, setCountries] = useState<Country[] | null>(null); // null = no cargado
  const [isLoading, setIsLoading] = useState(true);

  // biome-ignore lint/correctness/useExhaustiveDependencies: array hace loading infinito mejor primitivo
  useEffect(() => {
    if (!hasHydrated) return;
    if (favorites.length === 0) {
      setCountries([]); // no hay favoritos
      setIsLoading(false);
      return;
    }

    const fetchFavorites = async () => {
      try {
        setIsLoading(true);
        const data = await getCountriesByCodes(favorites);
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
        setCountries([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFavorites();
  }, [favorites.join(",")]);

  if (!hasHydrated || isLoading || countries === null) {
    return (
      <>
        <div className="mb-6 text-sm text-muted-foreground">
          Loading Favorite Countries...
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <CountryCardSkeleton key={`country-skeleton-${i}`} />
          ))}
        </div>
      </>
    );
  }

  const favoriteCountries = countries.filter((c) => favorites.includes(c.cca3));

  if (favoriteCountries.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-12 text-center">
        <Heart className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
        <h2 className="mb-2 text-xl font-semibold text-foreground">
          No favorites yet
        </h2>
        <p className="mb-6 text-muted-foreground">
          Start exploring countries and add them to your favorites by clicking
          the heart icon
        </p>
        <Button asChild>
          <Link href="/">Browse Countries</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6 text-sm text-muted-foreground">
        {favoriteCountries.length}{" "}
        {favoriteCountries.length === 1 ? "country" : "countries"} in your
        favorites
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favoriteCountries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </>
  );
};
