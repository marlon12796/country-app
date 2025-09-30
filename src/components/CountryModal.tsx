"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { Heart, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useFavoritesStore } from "@/lib/store/useFavorite";
import type { Country } from "@/types/country";
import Image from "next/image";
import { DialogTrigger } from "@radix-ui/react-dialog";

interface CountryModalProps {
  country: Country;
  children: React.ReactNode;
}

export function CountryModal({ country, children }: CountryModalProps) {
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const favorite = isFavorite(country.cca3);

  const handleFavoriteClick = () => {
    toggleFavorite(country.cca3);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl rounded-none bg-card text-card-foreground h-full sm:rounded-2xl sm:h-fit overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="text-balance  text-center text-2xl font-bold text-foreground">
              {country.name.official}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg border border-border bg-muted">
            <Image
              width={400}
              height={400}
              src={country.flags.svg || country.flags.png}
              alt={country.flags.alt || `Flag of ${country.name.common}`}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Common Name
              </p>
              <p className="text-lg font-semibold text-foreground">
                {country.name.common}
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Official Name
              </p>
              <p className="text-lg font-semibold text-foreground">
                {country.name.official}
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Region
              </p>
              <p className="text-lg font-semibold text-foreground">
                {country.region}
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Population
              </p>
              <p className="text-lg font-semibold text-foreground">
                {country.population.toLocaleString()}
              </p>
            </div>

            {country.capital && country.capital.length > 0 && (
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                  Capital
                </p>
                <p className="text-lg font-semibold text-foreground">
                  {country.capital.join(", ")}
                </p>
              </div>
            )}

            <div className="space-y-1">
              <p className="text-sm font-medium text-muted-foreground">
                Country Code
              </p>
              <p className="text-lg font-semibold text-foreground">
                {country.cca3}
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t border-border pt-4">
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>

            <Button
              onClick={handleFavoriteClick}
              className={cn(
                "gap-2",
                favorite
                  ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  : "bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              <Heart
                className={cn(
                  "size-4 text-stone-50",
                  favorite && "fill-current",
                )}
              />
              <span className=" text-white">
                {favorite ? "Remove from Favorites" : "Add to Favorites"}
              </span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
