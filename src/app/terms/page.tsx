import Link from "next/link";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of Use for SEBI Brokers Directory",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Use</h1>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <p>
          By accessing and using this website (“SEBI Brokers Directory”), you agree to the following Terms of Use.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">1. Nature of the Website</h2>
        <p>
          This website is an independent online directory that lists publicly available information about SEBI-registered stock brokers for informational purposes only.
        </p>
        <p>
          We are not a stock broker, investment adviser, research analyst, or financial institution. We do not offer any financial products or services.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">2. No Affiliation with SEBI</h2>
        <p>
          This website is not affiliated with, endorsed by, or connected to the Securities and Exchange Board of India (SEBI) or any stock exchange in any way.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">3. Accuracy of Information</h2>
        <p>
          While we try to keep the information accurate, we do not guarantee that all details (including SEBI registration numbers, addresses, client numbers, or other data) are complete, current, or error-free.
        </p>
        <p>
          Users must independently verify all information from official sources before relying on it.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">4. No Investment Advice</h2>
        <p>
          Nothing on this website constitutes investment advice, financial advice, trading tips, or a recommendation to buy, sell, or hold any securities.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">5. Limitation of Liability</h2>
        <p>
          We shall not be liable for any direct, indirect, incidental, or consequential loss or damage arising from the use of this website or reliance on any information provided here.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">6. External Links</h2>
        <p>
          This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of those external sites.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">7. Intellectual Property</h2>
        <p>
          The design, layout, and original content of this website are protected. You may not copy or reproduce substantial portions of the website without permission.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">8. Changes to Terms</h2>
        <p>
          We may update these Terms of Use at any time. Continued use of the website after changes means you accept the updated terms.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">9. Governing Law</h2>
        <p>
          These Terms shall be governed by the laws of India.
        </p>
      </div>

      <div className="mt-12">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}