import { notFound } from "next/navigation";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import brokersData from "@/data/brokers.json";
import { formatBrokerName } from "@/lib/format-broker-name";
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

  const brokerName = formatBrokerName(broker.tradeName);

  return createPageMetadata({
    title: `${brokerName} SEBI Registration Details`,
    description: `View NiveshCheck's recorded SEBI registration number for ${brokerName} (${broker.sebiRegNo}), based in ${broker.city}, and verify the current record directly with SEBI.`,
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

  const brokerName = formatBrokerName(broker.tradeName);
  const legalName = formatBrokerName(broker.name);
  const sebiSearchUrl = broker.registrationSourceUrl ?? getSebiBrokerSearchUrl(broker.sebiRegNo);
  const registrationReviewedAt = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${broker.registrationReviewedAt}T00:00:00Z`));
  const faqItems = [
    {
      question: `What is ${brokerName}'s recorded SEBI registration number?`,
      answer: `${brokerName}'s recorded SEBI registration number on NiveshCheck is ${broker.sebiRegNo}. Check the current record directly with SEBI before relying on it.`,
    },
    {
      question: `How can I check ${brokerName}'s current SEBI record?`,
      answer: `Use the official SEBI registered stock-broker directory and search for ${broker.sebiRegNo}. The official record may change after NiveshCheck's review date.`,
    },
    {
      question: `Does NiveshCheck recommend ${brokerName}?`,
      answer: "No. NiveshCheck is an independent directory and does not recommend, endorse, certify, or assess the suitability of brokers.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: brokerName,
    legalName,
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
        name: brokerName,
        item: absoluteUrl(`/brokers/${broker.slug}`),
      },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />

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
        <span className="text-gray-800">{brokerName}</span>
      </nav>

      {/* Main Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {brokerName}
            </h1>
            <p className="text-gray-500">{legalName}</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed text-lg">
          NiveshCheck records this entry against SEBI registration number{" "}
          <span className="font-semibold text-gray-900">{broker.sebiRegNo}</span>. The
          record was reviewed on {registrationReviewedAt}; confirm the current details
          directly with SEBI.
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
            <div>
              <dt className="text-gray-500 mb-1">Record reviewed</dt>
              <dd className="font-semibold text-gray-900">{registrationReviewedAt}</dd>
            </div>
            <div>
              <dt className="text-gray-500 mb-1">Official source</dt>
              <dd>
                <a
                  href={sebiSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  SEBI registered stock-broker directory
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="font-bold text-lg text-gray-900 mb-5">Recorded address</h2>
          <dl className="space-y-4 text-sm">
            <div>
              <dt className="text-gray-500 mb-1">Address in the source record</dt>
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

      {broker.website && (
        <section className="bg-white border border-gray-200 rounded-2xl p-6 mb-10">
          <h2 className="font-bold text-lg text-gray-900 mb-3">Broker website</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            This external link is provided for convenience. NiveshCheck does not receive
            a commission from it and does not recommend or endorse this broker.
          </p>
          <a
            href={broker.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-600 font-medium hover:underline"
          >
            Open broker website →
          </a>
        </section>
      )}

      {/* Equity exchange memberships */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-10">
        <h2 className="font-bold text-lg text-gray-900 mb-5">
          Recorded equity exchange memberships
        </h2>
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
        <p className="mt-4 text-sm text-gray-600 leading-relaxed">
          These memberships are recorded from NiveshCheck&apos;s documented SEBI equity-source
          material. They do not establish membership in other market segments.
        </p>
      </div>

      <section className="border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently asked questions</h2>
        <div className="space-y-7">
          {faqItems.map((item) => (
            <div key={item.question}>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.question}</h3>
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-600">
          See a factual error? <Link href="/contact" className="text-blue-600 hover:underline">Suggest a correction</Link> or read our{" "}
          <Link href="/methodology" className="text-blue-600 hover:underline">methodology</Link>.
        </p>
      </section>
    </div>
  );
}
