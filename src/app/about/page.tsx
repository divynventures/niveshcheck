import Link from "next/link";

export const metadata = {
  title: "About NiveshCheck",
  description:
    "Learn about NiveshCheck — a directory of SEBI registered stock brokers in India. Our goal is to help users easily check and discover registered brokers.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">About</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        About NiveshCheck
      </h1>

      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>
          NiveshCheck is a directory of SEBI registered stock brokers in India. 
          Our goal is simple: make it easier for people to check and discover registered brokers before opening a demat account.
        </p>

        <p>
          We organise publicly available information about SEBI registered brokers and present it in a clean, searchable format. 
          The site is built to help users compare brokers by type (discount vs full-service), city, and other basic attributes.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
          What we do
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>List SEBI registered stock brokers</li>
          <li>Organise them by city and broker type</li>
          <li>Provide basic information such as registration number, segments, and website</li>
          <li>Help users find brokers that match their needs</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
          What we do not do
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>We do not independently verify or audit brokers beyond publicly available information</li>
          <li>We do not provide investment advice</li>
          <li>We are not affiliated with SEBI or any stock exchange</li>
          <li>We do not guarantee the accuracy of third-party information</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
          Important note
        </h2>
        <p>
          Always verify the latest SEBI registration status of any broker on the official SEBI website 
          (www.sebi.gov.in) before opening an account. Registration status can change.
        </p>

        <p className="pt-4">
          If you find any incorrect information on this site, please let us know so we can correct it.
        </p>
      </div>

      <div className="mt-12 pt-8 border-t">
        <Link href="/" className="text-blue-600 hover:underline font-medium">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}