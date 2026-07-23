import Link from "next/link";
import { Broker } from "@/lib/types";

export default function BrokerCard({ broker }: { broker: Broker }) {
  return (
    <Link
      href={`/brokers/${broker.slug}`}
      className="block bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-lg transition group"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
            {broker.tradeName}
          </h3>
          <p className="text-sm text-gray-500 mt-0.5">{broker.name}</p>
        </div>
        <span
          className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            broker.type === "Discount"
              ? "bg-green-50 text-green-700"
              : "bg-blue-50 text-blue-700"
          }`}
        >
          {broker.type}
        </span>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex justify-between">
          <span className="text-gray-500">City</span>
          <span className="font-medium text-gray-800">{broker.city}</span>
        </div>
        {broker.activeClients && (
          <div className="flex justify-between">
            <span className="text-gray-500">Active Clients</span>
            <span className="font-medium text-gray-800">{broker.activeClients}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-gray-500">SEBI Reg.</span>
          <span className="font-medium text-gray-800 text-xs">{broker.sebiRegNo}</span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-sm text-blue-600 font-medium group-hover:underline">
          View details →
        </span>
      </div>
    </Link>
  );
}