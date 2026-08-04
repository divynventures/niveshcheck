export interface Broker {
  id: string;
  name: string;
  tradeName: string;
  sebiRegNo: string;
  registrationSourceUrl?: string;
  registrationReviewedAt?: string;
  slug: string;
  address: string;
  city: string;
  state: string;
  phone?: string;
  email?: string;
  website?: string;
  segments: string[];
  exchanges: string[];
  type: "Discount" | "Full-service" | "Bank";
  description: string;
}
