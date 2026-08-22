import brokersData from "@/data/brokers.json";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, createPageMetadata } from "@/lib/metadata";
import { Broker } from "@/lib/types";
import AnalyticsLink from "@/components/AnalyticsLink";
import BrokerSearch from "@/components/BrokerSearch";

const brokers = brokersData as Broker[];

export const metadata = createPageMetadata({
  title: "SEBI Registered Stock Brokers List in India",
  description:
    "Search NiveshCheck's recorded list of SEBI-registered stock brokers in India by name, city, or registration number, then check the current official record with SEBI.",
  pathname: "/brokers",
});

export default function BrokersPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Brokers", item: absoluteUrl("/brokers") },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <JsonLd data={breadcrumbSchema} />
      <div className="mb-8 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          SEBI Registered Stock Brokers List in India
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Search {brokers.length} recorded stock-broker entries by name, city, or SEBI registration number. This is an independent reference directory, not a verification or recommendation service.
        </p>
      </div>

      <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10 max-w-4xl">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Check the current official record before deciding</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          NiveshCheck&apos;s entries are based on published SEBI equity-segment material dated 21 August 2026. Registration details can change. Compare the broker&apos;s name and registration number with the current official SEBI directory before opening an account or relying on a listing.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          The directory records names, registration numbers, source addresses, and recorded equity
          exchange memberships. It does not assess current status, broker quality, prices,
          features, suitability, or activity. <Link href="/methodology" className="text-blue-700 hover:underline font-medium">Read the source scope and limitations</Link>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <AnalyticsLink
            href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognised=yes"
            target="_blank"
            rel="noopener noreferrer"
            eventName="sebi_lookup_click"
            eventParameters={{ entry_point: "broker_directory" }}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition text-center"
          >
            Open SEBI&apos;s official directory ↗
          </AnalyticsLink>
          <Link href="/guides/verify-sebi-registered-stock-broker" className="text-blue-700 hover:underline font-medium text-sm text-center">
            How to check a broker
          </Link>
        </div>
      </section>

      <BrokerSearch brokers={brokers} />
    </div>
  );
}
