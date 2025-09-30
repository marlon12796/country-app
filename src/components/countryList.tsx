"use client";
import { CountryCard } from "./CountryCard";
import type { Country } from "@/types/country";

export const CountryList = ({ countries }: { countries: Country[] }) => {
  return (
    <>
      {countries.map((country) => (
        <CountryCard country={country} key={country.cca3} />
      ))}
    </>
  );
};
