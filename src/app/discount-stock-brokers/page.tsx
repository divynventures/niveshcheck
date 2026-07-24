import Link from "next/link";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";
import BrokerCard from "@/components/BrokerCard";

const brokers = brokersData as Broker[];

export const metadata = {
  title: "Best Discount Stock Brokers in India (2026)",
  description:
    "List of SEBI registered discount stock brokers in India. Compare low-cost brokers with flat or zero brokerage charges.",
};

export default function DiscountBrokersPage() {
  const discountBrokers = brokers.filter((b) => b.type === "Discount");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Discount Brokers</span>
      </nav>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
          Best Discount Stock Brokers in India (2026)
        </h1>

        <div className="prose prose-gray max-w-3xl text-gray-600 leading-relaxed space-y-4">
          <p>
            Discount stock brokers offer low brokerage charges — often a flat fee per order or zero brokerage on delivery trades. 
            They focus mainly on trade execution and technology rather than research or relationship managers.
          </p>
          <p>
            This page lists SEBI registered discount brokers in India. Always verify the latest registration status 
            on the official SEBI website before opening an account.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-12">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-green-700 text-xl">{discountBrokers.length}</span>{" "}
          SEBI registered discount brokers listed
        </p>
      </div>

      {/* Broker List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {discountBrokers.map((broker) => (
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
              What is a discount stock broker?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              A discount broker charges low brokerage (usually flat fee or zero on delivery) and focuses on providing 
              a good trading platform rather than research reports or personal advisory services.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Are discount brokers safe?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, provided they are SEBI registered. Safety depends on regulatory compliance, not on the brokerage model. 
              Always confirm the SEBI registration number on the official SEBI website.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Who should choose a discount broker?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Discount brokers are suitable for self-directed investors and active traders who do not need research 
              reports or a dedicated relationship manager and want to keep costs low.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Do discount brokers offer the same products as full-service brokers?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Most discount brokers offer equity, F&O, and other segments. The main difference is usually in research, 
              advisory, and personalised support rather than the products available.
            </p>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-14 pt-10 border-t border-gray-200">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Related Pages</h2>
        <div className="flex flex-wrap gap-3">
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