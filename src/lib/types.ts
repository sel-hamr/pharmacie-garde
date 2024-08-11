export type PharmacyType = {
  link: string;
  label: string;
  gardeStatus: string;
  city: string;
  phone: string;
  address: string;
};

export type GuardType = {
  startDate: string;
  endDate: string;
  guard: string;
};

export type DetailPharmacyType = {
  address: string;
  location: string;
  city: string;
  country: string;
  phone: string;
  description: string;
  listGuard: GuardType[];
  name: string;
};
