import { Card, CardContent } from "@/components/ui/Card";

export function CountryCardSkeleton() {
  return (
    <Card className="overflow-hidden border border-gray-100 bg-card transition-all hover:border-gray-200">
      <CardContent className="p-0">
        {/* Flag skeleton */}
        <div className="h-48 w-full animate-pulse bg-muted" />

        <div className="p-4">
          {/* Country name skeleton */}
          <div className="mb-3 h-6 w-3/4 animate-pulse rounded bg-muted" />

          <div className="space-y-2">
            {/* Region skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-16 animate-pulse rounded bg-muted" />
              <div className="h-4 w-24 animate-pulse rounded bg-muted" />
            </div>

            {/* Population skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-4 w-20 animate-pulse rounded bg-muted" />
              <div className="h-4 w-28 animate-pulse rounded bg-muted" />
            </div>
          </div>

          {/* Button skeleton */}
          <div className="mt-4 h-9 w-full animate-pulse rounded-md bg-muted" />
        </div>
      </CardContent>
    </Card>
  );
}
