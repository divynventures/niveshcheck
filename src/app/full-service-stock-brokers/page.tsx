import Link from "next/link";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";
import BrokerCard from "@/components/BrokerCard";

const brokers = brokersData as Broker[];

export const metadata = {
  title: "Best Full-Service Stock Brokers in India (2026) | SEBI Registered",
  description:
    "List of top SEBI registered full-service stock brokers in India. Compare brokers that offer research, advisory and relationship managers.",
};

export default function FullServiceBrokersPage() {
  const fullServiceBrokers = brokers.filter((b) => b.type === "Full-service");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Full-Service Brokers</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Best Full-Service Stock Brokers in India (2026)
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Full-service brokers provide research reports, investment advice, and relationship managers 
          in addition to trading services. Here is a curated list of SEBI registered full-service stock brokers in India.
        </p>
      </div>

      {/* Stats */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-12">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-blue-700 text-xl">{fullServiceBrokers.length}</span>{" "}
          SEBI registered full-service brokers listed
        </p>
      </div>

      {/* Broker List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {fullServiceBrokers.map((broker) => (
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
              What is a full-service stock broker?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A full-service broker offers trading services along with research reports, 
              investment recommendations, and often a dedicated relationship manager.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Are full-service brokers more expensive?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, full-service brokers generally charge higher brokerage compared to discount brokers 
              because they provide additional services like research and advisory.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Who should choose a full-service broker?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Full-service brokers are suitable for investors who prefer guided advice, 
              research support, and personalised service rather than managing everything themselves.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}