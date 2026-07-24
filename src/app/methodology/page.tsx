import Link from "next/link";

export const metadata = {
  title: "Data Methodology | NiveshCheck",
  description:
    "How NiveshCheck sources and organises information about SEBI registered stock brokers in India.",
};

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Methodology</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Data Methodology
      </h1>

      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>
          This page explains how information on NiveshCheck is collected and presented.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
          Source of data
        </h2>
        <p>
          The primary source of broker registration information is publicly available data 
          published by the Securities and Exchange Board of India (SEBI) and related exchange records.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
          What we include
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Broker name and trade name</li>
          <li>SEBI registration number</li>
          <li>Registered city / address (where available)</li>
          <li>Segments and exchanges</li>
          <li>Website (where publicly available)</li>
          <li>Broker type (Discount or Full-service) based on publicly known positioning</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
          Important limitations
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>We do not independently audit or verify brokers beyond publicly available information</li>
          <li>Registration status can change. Always confirm on the official SEBI website</li>
          <li>Active client numbers are approximate and based on publicly reported figures at the time of collection</li>
          <li>We aim for accuracy but cannot guarantee that every record is complete or up-to-date at all times</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
          Updates
        </h2>
        <p>
          We periodically review and update the directory. However, the official SEBI website 
          remains the authoritative source for the latest registration status of any broker.
        </p>

        <p className="pt-4">
          If you notice any incorrect or outdated information, please contact us so we can review and correct it.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t">
        <Link href="/" className="text-blue-600 hover:underline font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}