import Link from "next/link";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";
import BrokerCard from "@/components/BrokerCard";

const brokers = brokersData as Broker[];

export const metadata = {
  title: "Best Stock Brokers for Beginners in India (2026)",
  description:
    "Best SEBI registered stock brokers for beginners in India. Simple platforms, low charges and easy account opening.",
};

export default function BestBrokersForBeginnersPage() {
  // Prioritise popular beginner-friendly brokers
  const beginnerFriendlyIds = [
    "groww",
    "zerodha",
    "angel-one",
    "upstox",
    "dhan",
    "5paisa",
    "paytm-money",
    "indmoney",
    "sahi",
  ];

  const beginnerBrokers = beginnerFriendlyIds
    .map((id) => brokers.find((b) => b.id === id))
    .filter((b): b is Broker => b !== undefined);

  // Also include other discount brokers not already in the list
  const otherDiscount = brokers.filter(
    (b) =>
      b.type === "Discount" &&
      !beginnerFriendlyIds.includes(b.id)
  );

  const allBeginnerBrokers = [...beginnerBrokers, ...otherDiscount];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Best for Beginners</span>
      </nav>

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Best Stock Brokers for Beginners in India (2026)
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          New to the stock market? These SEBI registered brokers offer simple apps, 
          low brokerage, and easy account opening — ideal for first-time investors.
        </p>
      </div>

      {/* Stats */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-12">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-emerald-700 text-xl">{allBeginnerBrokers.length}</span>{" "}
          beginner-friendly brokers listed
        </p>
      </div>

      {/* Broker List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {allBeginnerBrokers.map((broker) => (
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
              Which is the best stock broker for beginners in India?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Groww and Zerodha are among the most popular choices for beginners because of their simple apps, 
              educational content, and low charges. The best choice depends on your preference.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              What should beginners look for in a stock broker?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Beginners should look for easy account opening, a user-friendly app, low brokerage, 
              good customer support, and educational resources.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Are discount brokers good for beginners?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes. Most discount brokers are well suited for beginners because of their low costs and modern platforms. 
              Always ensure the broker is SEBI registered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}