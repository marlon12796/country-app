import { FavoritesList } from "@/components/FavoritesList";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const FavoritesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to all countries</span>
              </Link>
            </Button>
            <div>
              <h1 className="text-balance text-2xl font-bold text-foreground">
                Favorite Countries
              </h1>
              <p className="text-sm text-muted-foreground">
                Your saved countries collection
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <FavoritesList />
      </main>
    </div>
  );
};

export default FavoritesPage;
