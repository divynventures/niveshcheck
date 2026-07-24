import Link from "next/link";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";
import BrokerCard from "@/components/BrokerCard";

const brokers = brokersData as Broker[];

export const metadata = {
  title: "Best Full-Service Stock Brokers in India (2026)",
  description:
    "List of SEBI registered full-service stock brokers in India. Compare brokers that offer research, advisory and relationship managers.",
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
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
          Best Full-Service Stock Brokers in India (2026)
        </h1>

        <div className="prose prose-gray max-w-3xl text-gray-600 leading-relaxed space-y-4">
          <p>
            Full-service stock brokers provide trading services along with research reports, investment advice, 
            and often a dedicated relationship manager. They generally charge higher brokerage than discount brokers.
          </p>
          <p>
            This page lists SEBI registered full-service brokers in India. Always verify the latest registration 
            status on the official SEBI website before opening an account.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-12">
        <p className="text-gray-700 text-lg">
          <span className="font-bold text-blue-700 text-xl">{fullServiceBrokers.length}</span>{" "}
          SEBI registered full-service brokers listed
        </p>
      </div>

      {/* Broker List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
              A full-service broker offers trading facilities along with research reports, investment recommendations, 
              and personalised support through relationship managers.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Are full-service brokers more expensive?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Yes. Full-service brokers typically charge higher brokerage because they provide additional services 
              such as research and advisory that discount brokers usually do not.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Who should choose a full-service broker?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Full-service brokers are suitable for investors who prefer guided advice, research support, 
              and personalised service rather than managing everything on their own.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              Can I get research from a discount broker as well?
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Some discount brokers now offer basic research or educational content. However, the depth and personalisation 
              of research is generally higher with full-service brokers.
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