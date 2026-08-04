import { notFound, permanentRedirect } from "next/navigation";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";

const brokers = brokersData as Broker[];

export async function generateStaticParams() {
  const cities = Array.from(new Set(brokers.map((broker) => broker.city)));

  return cities.map((city) => ({
    city: city.toLowerCase().replace(/\s+/g, "-"),
  }));
}

/** Redirects the retired subjective city-page format to the neutral city directory. */
export default async function LegacyBestBrokersInCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityExists = brokers.some(
    (broker) => broker.city.toLowerCase().replace(/\s+/g, "-") === city
  );

  if (!cityExists) notFound();

  permanentRedirect(`/city/${city}`);
}
