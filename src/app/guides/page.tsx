import Link from "next/link";
import { absoluteUrl, createPageMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/lib/guides";

export const metadata = createPageMetadata({
  title: "Broker and Account Guides",
  description:
    "Neutral, primary-source-backed guides about checking broker registrations, account roles, account safety, and complaints in India.",
  pathname: "/guides",
});

export default function GuidesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Guides", item: absoluteUrl("/guides") },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <JsonLd data={breadcrumbSchema} />
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800">Guides</span>
      </nav>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Broker and account guides</h1>
      <p className="text-gray-600 max-w-3xl leading-relaxed mb-10">
        Practical explainers built from SEBI and stock-exchange material. They are for general information only and do not recommend, endorse, or assess any broker, account, or investment.
      </p>
      <div className="grid gap-5">
        {guides.map((guide) => (
          <article key={guide.slug} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-sm transition">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              <Link href={`/guides/${guide.slug}`} className="hover:text-blue-700">{guide.title}</Link>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">{guide.description}</p>
            <Link href={`/guides/${guide.slug}`} className="text-blue-600 hover:underline font-medium text-sm">Read guide →</Link>
          </article>
        ))}
      </div>
    </div>
  );
}
