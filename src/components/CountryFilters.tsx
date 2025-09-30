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

export const CountryFilters = () => {
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
          <Select>
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
          <Select>
            <SelectTrigger id="sort" className="mt-2">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name-asc">Name (A-Z)</SelectItem>
              <SelectItem value="name-desc">Name (Z-A)</SelectItem>
              <SelectItem value="population-asc">
                Population (Low to High)
              </SelectItem>
              <SelectItem value="population-desc">
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};
