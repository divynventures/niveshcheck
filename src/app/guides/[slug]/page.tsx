import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getGuide, guides } from "@/lib/guides";
import { absoluteUrl, createPageMetadata } from "@/lib/metadata";
import AnalyticsLink from "@/components/AnalyticsLink";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return createPageMetadata({ title: guide.title, description: guide.description, pathname: `/guides/${guide.slug}` });
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const pageUrl = absoluteUrl(`/guides/${guide.slug}`);
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Guides", item: absoluteUrl("/guides") },
      { "@type": "ListItem", position: 3, name: guide.title, item: pageUrl },
    ],
  };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    dateModified: guide.updatedAt,
    mainEntityOfPage: pageUrl,
    author: { "@type": "Organization", name: "NiveshCheck Editorial Team" },
    publisher: { "@type": "Organization", name: "NiveshCheck Editorial Team", url: absoluteUrl("/") },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={articleSchema} />
      <JsonLd data={faqSchema} />
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-blue-600 transition">Home</Link><span className="mx-2">/</span>
        <Link href="/guides" className="hover:text-blue-600 transition">Guides</Link><span className="mx-2">/</span>
        <span className="text-gray-800">Guide</span>
      </nav>
      <p className="text-sm font-medium text-blue-700 mb-3">Neutral explainer · Updated 8 August 2026</p>
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">{guide.title}</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-10">{guide.intro}</p>

      <div className="space-y-10">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.heading}</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            {section.steps && (
              <ol className="list-decimal pl-5 mt-5 space-y-2 text-gray-700 leading-relaxed">
                {section.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
            )}
          </section>
        ))}
      </div>

      <section className="mt-12 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-5">Frequently asked questions</h2>
        <div className="space-y-6">
          {guide.faqs.map((faq) => (
            <div key={faq.question}><h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3><p className="text-gray-700 leading-relaxed">{faq.answer}</p></div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-blue-50 border border-blue-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Primary sources</h2>
        <p className="text-gray-700 leading-relaxed mb-4">Read the original guidance and check for updates directly with the issuing organisation.</p>
        <ul className="space-y-3">
          {guide.sources.map((source) => (
            <li key={source.url}><AnalyticsLink href={source.url} target="_blank" rel="noreferrer" eventName="primary_source_click" eventParameters={{ source_publisher: source.publisher }} className="text-blue-700 hover:underline font-medium">{source.name} <span className="font-normal text-gray-600">({source.publisher})</span></AnalyticsLink></li>
          ))}
        </ul>
      </section>

      <p className="mt-10 text-sm text-gray-500 leading-relaxed">NiveshCheck is not affiliated with SEBI and does not independently verify, recommend, endorse, or advise on brokers, accounts, or investments.</p>
    </article>
  );
}
