import Link from "next/link";

export const metadata = {
  title: "Disclaimer",
  description: "Disclaimer for SEBI Brokers Directory",
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Disclaimer</h1>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <p>
          The information provided on this website (“SEBI Brokers Directory”) is for general informational purposes only.
        </p>

        <p>
          This website is an independent directory and is <strong>not affiliated with, endorsed by, or associated with the Securities and Exchange Board of India (SEBI)</strong> or any stock exchange in any manner.
        </p>

        <p>
          All data related to stock brokers, SEBI registration numbers, addresses, and other details has been compiled from publicly available sources. While we make reasonable efforts to keep the information accurate and up to date, we do not guarantee the completeness, accuracy, reliability, or suitability of any information on this website.
        </p>

        <p>
          Users are strongly advised to independently verify the SEBI registration status, credentials, and latest details of any broker on the official SEBI website (www.sebi.gov.in) and the respective exchange websites before making any decision.
        </p>

        <p>
          This website does not provide investment advice, trading recommendations, or financial advice of any kind. Nothing on this website should be construed as an offer, solicitation, or recommendation to buy or sell any securities or financial products.
        </p>

        <p>
          We are not responsible for any loss or damage arising from the use of information available on this website. Users deal with brokers and financial service providers entirely at their own risk.
        </p>

        <p>
          External links to third-party websites (including broker websites) are provided for convenience only. We do not control or endorse the content of those websites.
        </p>

        <p>
          By using this website, you acknowledge that you have read and understood this disclaimer.
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