import Link from "next/link";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";
import BrokerCard from "@/components/BrokerCard";

const brokers = brokersData as Broker[];

export const metadata = {
  title: "Best F&O Brokers in India (2026) | SEBI Registered",
  description:
    "List of SEBI registered stock brokers in India that offer Futures & Options (F&O) trading. Compare brokers for derivatives trading.",
};

export default function FnoBrokersPage() {
  const fnoBrokers = brokers.filter((b) =>
    b.segments.some((s) => s.toLowerCase().includes("f&o") || s.toLowerCase().includes("futures"))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">F&O Brokers</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Best F&O Brokers in India (2026)
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Looking to trade Futures & Options? Here is a list of SEBI registered stock brokers 
          in India that offer F&O trading segments.
        </p>
      </div>

      {/* Stats */}
      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-12">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-purple-700 text-xl">{fnoBrokers.length}</span>{" "}
          brokers offering F&O trading
        </p>
      </div>

      {/* Broker List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {fnoBrokers.map((broker) => (
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
              What is F&O trading?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              F&O stands for Futures and Options. These are derivative instruments that allow traders 
              to speculate on the future price of stocks or indices without owning the underlying asset.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Do all stock brokers offer F&O trading?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              No. Only brokers who have obtained the necessary membership and permissions from the exchanges 
              (NSE/BSE) can offer Futures & Options trading. Always check the segments offered by the broker.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Is F&O suitable for beginners?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              F&O trading involves higher risk due to leverage. It is generally recommended for experienced traders 
              who understand the risks involved. Beginners should first gain experience in equity delivery trading.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}