import Link from "next/link";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";
import BrokerCard from "@/components/BrokerCard";

const brokers = brokersData as Broker[];

export const metadata = {
  title: "Best F&O Brokers in India (2026)",
  description:
    "List of SEBI registered stock brokers in India that offer Futures & Options (F&O) trading. Compare brokers for derivatives.",
};

export default function FnoBrokersPage() {
  const fnoBrokers = brokers.filter((b) =>
    b.segments.some(
      (s) =>
        s.toLowerCase().includes("f&o") ||
        s.toLowerCase().includes("futures") ||
        s.toLowerCase().includes("options")
    )
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
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
          Best F&O Brokers in India (2026)
        </h1>

        <div className="prose prose-gray max-w-3xl text-gray-600 leading-relaxed space-y-4">
          <p>
            Futures & Options (F&O) trading involves derivatives and carries higher risk due to leverage. 
            This page lists SEBI registered stock brokers in India that offer F&O trading segments.
          </p>
          <p>
            Always verify the broker’s SEBI registration and ensure you understand the risks before trading in F&O.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-12">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-purple-700 text-xl">{fnoBrokers.length}</span>{" "}
          brokers offering F&O trading
        </p>
      </div>

      {/* Broker List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
              F&O stands for Futures and Options. These are derivative instruments that allow traders to speculate 
              on the future price of stocks or indices without necessarily owning the underlying asset.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Do all stock brokers offer F&O trading?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              No. Only brokers who have the necessary exchange memberships and permissions can offer Futures & Options trading. 
              Always check the segments offered by the broker.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Is F&O suitable for beginners?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              F&O trading involves higher risk due to leverage. It is generally recommended for experienced traders 
              who understand the risks. Beginners should first gain experience with equity delivery trading.
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-14 pt-10 border-t border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Related Pages</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/discount-stock-brokers"
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-400 transition"
          >
            Discount Brokers
          </Link>
          <Link
            href="/full-service-stock-brokers"
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-400 transition"
          >
            Full-Service Brokers
          </Link>
          <Link
            href="/best-stock-brokers-for-beginners"
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-400 transition"
          >
            Best for Beginners
          </Link>
          <Link
            href="/faq"
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-400 transition"
          >
            FAQ
          </Link>
        </div>
      </section>
    </div>
  );
}