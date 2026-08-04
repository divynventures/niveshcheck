import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, createPageMetadata } from "@/lib/metadata";

const faqItems = [
  {
    question: "What is a SEBI registered stock broker?",
    answer:
      "A SEBI registered stock broker is a company or individual registered with the Securities and Exchange Board of India to deal in securities on recognised stock exchanges, subject to the applicable rules and conditions.",
  },
  {
    question: "How can I verify if a broker is SEBI registered?",
    answer:
      "Search the broker's registration number in SEBI's official directory and check the latest record before opening an account. NiveshCheck provides recorded registration information and a direct SEBI lookup link where available.",
  },
  {
    question: "What is the difference between discount and full-service brokers?",
    answer:
      "Discount brokers generally focus on trade execution and may charge lower brokerage. Full-service brokers may offer research, advisory, and relationship-management services, often with different charges.",
  },
  {
    question: "Which stock broker is suitable for beginners?",
    answer:
      "The suitable choice depends on your needs, charges, service expectations, and understanding of the product. Compare official information and verify the broker's current registration details before deciding.",
  },
  {
    question: "Does SEBI registration guarantee that a broker is safe or suitable?",
    answer:
      "No. Registration information is one important check, but it is not a recommendation, guarantee, or assessment of whether a broker is suitable for you. Review the current official record and make your own decision.",
  },
  {
    question: "Does NiveshCheck verify brokers independently?",
    answer:
      "No. NiveshCheck organises publicly available broker information for reference. We do not independently audit, certify, recommend, or endorse brokers. Always verify the latest registration details with SEBI.",
  },
  {
    question: "How often is the broker data updated?",
    answer:
      "NiveshCheck updates directory information periodically. For the most current registration status, consult the official SEBI directory directly.",
  },
];

export const metadata = createPageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Common questions about SEBI registered stock brokers, demat accounts, discount vs full-service brokers, and how to choose a broker in India.",
  pathname: "/faq",
});

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "FAQ", item: absoluteUrl("/faq") },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
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
        {faqItems.map(({ question, answer }) => (
          <div key={question}>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{question}</h2>
            <p className="text-gray-600 leading-relaxed">{answer}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 pt-8 border-t">
        <Link href="/brokers" className="text-blue-600 hover:underline font-medium">
          ← Explore All Brokers
        </Link>
      </div>
    </div>
  );
}
