import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import brokersData from "@/data/brokers.json";
import { absoluteUrl, createPageMetadata } from "@/lib/metadata";
import { getSebiBrokerSearchUrl } from "@/lib/sebi";
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

  return createPageMetadata({
    title: `${broker.tradeName} SEBI Registration Details`,
    description: `View NiveshCheck's recorded SEBI registration number for ${broker.tradeName} (${broker.sebiRegNo}), based in ${broker.city}, and verify the current record directly with SEBI.`,
    pathname: `/brokers/${broker.slug}`,
  });
}

export default async function BrokerDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const broker = brokers.find((b) => b.slug === slug);

  if (!broker) notFound();

  const sebiSearchUrl =
    broker.registrationSourceUrl ?? getSebiBrokerSearchUrl(broker.sebiRegNo);
  const registrationReviewedAt = broker.registrationReviewedAt
    ? new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(`${broker.registrationReviewedAt}T00:00:00Z`))
    : null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: broker.tradeName,
    legalName: broker.name,
    url: absoluteUrl(`/brokers/${broker.slug}`),
    sameAs: sebiSearchUrl,
    identifier: {
      "@type": "PropertyValue",
      name: "SEBI Registration Number",
      value: broker.sebiRegNo,
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Brokers", item: absoluteUrl("/brokers") },
      {
        "@type": "ListItem",
        position: 3,
        name: broker.tradeName,
        item: absoluteUrl(`/brokers/${broker.slug}`),
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <JsonLd data={breadcrumbSchema} />
      {broker.registrationReviewedAt && <JsonLd data={schema} />}

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
            {registrationReviewedAt && (
              <div>
                <dt className="text-gray-500 mb-1">Registration record reviewed</dt>
                <dd className="font-semibold text-gray-900">{registrationReviewedAt}</dd>
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

      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-lg text-gray-900 mb-3">
          Verify the current registration details
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          NiveshCheck records the SEBI registration number above from publicly available information. Registration status can change, so check the current record directly in SEBI&apos;s registered stock-broker directory before opening an account or making a decision.
        </p>
        <a
          href={sebiSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition"
        >
          Search {broker.sebiRegNo} on SEBI →
        </a>
      </section>

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
