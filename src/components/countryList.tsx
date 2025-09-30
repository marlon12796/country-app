"use client";
import {
  SortOptions,
  useCountryFiltersStore,
} from "@/lib/store/useCountryFilterStore";
import { CountryCard } from "./CountryCard";
import type { Country } from "@/types/country";
import { useMemo } from "react";

export const CountryList = ({ countries }: { countries: Country[] }) => {
  const { search, region, sort, minPopulation, maxPopulation } =
    useCountryFiltersStore();
  const filteredAndSortedCountries = useMemo(() => {
    return countries
      .filter((country) => {
        const matchesSearch = country.name.common
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchesRegion = region === "All" || region === country.region;
        const matchesMinPopulation = minPopulation
          ? country.population >= minPopulation
          : true;
        const matchesMaxPopulation = maxPopulation
          ? country.population <= maxPopulation
          : true;
        return (
          matchesSearch &&
          matchesRegion &&
          matchesMinPopulation &&
          matchesMaxPopulation
        );
      })
      .sort((a, b) => {
        if (SortOptions.PopulationAsc === sort)
          return a.population - b.population;
        if (SortOptions.PopulationDesc === sort)
          return b.population - a.population;
        if (SortOptions.NameDesc === sort)
          return b.name.common.localeCompare(a.name.common);

        if (SortOptions.NameAsc === sort)
          return a.name.common.localeCompare(b.name.common);
        return 0;
      });
  }, [countries, search, region, minPopulation, maxPopulation, sort]);
  return (
    <>
      <p className="mb-6 text-sm text-muted-foreground ">
        Showing {filteredAndSortedCountries.length} of {countries.length}{" "}
        countries
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {" "}
        {filteredAndSortedCountries.map((country) => (
          <CountryCard country={country} key={country.cca3} />
        ))}
      </div>
    </>
  );
};
