import Link from "next/link";

export const metadata = {
  title: "Frequently Asked Questions | NiveshCheck",
  description:
    "Common questions about SEBI registered stock brokers, demat accounts, discount vs full-service brokers, and how to choose a broker in India.",
};

export default function FAQPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">FAQ</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-600 mb-12 leading-relaxed">
        Answers to common questions about SEBI registered stock brokers and demat accounts in India.
      </p>

      <div className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            What is a SEBI registered stock broker?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A SEBI registered stock broker is a company or individual that is registered with the Securities and Exchange Board of India and is authorised to buy and sell securities on behalf of clients on recognised stock exchanges.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            How can I verify if a broker is SEBI registered?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            You can check the broker’s SEBI registration number on NiveshCheck and then confirm the latest status on the official SEBI website (www.sebi.gov.in). Always verify before opening an account.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            What is the difference between discount and full-service brokers?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Discount brokers offer low brokerage charges and focus mainly on trade execution. Full-service brokers charge higher brokerage but provide research reports, advisory services, and relationship managers.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Which is the best stock broker for beginners?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Beginners usually prefer brokers with simple apps, low charges, and educational content. Popular options include Groww, Zerodha, and Angel One. The best choice depends on your personal needs.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Is it safe to open a demat account with a discount broker?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Yes, as long as the broker is SEBI registered. Safety depends on regulatory compliance, not on whether the broker is discount or full-service.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            Does NiveshCheck verify brokers independently?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            No. NiveshCheck organises publicly available SEBI registration data to help users check and discover brokers. We do not independently audit or certify brokers. Always verify the latest status on the official SEBI website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            How often is the broker data updated?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We update the directory periodically based on publicly available information. However, for the most current registration status, please refer to the official SEBI website.
          </p>
        </div>
      </div>

      <div className="mt-14 pt-8 border-t">
        <Link href="/brokers" className="text-blue-600 hover:underline font-medium">
          ← Explore All Brokers
        </Link>
      </div>
    </div>
  );
}