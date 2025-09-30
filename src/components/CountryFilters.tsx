"use client";
import { REGIONS } from "@/lib/constants";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";
import {
  SortOptions,
  useCountryFiltersStore,
} from "@/lib/store/useCountryFilterStore";
import useDebounce from "@/hooks/useDebounce";
import { useState } from "react";
const TIME_DEBOUNCE = 300;
export const CountryFilters = () => {
  const {
    search,
    region,
    sort,
    minPopulation,
    maxPopulation,
    updateSearch,
    updateRegion,
    updateSort,
    changeMinPopulation,
    changeMaxPopulation,
  } = useCountryFiltersStore();
  const [localSearch, setLocalSearch] = useState(search);
  useDebounce(
    () => {
      updateSearch(localSearch);
    },
    TIME_DEBOUNCE,
    [localSearch]
  );

  return (
    <div className="space-y-6 rounded-lg border border-border bg-card p-6">
      <div>
        {" "}
        <Label htmlFor="search" className="text-sm font-medium text-foreground">
          Search Countries
        </Label>
        <div className="relative mt-2">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="search"
            type="text"
            value={localSearch}
            onInput={(e) => setLocalSearch(e.currentTarget.value)}
            placeholder="Search by name..."
            className="pl-9"
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <Label
            htmlFor="region"
            className="text-sm font-medium text-foreground"
          >
            Region
          </Label>
          <Select value={region} onValueChange={updateRegion}>
            <SelectTrigger id="region" className="mt-2">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              {REGIONS.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="sort" className="text-sm font-medium text-foreground">
            Sort By
          </Label>
          <Select value={sort} onValueChange={updateSort}>
            <SelectTrigger id="sort" className="mt-2">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={SortOptions.NameAsc}>Name (A-Z)</SelectItem>
              <SelectItem value={SortOptions.NameDesc}>Name (Z-A)</SelectItem>
              <SelectItem value={SortOptions.PopulationAsc}>
                Population (Low to High)
              </SelectItem>
              <SelectItem value={SortOptions.PopulationDesc}>
                Population (High to Low)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label className="text-sm font-medium text-foreground">
          Population Range
        </Label>
        <div className="mt-2 grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="min-pop" className="text-xs text-muted-foreground">
              Minimum
            </Label>
            <Input
              id="min-pop"
              type="number"
              placeholder="0"
              className="mt-1"
              value={minPopulation}
              min={0}
              step={1000}
              onInput={(e) => {
                const value = e.currentTarget.value || "0";
                changeMinPopulation(Number.parseInt(value));
              }}
            />
          </div>
          <div>
            <Label htmlFor="max-pop" className="text-xs text-muted-foreground">
              Maximum
            </Label>
            <Input
              id="max-pop"
              type="number"
              placeholder="No limit"
              className="mt-1"
              value={maxPopulation ?? ""}
              min={0}
              step={1000}
              onInput={(e) =>
                changeMaxPopulation(
                  e.currentTarget.value
                    ? parseInt(e.currentTarget.value)
                    : undefined
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
