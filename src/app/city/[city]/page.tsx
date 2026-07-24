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
    title: `Stock Brokers in ${cityName} | SEBI Registered`,
    description: `List of SEBI registered stock brokers in ${cityName}. Find discount and full-service brokers based in ${cityName}.`,
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
        <span className="text-gray-800">{cityName}</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
          Stock Brokers in {cityName}
        </h1>

        <div className="prose prose-gray max-w-3xl text-gray-600 leading-relaxed space-y-4">
          <p>
            This page lists SEBI registered stock brokers that have their registered office or primary presence in {cityName}. 
            You can compare both discount and full-service brokers.
          </p>
          <p>
            Always verify the latest SEBI registration status on the official SEBI website before opening a demat account.
          </p>
        </div>
      </div>

      {/* Stats + CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-12">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-blue-700 text-xl">{cityBrokers.length}</span>{" "}
          brokers found in {cityName}
        </p>
        <Link
          href={`/best/${city}`}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
        >
          View Best Brokers in {cityName} →
        </Link>
      </div>

      {/* Broker List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {sortedBrokers.map((broker) => (
          <BrokerCard key={broker.id} broker={broker} />
        ))}
      </div>

      {/* FAQ */}
      <section className="border-t border-gray-200 pt-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              How many SEBI registered brokers are there in {cityName}?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              There are currently {cityBrokers.length} SEBI registered stock brokers listed in {cityName} on NiveshCheck.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Can I open an account with a broker based in another city?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes. Most modern brokers allow fully online account opening from anywhere in India. 
              The city of registration is less important than the broker’s platform, charges, and service quality.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              How do I verify a broker’s registration?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Note the SEBI registration number and confirm the latest status on the official SEBI website (www.sebi.gov.in). 
              NiveshCheck organises public data but does not independently verify brokers.
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-14 pt-10 border-t border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Related Pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href={`/best/${city}`}
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-400 transition"
          >
            Best Brokers in {cityName}
          </Link>
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
            href="/faq"
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-400 transition"
          >
            FAQ
          </Link>
        </div>
      </section>
    </div>
  );
}