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
    "groww-main",
    "zerodha-main",
    "angel-one-main",
    "upstox-main",
    "dhan-main",
    "5paisa-main",
  ];

  const beginnerBrokers = beginnerFriendlyIds
    .map((id) => brokers.find((b) => b.id === id))
    .filter((b): b is Broker => b !== undefined);

  // Remove duplicates by id
  const uniqueBrokers = Array.from(
    new Map(beginnerBrokers.map((b) => [b.id, b])).values()
  );

  const otherDiscount = brokers.filter(
    (b) =>
      b.type === "Discount" &&
      !uniqueBrokers.some((ub) => ub.id === b.id)
  );

  const allBeginnerBrokers = [...uniqueBrokers, ...otherDiscount];

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
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
          Best Stock Brokers for Beginners in India (2026)
        </h1>

        <div className="prose prose-gray max-w-3xl text-gray-600 leading-relaxed space-y-4">
          <p>
            New to the stock market? The brokers listed on this page are generally considered beginner-friendly 
            because of their simple apps, low charges, and relatively easy account opening process.
          </p>
          <p>
            Always choose a SEBI registered broker and verify the registration number on the official SEBI website 
            before opening a demat account.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-12">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-emerald-700 text-xl">{allBeginnerBrokers.length}</span>{" "}
          beginner-friendly brokers listed
        </p>
      </div>

      {/* Broker List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
              Groww and Zerodha are among the most popular choices for beginners due to their simple interfaces 
              and educational content. The best option depends on your personal preference and needs.
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

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Do I need a lot of money to start with a discount broker?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              No. Most discount brokers have low or zero account opening charges and allow you to start with small amounts. 
              Check the specific broker’s requirements before opening an account.
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
            href="/top-stock-brokers-by-clients"
            className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm hover:border-blue-400 transition"
          >
            Top by Clients
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