import { notFound } from "next/navigation";
import Link from "next/link";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";
import BrokerCard from "@/components/BrokerCard";

const brokers = brokersData as Broker[];

export async function generateStaticParams() {
  const cities = Array.from(new Set(brokers.map((b) => b.city)));
  return cities.map((city) => ({
    city: city.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityName = city
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return {
    title: `SEBI Registered Stock Brokers in ${cityName}`,
    description: `List of SEBI registered stock brokers and demat account providers in ${cityName}. Compare brokers available in ${cityName}.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityName = city
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const cityBrokers = brokers.filter(
    (b) => b.city.toLowerCase().replace(/\s+/g, "-") === city
  );

  if (cityBrokers.length === 0) notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{cityName}</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Stock Brokers in {cityName}
        </h1>
        <p className="text-gray-600">
          {cityBrokers.length} SEBI registered brokers found in {cityName}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cityBrokers.map((broker) => (
          <BrokerCard key={broker.id} broker={broker} />
        ))}
      </div>
    </div>
  );
}