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
    title: `Best Stock Brokers in ${cityName} (2026) | SEBI Registered`,
    description: `Find the best SEBI registered stock brokers in ${cityName}. Compare discount and full-service brokers available in ${cityName}.`,
  };
}

export default async function BestBrokersInCityPage({
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

  // Put brokers with active client numbers first
  const sortedBrokers = [...cityBrokers].sort((a, b) => {
    if (a.activeClients && !b.activeClients) return -1;
    if (!a.activeClients && b.activeClients) return 1;
    return 0;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/city/${city}`} className="hover:text-blue-600 transition">
          {cityName}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Best Brokers</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Best Stock Brokers in {cityName} (2026)
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Looking for the best SEBI registered stock brokers in {cityName}? 
          Here is a curated list of verified brokers based in {cityName}. 
          Compare discount and full-service options before opening a demat account.
        </p>
      </div>

      {/* Stats */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-12">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-blue-700 text-xl">{cityBrokers.length}</span>{" "}
          SEBI registered brokers found in {cityName}
        </p>
      </div>

      {/* Broker List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {sortedBrokers.map((broker) => (
          <BrokerCard key={broker.id} broker={broker} />
        ))}
      </div>

      {/* FAQ Section */}
      <section className="border-t border-gray-200 pt-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              How many SEBI registered stock brokers are there in {cityName}?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              There are currently {cityBrokers.length} SEBI registered stock brokers listed in {cityName} on NiveshCheck.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Which is the best stock broker in {cityName}?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The best broker depends on your needs (discount vs full-service, trading frequency, research support, etc.). 
              Always compare brokerage charges, platform quality, and customer service before opening an account.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              How can I verify if a broker in {cityName} is SEBI registered?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You can check the SEBI registration number on this website and then confirm the latest status on the official SEBI website (www.sebi.gov.in).
            </p>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="mt-14">
        <Link
          href={`/city/${city}`}
          className="text-blue-600 hover:underline font-medium"
        >
          ← View all brokers in {cityName}
        </Link>
      </div>
    </div>
  );
}