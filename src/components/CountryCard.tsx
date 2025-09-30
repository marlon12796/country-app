"use client";
import { cn } from "@/lib/utils";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/Card";
import { Heart } from "lucide-react";
import { Button } from "./ui/Button";
import type { Country } from "@/types/country";
import Image from "next/image";

export const CountryCard = ({ country }: { country: Country }) => {
  return (
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
          <Button
            size="icon"
            variant="secondary"
            className={cn(
              "absolute right-2 top-2 h-8 w-8 shadow-md transition-colors"
            )}
          >
            <Heart className={cn("h-4 w-4")} />
          </Button>
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
  );
};
