import Link from "next/link";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";
import BrokerCard from "@/components/BrokerCard";

const brokers = brokersData as Broker[];

export default function HomePage() {
  const topBrokers = brokers.slice(0, 6);
  const cities = Array.from(new Set(brokers.map((b) => b.city))).sort();

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Check SEBI Registered<br className="hidden sm:block" />
            Stock Brokers in India
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            NiveshCheck helps you discover and compare verified SEBI registered stock brokers. 
            Find the right discount or full-service broker for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/brokers"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-medium transition shadow-sm"
            >
              Explore All Brokers
            </Link>
            <Link
              href="/best-stock-brokers-for-beginners"
              className="inline-block bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 px-8 py-3.5 rounded-xl font-medium transition"
            >
              Best for Beginners
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link
            href="/brokers"
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-md transition text-center"
          >
            <div className="text-2xl font-bold text-blue-600 mb-1">{brokers.length}+</div>
            <div className="font-semibold text-gray-900">All Brokers</div>
            <div className="text-sm text-gray-500 mt-1">Complete directory</div>
          </Link>
          <Link
            href="/discount-stock-brokers"
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-green-400 hover:shadow-md transition text-center"
          >
            <div className="text-2xl font-bold text-green-600 mb-1">Low Cost</div>
            <div className="font-semibold text-gray-900">Discount Brokers</div>
            <div className="text-sm text-gray-500 mt-1">Flat & zero brokerage</div>
          </Link>
          <Link
            href="/full-service-stock-brokers"
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-md transition text-center"
          >
            <div className="text-2xl font-bold text-blue-600 mb-1">Research</div>
            <div className="font-semibold text-gray-900">Full-Service</div>
            <div className="text-sm text-gray-500 mt-1">Advisory & support</div>
          </Link>
          <Link
            href="/top-stock-brokers-by-clients"
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-indigo-400 hover:shadow-md transition text-center"
          >
            <div className="text-2xl font-bold text-indigo-600 mb-1">Popular</div>
            <div className="font-semibold text-gray-900">Top by Clients</div>
            <div className="text-sm text-gray-500 mt-1">Largest brokers</div>
          </Link>
        </div>
      </section>

      {/* Popular Brokers */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Popular Stock Brokers</h2>
          <Link href="/brokers" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
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
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Browse by City</h2>
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

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 md:p-14 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Always verify before opening an account
          </h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Check the SEBI registration number on NiveshCheck and confirm the latest status 
            on the official SEBI website before opening a demat account.
          </p>
          <Link
            href="/brokers"
            className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-8 py-3.5 rounded-xl font-medium transition"
          >
            Explore All Brokers
          </Link>
        </div>
      </section>
    </div>
  );
}