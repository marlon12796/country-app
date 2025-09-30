import { getCountries } from "@/lib/api/countries";
import { CountryCard } from "./CountryCard";

export const CountryList = async () => {
  const countries = await getCountries();
  console.log(countries);
  return (
    <>
      {countries.map((country) => (
        <CountryCard country={country} key={country.cca3} />
      ))}
    </>
  );
};
