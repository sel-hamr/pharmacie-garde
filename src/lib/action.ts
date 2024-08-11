"use server";

import { headers } from "next/headers";
import { DetailPharmacyType, PharmacyType } from "./types";

export const getListCity = async () => {
  const origin = headers().get("x-origin");
  const response = await fetch(`${origin}/api/scrape-list-city`);
  const data = (await response.json()) as { value: string; label: string }[];
  try {
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getListPharmacies = async (pharmacy: string) => {
  const origin = headers().get("x-origin");
  const response = await fetch(
    `${origin}/api/scrape-list-pharmacies?pharmacy=${pharmacy}`
  );
  const data = (await response.json()) as PharmacyType[];
  try {
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getDetailPharmacy = async (pharmacy: string) => {
  const origin = headers().get("x-origin");
  const response = await fetch(
    `${origin}/api/scrape-detail-pharmacy?pharmacy=${pharmacy}`
  );
  const data = (await response.json()) as DetailPharmacyType;
  try {
    return data;
  } catch (error) {
    console.error(error);
  }
};
