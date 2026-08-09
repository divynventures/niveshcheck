import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact NiveshCheck",
  description:
    "Contact NiveshCheck to report a factual correction, share an official source, or provide feedback about the directory.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Contact</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Contact NiveshCheck
      </h1>

      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>
          For factual corrections, official source updates, or general feedback, email{" "}
          <a href="mailto:hello@niveshcheck.in" className="text-blue-600 hover:underline">
            hello@niveshcheck.in
          </a>.
        </p>

        <h2 id="corrections" className="text-xl font-semibold text-gray-900 mt-10 mb-3">
          Reporting a correction
        </h2>
        <p>
          Please include the page URL, the information you believe is incorrect, and an official supporting source where possible. We review requests against publicly available official sources and update or remove information when an error is confirmed.
        </p>
        <p>
          NiveshCheck is an independent directory. We do not provide investment advice or recommendations, and we cannot guarantee a specific response or update timeframe.
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
