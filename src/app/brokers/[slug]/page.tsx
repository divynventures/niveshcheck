import { notFound } from "next/navigation";
import Link from "next/link";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";

const brokers = brokersData as Broker[];

export async function generateStaticParams() {
  return brokers.map((broker) => ({
    slug: broker.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const broker = brokers.find((b) => b.slug === slug);

  if (!broker) return { title: "Broker Not Found" };

  return {
    title: `${broker.tradeName} - SEBI Registered Stock Broker`,
    description: `${broker.tradeName} (${broker.sebiRegNo}) is a SEBI registered stock broker based in ${broker.city}. ${broker.description}`,
  };
}

export default async function BrokerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const broker = brokers.find((b) => b.slug === slug);

  if (!broker) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: broker.tradeName,
    legalName: broker.name,
    description: broker.description,
    url: broker.website,
    address: {
      "@type": "PostalAddress",
      streetAddress: broker.address,
      addressLocality: broker.city,
      addressRegion: broker.state,
      addressCountry: "IN",
    },
    identifier: {
      "@type": "PropertyValue",
      name: "SEBI Registration Number",
      value: broker.sebiRegNo,
    },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link href="/brokers" className="hover:text-blue-600 transition">
          Brokers
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{broker.tradeName}</span>
      </nav>

      {/* Main Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {broker.tradeName}
            </h1>
            <p className="text-gray-500">{broker.name}</p>
          </div>
          <span
            className={`inline-block text-sm font-medium px-3 py-1.5 rounded-full ${
              broker.type === "Discount"
                ? "bg-green-50 text-green-700"
                : "bg-blue-50 text-blue-700"
            }`}
          >
            {broker.type} Broker
          </span>
        </div>

        <p className="text-gray-700 leading-relaxed text-lg">
          {broker.description}
        </p>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="font-bold text-lg text-gray-900 mb-5">
            Registration Details
          </h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-gray-500 mb-1">SEBI Registration No.</dt>
              <dd className="font-semibold text-lg text-gray-900">
                {broker.sebiRegNo}
              </dd>
            </div>
            {broker.activeClients && (
              <div>
                <dt className="text-gray-500 mb-1">Active Clients</dt>
                <dd className="font-semibold text-green-600">
                  {broker.activeClients}
                </dd>
              </div>
            )}
            <div>
              <dt className="text-gray-500 mb-1">Type</dt>
              <dd className="font-semibold text-gray-900">{broker.type}</dd>
            </div>
          </dl>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="font-bold text-lg text-gray-900 mb-5">Location</h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-gray-500 mb-1">Address</dt>
              <dd className="font-medium text-gray-900 leading-relaxed">
                {broker.address}
              </dd>
            </div>
            <div>
              <dt className="text-gray-500 mb-1">City</dt>
              <dd className="font-semibold">
                <Link
                  href={`/city/${broker.city
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="text-blue-600 hover:underline"
                >
                  {broker.city}, {broker.state}
                </Link>
              </dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Segments */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-lg text-gray-900 mb-5">
          Trading Segments & Exchanges
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {broker.segments.map((seg) => (
            <span
              key={seg}
              className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {seg}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {broker.exchanges.map((ex) => (
            <span
              key={ex}
              className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
            >
              {ex}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      {broker.website && (
        <div className="text-center">
          <a
            href={broker.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-medium transition shadow-sm text-lg"
          >
            Visit Official Website →
          </a>
        </div>
      )}
    </div>
  );
}