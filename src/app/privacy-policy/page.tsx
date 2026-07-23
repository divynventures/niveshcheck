import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for SEBI Brokers Directory",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

      <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
        <p>
          This Privacy Policy explains how SEBI Brokers Directory (“we”, “us”, or “our”) collects, uses, and protects information when you visit our website.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">1. Information We Collect</h2>
        <p>
          We do not require users to create an account or provide personal information to browse the directory.
        </p>
        <p>
          Like most websites, we may automatically collect certain technical information such as:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Pages visited and time spent on the site</li>
        </ul>
        <p>
          This information is collected through standard web server logs and analytics tools.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">2. How We Use Information</h2>
        <p>
          We use the collected information only to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Understand how visitors use the website</li>
          <li>Improve the content and performance of the site</li>
          <li>Monitor traffic and technical issues</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">3. Cookies</h2>
        <p>
          We may use cookies or similar technologies for analytics and improving user experience. You can control cookies through your browser settings.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">4. Third-Party Links</h2>
        <p>
          Our website contains links to third-party websites (including stock broker websites). We are not responsible for the privacy practices of those websites.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">5. Data Security</h2>
        <p>
          We take reasonable measures to protect information collected through the website. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">6. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8">7. Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, you can reach out through the contact details provided on this website (once available).
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