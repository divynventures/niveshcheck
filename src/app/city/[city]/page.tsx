import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import brokersData from "@/data/brokers.json";
import { absoluteUrl, createPageMetadata } from "@/lib/metadata";
import { Broker } from "@/lib/types";
import BrokerCard from "@/components/BrokerCard";

const brokers = brokersData as Broker[];
const minimumIndexableCityListings = 5;

function getCityBrokers(city: string) {
  return brokers.filter(
    (broker) => broker.city.toLowerCase().replace(/\s+/g, "-") === city
  );
}

export async function generateStaticParams() {
  const cities = Array.from(new Set(brokers.map((b) => b.city))).filter(
    (city) => getCityBrokers(city.toLowerCase().replace(/\s+/g, "-")).length >= minimumIndexableCityListings
  );
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
  const cityBrokers = getCityBrokers(city);
  const cityName = cityBrokers[0]?.city ?? city
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  const metadata = createPageMetadata({
    title: `Stock Brokers in ${cityName}`,
    description: `Browse NiveshCheck records with an address in ${cityName}. Each profile shows the recorded SEBI registration number and a link to check the current official record.`,
    pathname: `/city/${city}`,
  });

  return cityBrokers.length >= minimumIndexableCityListings
    ? metadata
    : { ...metadata, robots: { index: false, follow: true } };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityBrokers = getCityBrokers(city);
  const cityName = cityBrokers[0]?.city ?? city
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  if (cityBrokers.length === 0) notFound();

  const sortedBrokers = [...cityBrokers].sort((a, b) =>
    a.tradeName.localeCompare(b.tradeName, "en")
  );
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      {
        "@type": "ListItem",
        position: 2,
        name: `Stock Brokers in ${cityName}`,
        item: absoluteUrl(`/city/${city}`),
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <JsonLd data={breadcrumbSchema} />
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
            This page lists NiveshCheck records whose recorded address is in {cityName}.
            Open any profile to see its recorded SEBI registration number, source link, and review date.
          </p>
          <p>
            NiveshCheck is an independent directory and does not determine a broker&apos;s current
            status, suitability, or ranking. Confirm the latest record directly with SEBI.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-12">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-blue-700 text-xl">{cityBrokers.length}</span>{" "}
          source-backed broker records in {cityName}
        </p>
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
              How many broker records does NiveshCheck list for {cityName}?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              NiveshCheck currently lists {cityBrokers.length} source-backed broker records with
              a recorded address in {cityName}. This is a directory count, not a count of all
              brokers operating in the city.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              What does the city shown on this page mean?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              It is the city recorded from the source address used for the listing. It does not
              establish a broker&apos;s service area, branch network, or current operating location.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              How do I verify a broker’s registration?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Note the registration number on the broker&apos;s profile and use its official SEBI link
              to check the current record. NiveshCheck organises public information and does not
              independently certify or recommend brokers.
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-14 pt-10 border-t border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Related Pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/brokers" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-400 transition">
            All Broker Records
          </Link>
          <Link href="/methodology" className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-400 transition">
            Methodology
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
