import Link from "next/link";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Data Methodology",
  description:
    "How NiveshCheck sources and organises information about SEBI registered stock brokers in India.",
  pathname: "/methodology",
});

export default function MethodologyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Methodology</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Data Methodology
      </h1>

      <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-6">
        <p>
          This page explains how information on NiveshCheck is collected and presented.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
          Source of data
        </h2>
        <p>
          The primary source of broker registration information is the publicly available SEBI list of registered stock brokers in the equity segment. Each published listing links to the relevant official SEBI record and shows the date NiveshCheck reviewed the source.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
          What we include
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Broker name and trade name</li>
          <li>SEBI registration number</li>
          <li>Recorded address, city, and state from the source material</li>
          <li>Recorded equity exchange memberships from the source material</li>
          <li>Broker website, where included as a non-affiliate convenience link</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
          Important limitations
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>We do not independently audit, certify, recommend, or endorse brokers</li>
          <li>Registration status can change. Always confirm the latest details on the official SEBI website</li>
          <li>The equity-segment source cannot establish broker type, active-client figures, pricing, product availability, or membership in other market segments</li>
          <li>We aim for accuracy but cannot guarantee that every record is complete or current at all times</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">
          Corrections and updates
        </h2>
        <p>
          We periodically review and update the directory. The official SEBI website remains the authoritative source for the latest registration status of any broker.
        </p>
        <p>
          To report a possible factual error, email{" "}
          <a href="mailto:hello@niveshcheck.in" className="text-blue-600 hover:underline">
            hello@niveshcheck.in
          </a>{" "}
          with the relevant page URL and, where possible, an official supporting source. We review correction requests against publicly available official sources and update or remove information when an error is confirmed.
        </p>
        <p>
          We may not make a change when the available evidence is incomplete, conflicting, or cannot be verified. NiveshCheck does not accept payment in exchange for changing factual listings, rankings, or editorial content.
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
