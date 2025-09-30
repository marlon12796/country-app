"use client";
import { Card, CardContent } from "./ui/Card";
import type { Country } from "@/types/country";
import Image from "next/image";
import { useFavoritesStore } from "@/lib/store/useFavorite";
import { FavoriteButton } from "./FavoriteButton";
import { CountryModal } from "./CountryModal";
export const CountryCard = ({ country }: { country: Country }) => {
  const { toggleFavorite, isFavorite } = useFavoritesStore();
  const favorite = isFavorite(country.cca3);
  const handleToggleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(country.cca3);
  };

  return (
    <CountryModal country={country}>
      <Card className="group cursor-pointer overflow-hidden border-border bg-card transition-all hover:border-muted-foreground/20 hover:shadow-lg">
        <CardContent className="p-0">
          <div className="relative aspect-[3/2] w-full overflow-hidden bg-muted">
            <Image
              src={country.flags?.png ?? "/placeholder.svg"}
              alt={country.flags?.alt ?? `Flag of ${country.name.common}`}
              width={500}
              height={500}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />

            <FavoriteButton
              onToggleFavoriteClick={handleToggleFavoriteClick}
              favorite={favorite}
            />
          </div>
          <div className="space-y-2 p-4">
            <h3 className="text-balance text-lg font-semibold leading-tight text-card-foreground">
              {country.name.common}
            </h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p>
                <span className="font-medium text-foreground">Region:</span>{" "}
                {country.region}
              </p>
              <p>
                <span className="font-medium text-foreground">Population:</span>{" "}
                {country.population.toLocaleString()}
              </p>
              {country.capital && country.capital.length > 0 && (
                <p>
                  <span className="font-medium text-foreground">Capital:</span>{" "}
                  {country.capital[0]}
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </CountryModal>
  );
};
