import { Compass, Heart, Home, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-border rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-border rounded-full animate-pulse [animation-delay:300ms]" />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-2 border-border rounded-full animate-pulse [animation-delay:600ms]" />
        <div className="absolute bottom-40 right-1/3 w-28 h-28 border-2 border-border rounded-full animate-pulse [animation-delay:900ms]" />
      </div>

      <div className="max-w-4xl w-full text-center space-y-6 sm:space-y-8 lg:space-y-10 relative z-10">
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            <MapPin className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gray-200 animate-bounce [animation-delay:0ms]" />
            <Compass className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-gray-200 animate-spin [animation-duration:8s]" />
          </div>
          <h1 className="text-[120px] sm:text-[180px] lg:text-[240px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-gray-300 via-muted-foreground to-foreground leading-none select-none">
            404
          </h1>
        </div>

        <div className="space-y-3 sm:space-y-4 px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Lost in the World?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            This destination doesn't exist on our map. Perhaps you took a wrong
            turn at the border crossing.
          </p>
          <p className="text-sm sm:text-base text-muted-foreground/70 max-w-xl mx-auto">
            Let's get you back to exploring the 250+ countries and territories
            we have in our atlas.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center pt-4 sm:pt-6 px-4">
          <Button
            asChild
            size="lg"
            className="transition-all hover:scale-105 w-full sm:w-auto sm:min-w-[220px] h-12 sm:h-14 text-base sm:text-lg"
          >
            <Link href="/" className="flex items-center justify-center gap-2">
              <Home className="w-5 h-5" />
              Explore All Countries
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="transition-all hover:scale-105 w-full sm:w-auto sm:min-w-[220px] h-12 sm:h-14 text-base sm:text-lg bg-transparent"
          >
            <Link
              href="/favorites"
              className="flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              My Favorite Places
            </Link>
          </Button>
        </div>

        <div className="pt-8 sm:pt-10 lg:pt-12">
          <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-2xl mx-auto px-4">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                250+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Countries
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                7
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                Continents
              </div>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
                8B+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">
                People
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 flex justify-center gap-2">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-foreground animate-bounce [animation-delay:0ms]" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-foreground animate-bounce [animation-delay:150ms]" />
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-foreground animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}
