import Link from "next/link";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";
import BrokerCard from "@/components/BrokerCard";

const brokers = brokersData as Broker[];

export const metadata = {
  title: "Best Discount Stock Brokers in India (2026) | SEBI Registered",
  description:
    "List of top SEBI registered discount stock brokers in India. Compare low-cost brokers with zero or flat brokerage charges.",
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
      <div className="mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          Best Discount Stock Brokers in India (2026)
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          Discount brokers offer low brokerage charges (often flat ₹20 or zero on delivery). 
          Here is a curated list of SEBI registered discount stock brokers in India.
        </p>
      </div>

      {/* Stats */}
      <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-12">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-green-700 text-xl">{discountBrokers.length}</span>{" "}
          SEBI registered discount brokers listed
        </p>
      </div>

      {/* Broker List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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
              A discount broker offers low brokerage charges (usually a flat fee or zero on delivery trades) 
              and focuses mainly on trade execution rather than research or relationship management.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Are discount brokers safe?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes, as long as they are SEBI registered. Always verify the SEBI registration number 
              on the official SEBI website before opening an account.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Who should choose a discount broker?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Discount brokers are ideal for self-directed investors and active traders who do not need 
              research reports or personal relationship managers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}