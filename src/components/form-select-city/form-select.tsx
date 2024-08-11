"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { LoadingLink } from "../ui/loading-link";

type City = {
  value: string;
  label: string;
};

type FormSelectCityProps = {
  cities: City[];
};

export const FormSelect = ({ cities }: FormSelectCityProps) => {
  const [value, setValue] = useState<string | undefined>();
  const handleSelectValue = (e: string) => {
    setValue(e);
  };
  return (
    <form>
      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Select onValueChange={handleSelectValue}>
            <SelectTrigger>
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {cities?.map((city, key) => (
                  <SelectItem value={city.value} key={key}>
                    {city.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <LoadingLink
        href={value || ""}
        className={cn("w-full", {
          "cursor-not-allowed": !value,
          "pointer-events-none": !value,
        })}
      >
        <Button className="w-full mt-4" disabled={!value}>
          Search{" "}
        </Button>
      </LoadingLink>
    </form>
  );
};
