import brokersData from "@/data/brokers.json";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, createPageMetadata } from "@/lib/metadata";
import { Broker } from "@/lib/types";
import BrokerSearch from "@/components/BrokerSearch";

const brokers = brokersData as Broker[];

export const metadata = createPageMetadata({
  title: "All Stock Brokers in India",
  description:
    "Search NiveshCheck's directory of stock brokers in India by name, city, recorded SEBI registration number, or type.",
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
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          All SEBI Registered Stock Brokers
        </h1>
        <p className="text-gray-600">
          Search and explore verified SEBI registered brokers
        </p>
      </div>

      <BrokerSearch brokers={brokers} />
    </div>
  );
}
