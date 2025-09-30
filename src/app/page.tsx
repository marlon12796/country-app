import { Heart } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next/types";
import { Suspense } from "react";
import { CountryCardSkeleton } from "@/components/CountryCardSkeleton";
import { CountryFilters } from "@/components/CountryFilters";
import { CountryList } from "@/components/countryList";
import { Button } from "@/components/ui/Button";
import { getCountries } from "@/lib/api/countries";
export const metadata: Metadata = {
  title: "Countries Explorer | Home",
  description:
    "Discover and explore countries around the world with filters and favorites.",
};
export default async function Home() {
  const countries = await getCountries();
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-balance text-2xl font-bold text-foreground">
              Countries Explorer
            </h1>
            <p className="text-sm text-muted-foreground">
              Discover and explore countries around the world
            </p>
          </div>
          <Button asChild variant="outline" className="gap-2 bg-transparent">
            <Link href="/favorites">
              <Heart className="size-4" />
              Favorites
            </Link>
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 ">
        <div className="mb-8">
          <CountryFilters />
        </div>

        <Suspense
          fallback={Array.from({ length: 20 }).map((_, i) => (
            <CountryCardSkeleton
              key={`country-skeleton-${
                // biome-ignore lint/suspicious/noArrayIndexKey: id es para skeleton
                i
              }`}
            />
          ))}
        >
          <CountryList countries={countries} />
        </Suspense>
      </main>
    </div>
  );
}
