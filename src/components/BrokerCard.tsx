import Link from "next/link";
import { Broker } from "@/lib/types";

export default function BrokerCard({ broker }: { broker: Broker }) {
  return (
    <Link
      href={`/brokers/${broker.slug}`}
      className="block bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-200"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-xl text-gray-900">{broker.tradeName}</h3>
          <p className="text-sm text-gray-500 mt-1">{broker.name}</p>
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
        <p>
          <span className="font-medium text-gray-800">SEBI:</span>{" "}
          {broker.sebiRegNo}
        </p>
        <p>
          {broker.city}, {broker.state}
        </p>
        {broker.activeClients && (
          <p className="text-green-600 font-semibold pt-1">
            {broker.activeClients} active clients
          </p>
        )}
      </div>
    </Link>
  );
}