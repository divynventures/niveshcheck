import Link from "next/link";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";
import BrokerCard from "@/components/BrokerCard";

const brokers = brokersData as Broker[];

export default function HomePage() {
  const topBrokers = brokers.slice(0, 6);
  const cities = Array.from(new Set(brokers.map((b) => b.city))).sort();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
          Check SEBI Registered<br className="hidden md:block" /> Stock Brokers in India
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          NiveshCheck helps you discover and compare verified SEBI registered stock brokers. 
          Find discount and full-service brokers by city.
        </p>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <Link
          href="/brokers"
          className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition text-center"
        >
          <div className="font-semibold text-gray-900 mb-1">All Brokers</div>
          <div className="text-sm text-gray-500">{brokers.length}+ listed</div>
        </Link>
        <Link
          href="/discount-stock-brokers"
          className="bg-white border border-gray-200 rounded-xl p-5 hover:border-green-400 hover:shadow-md transition text-center"
        >
          <div className="font-semibold text-gray-900 mb-1">Discount Brokers</div>
          <div className="text-sm text-gray-500">Low-cost options</div>
        </Link>
        <Link
          href="/full-service-stock-brokers"
          className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition text-center"
        >
          <div className="font-semibold text-gray-900 mb-1">Full-Service</div>
          <div className="text-sm text-gray-500">Research & advisory</div>
        </Link>
        <Link
          href="/best/mumbai"
          className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition text-center"
        >
          <div className="font-semibold text-gray-900 mb-1">Best in Mumbai</div>
          <div className="text-sm text-gray-500">Top city brokers</div>
        </Link>
      </section>

      {/* Popular Brokers */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Popular Stock Brokers</h2>
          <Link
            href="/brokers"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topBrokers.map((broker) => (
            <BrokerCard key={broker.id} broker={broker} />
          ))}
        </div>
      </section>

      {/* Cities */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by City</h2>
        <div className="flex flex-wrap gap-3">
          {cities.map((city) => (
            <Link
              key={city}
              href={`/best/${city.toLowerCase().replace(/\s+/g, "-")}`}
              className="px-5 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-blue-500 hover:text-blue-600 transition"
            >
              {city}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Always verify before opening an account
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Check the SEBI registration number on this site and confirm the latest status 
          on the official SEBI website before opening a demat account.
        </p>
        <Link
          href="/brokers"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-medium transition shadow-sm"
        >
          Explore All Brokers
        </Link>
      </section>
    </div>
  );
}