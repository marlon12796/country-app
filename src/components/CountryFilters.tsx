"use client";
import { Filter, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";
import { REGIONS } from "@/lib/constants";
import {
  SortOptions,
  useCountryFiltersStore,
} from "@/lib/store/useCountryFilterStore";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";

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
    <div className="space-y-6 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm sm:p-6 lg:p-8">
      <div className="flex items-center gap-2 border-b border-border/50 pb-4">
        <SlidersHorizontal className="size-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="search"
          className="flex items-center gap-2 text-sm font-medium text-foreground"
        >
          <Search className="h-4 w-4 text-muted-foreground" />
          Search Countries
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            id="search"
            type="text"
            value={localSearch}
            onInput={(e) => setLocalSearch(e.currentTarget.value)}
            placeholder="Search by name..."
            className="h-11 pl-10 transition-all focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label
            htmlFor="region"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Filter className="h-4 w-4 text-muted-foreground" />
            Region
          </Label>
          <Select value={region} onValueChange={updateRegion}>
            <SelectTrigger
              id="region"
              className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
            >
              {" "}
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
        <div className="space-y-2">
          <Label htmlFor="sort" className="text-sm font-medium text-foreground">
            Sort By
          </Label>
          <Select value={sort} onValueChange={updateSort}>
            <SelectTrigger
              id="sort"
              className="h-11 transition-all focus:ring-2 focus:ring-primary/20"
            >
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
      <div className="space-y-3 rounded-lg border border-border/30 bg-muted/20 p-4">
        <Label className="text-sm font-medium text-foreground">
          Population Range
        </Label>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <div className="space-y-2">
            <Label
              htmlFor="min-pop"
              className="text-xs font-medium text-muted-foreground"
            >
              Minimum Population
            </Label>
            <Input
              id="min-pop"
              type="number"
              placeholder="0"
              className="h-10 transition-all focus:ring-2 focus:ring-primary/20"
              value={minPopulation}
              min={0}
              step={1000}
              onInput={(e) => {
                const value = e.currentTarget.value || "0";
                changeMinPopulation(Number.parseInt(value, 10));
              }}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="max-pop" className="text-xs text-muted-foreground">
              Maximum
            </Label>
            <Input
              id="max-pop"
              type="number"
              placeholder="No limit"
              className="h-10 transition-all focus:ring-2 focus:ring-primary/20"
              value={maxPopulation ?? ""}
              min={0}
              step={1000}
              onInput={(e) =>
                changeMaxPopulation(
                  e.currentTarget.value
                    ? parseInt(e.currentTarget.value, 10)
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
