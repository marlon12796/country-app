import { CountryCardSkeleton } from "@/components/CountryCardSkeleton";
import { CountryList } from "@/components/countryList";
import { Button } from "@/components/ui/Button";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <Suspense
            fallback={Array.from({ length: 20 }).map((val, index) => (
              <CountryCardSkeleton key={`${val}-skeleton`} />
            ))}
          >
            <CountryList />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
