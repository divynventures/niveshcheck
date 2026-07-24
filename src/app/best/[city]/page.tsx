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
    title: `Best Stock Brokers in ${cityName} (2026)`,
    description: `Find the best SEBI registered stock brokers in ${cityName}. Compare discount and full-service brokers based in ${cityName} before opening a demat account.`,
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

  // Prioritise brokers that have active client data
  const sortedBrokers = [...cityBrokers].sort((a, b) => {
    if (a.activeClients && !b.activeClients) return -1;
    if (!a.activeClients && b.activeClients) return 1;
    return 0;
  });

  const topBrokers = sortedBrokers.slice(0, 3);
  const remainingBrokers = sortedBrokers.slice(3);

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
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
          Best Stock Brokers in {cityName} (2026)
        </h1>

        <div className="prose prose-gray max-w-3xl text-gray-600 leading-relaxed space-y-4">
          <p>
            Looking for the best SEBI registered stock brokers in {cityName}? 
            This page lists verified brokers that have their registered office or major presence in {cityName}.
          </p>
          <p>
            We have organised the brokers so you can quickly compare discount and full-service options. 
            Always verify the latest SEBI registration status on the official SEBI website before opening a demat account.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-12">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-blue-700 text-xl">{cityBrokers.length}</span>{" "}
          SEBI registered brokers found in {cityName}
        </p>
      </div>

      {/* Top Brokers */}
      {topBrokers.length > 0 && (
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Top Brokers in {cityName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topBrokers.map((broker) => (
              <BrokerCard key={broker.id} broker={broker} />
            ))}
          </div>
        </section>
      )}

      {/* All Brokers */}
      {remainingBrokers.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            All SEBI Registered Brokers in {cityName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingBrokers.map((broker) => (
              <BrokerCard key={broker.id} broker={broker} />
            ))}
          </div>
        </section>
      )}

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
              The actual number can change as SEBI updates its records.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Which is the best stock broker in {cityName}?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              There is no single “best” broker for everyone. The right choice depends on whether you prefer a discount broker (low charges) 
              or a full-service broker (research and advisory). Compare platform quality, brokerage, and customer support before deciding.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Are all brokers listed here based in {cityName}?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The brokers shown have their registered address or primary presence recorded as {cityName} in publicly available data. 
              Many brokers operate nationwide even if their registered office is in another city.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              How can I verify a broker’s SEBI registration?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Note the SEBI registration number shown on this site, then confirm the latest status on the official SEBI website (www.sebi.gov.in). 
              NiveshCheck organises public data but does not independently verify brokers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Should I choose a local broker in {cityName}?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A local presence can sometimes help with support, but most modern brokers offer fully online account opening and service. 
              Focus more on charges, platform, and reliability than just the city of registration.
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-14 pt-10 border-t border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Related Pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/discount-stock-brokers"
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-400 transition"
          >
            Discount Brokers
          </Link>
          <Link
            href="/full-service-stock-brokers"
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-400 transition"
          >
            Full-Service Brokers
          </Link>
          <Link
            href="/best-stock-brokers-for-beginners"
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-400 transition"
          >
            Best for Beginners
          </Link>
          <Link
            href="/faq"
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-400 transition"
          >
            FAQ
          </Link>
        </div>
      </section>

      {/* Back link */}
      <div className="mt-12">
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