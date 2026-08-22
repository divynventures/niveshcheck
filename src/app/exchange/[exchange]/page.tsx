import Link from "next/link";
import { notFound } from "next/navigation";
import brokersData from "@/data/brokers.json";
import BrokerCard from "@/components/BrokerCard";
import { JsonLd } from "@/components/JsonLd";
import { getExchangeDirectoryBySlug, exchangeDirectories } from "@/lib/exchanges";
import { absoluteUrl, createPageMetadata } from "@/lib/metadata";
import { Broker } from "@/lib/types";

const brokers = brokersData as Broker[];
const sourceReviewDate = "21 August 2026";

export const dynamicParams = false;

export function generateStaticParams() {
  return exchangeDirectories.map((exchange) => ({ exchange: exchange.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ exchange: string }>;
}) {
  const { exchange: exchangeSlug } = await params;
  const exchange = getExchangeDirectoryBySlug(exchangeSlug);

  if (!exchange) return {};

  return createPageMetadata({
    title: `Stock Brokers with Recorded ${exchange.code} Equity Memberships`,
    description: `Browse NiveshCheck records with a ${exchange.code} entry in SEBI's equity-segment source, then check the current official record directly with SEBI.`,
    pathname: `/exchange/${exchange.slug}`,
  });
}

export default async function ExchangeDirectoryPage({
  params,
}: {
  params: Promise<{ exchange: string }>;
}) {
  const { exchange: exchangeSlug } = await params;
  const exchange = getExchangeDirectoryBySlug(exchangeSlug);

  if (!exchange) notFound();

  const listedBrokers = brokers
    .filter((broker) => broker.exchanges.includes(exchange.code))
    .sort((a, b) => brokerName(a).localeCompare(brokerName(b), "en"));
  const pageUrl = absoluteUrl(`/exchange/${exchange.slug}`);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: `${exchange.code} records`, item: pageUrl },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <JsonLd data={breadcrumbSchema} />
      <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/brokers" className="hover:text-blue-600 transition">Broker records</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">{exchange.code}</span>
      </nav>

      <div className="max-w-3xl mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Broker records with a recorded {exchange.code} equity membership
        </h1>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            This page lists {listedBrokers.length} NiveshCheck records with a {exchange.code} entry in
            SEBI&apos;s equity-segment source, reviewed on {sourceReviewDate}.
          </p>
          <p>
            {exchange.name} is the exchange name represented by this source entry. It does not establish
            a broker&apos;s current status, services, eligibility, or membership in another market segment.
            Check the latest official record directly with SEBI before relying on a listing.
          </p>
        </div>
      </div>

      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 max-w-4xl">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Understand this recorded membership</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          NiveshCheck organises published SEBI information. It does not verify, certify, recommend, or
          rank brokers. Use the recorded registration number on each profile to check the current official
          result.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center text-sm font-medium">
          <Link href="/guides/how-to-read-stock-broker-sebi-record" className="text-blue-700 hover:underline">
            How to read a broker&apos;s SEBI record
          </Link>
          <Link href="/methodology" className="text-blue-700 hover:underline">
            Read source scope and limitations
          </Link>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listedBrokers.map((broker) => <BrokerCard key={broker.id} broker={broker} />)}
      </div>
    </div>
  );
}

function brokerName(broker: Broker) {
  return broker.tradeName || broker.name;
}
