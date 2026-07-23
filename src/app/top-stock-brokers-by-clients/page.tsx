import Link from "next/link";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";
import BrokerCard from "@/components/BrokerCard";

const brokers = brokersData as Broker[];

export const metadata = {
  title: "Top Stock Brokers in India by Active Clients (2026)",
  description:
    "List of top SEBI registered stock brokers in India ranked by number of active clients. Compare the largest brokers.",
};

export default function TopBrokersByClientsPage() {
  // Put brokers that have activeClients data first
  const sortedBrokers = [...brokers].sort((a, b) => {
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
        <span className="text-gray-800">Top Brokers by Clients</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Top Stock Brokers in India by Active Clients (2026)
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Here is a list of SEBI registered stock brokers in India ranked by the number of active clients. 
          Larger client base often indicates higher popularity and platform reliability.
        </p>
      </div>

      {/* Stats */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 mb-12">
        <p className="text-gray-700 text-lg">
          Showing <span className="font-bold text-indigo-700 text-xl">{brokers.length}</span> SEBI registered brokers
        </p>
      </div>

      {/* Broker List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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
              Which stock broker has the most active clients in India?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              As of recent data, Groww and Zerodha are among the brokers with the largest number of active clients in India.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Does a higher number of active clients mean a better broker?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Not necessarily. A large client base shows popularity, but you should also compare brokerage charges, platform quality, customer support, and your personal trading needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              How is active client data measured?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Active clients typically refer to unique clients who have traded at least once in a defined period (usually reported by NSE). Always cross-check the latest figures from official sources.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}