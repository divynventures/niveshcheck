"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Broker } from "@/lib/types";
import { trackAnalyticsEvent } from "@/lib/analytics";
import BrokerCard from "./BrokerCard";

export default function BrokerSearch({ brokers }: { brokers: Broker[] }) {
  const [search, setSearch] = useState("");
  const lastTrackedSearch = useRef("");

  const filteredBrokers = useMemo(() => brokers.filter((broker) => {
    const query = search.toLowerCase();
    return (
      broker.tradeName.toLowerCase().includes(query) ||
      broker.name.toLowerCase().includes(query) ||
      broker.city.toLowerCase().includes(query) ||
      broker.sebiRegNo.toLowerCase().includes(query) ||
      (broker.type?.toLowerCase().includes(query) ?? false)
    );
  }), [brokers, search]);

  useEffect(() => {
    const normalizedSearch = search.trim().toLowerCase();
    if (normalizedSearch.length < 2 || normalizedSearch === lastTrackedSearch.current) return;

    const timeout = window.setTimeout(() => {
      trackAnalyticsEvent("search", {
        search_location: "broker_directory",
        results_count: filteredBrokers.length,
      });
      lastTrackedSearch.current = normalizedSearch;
    }, 700);

    return () => window.clearTimeout(timeout);
  }, [filteredBrokers.length, search]);

  return (
    <div>
      {/* Search Box */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search by name, city, SEBI number or type..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl px-5 py-3.5 border border-gray-300 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Results count */}
      <p className="text-gray-600 mb-6">
        {filteredBrokers.length} broker{filteredBrokers.length !== 1 ? "s" : ""} found
      </p>

      {/* Broker Cards */}
      {filteredBrokers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrokers.map((broker) => (
            <BrokerCard key={broker.id} broker={broker} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-500">
          No brokers found matching “{search}”
        </div>
      )}
    </div>
  );
}
