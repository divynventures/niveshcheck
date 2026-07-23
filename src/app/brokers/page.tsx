import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";
import BrokerSearch from "@/components/BrokerSearch";

const brokers = brokersData as Broker[];

export const metadata = {
  title: "All SEBI Registered Stock Brokers in India",
  description:
    "Complete list of SEBI registered stock brokers and demat account providers in India. Search and filter by name, city or type.",
};

export default function BrokersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          All SEBI Registered Stock Brokers
        </h1>
        <p className="text-gray-600">
          Search and explore verified SEBI registered brokers
        </p>
      </div>

      <BrokerSearch brokers={brokers} />
    </div>
  );
}