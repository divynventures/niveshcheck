import { MetadataRoute } from "next";
import brokersData from "@/data/brokers.json";
import { Broker } from "@/lib/types";
import { guides } from "@/lib/guides";
import { exchangeDirectories } from "@/lib/exchanges";

const brokers = brokersData as Broker[];
const baseUrl = "https://www.niveshcheck.in";
const minimumIndexableCityListings = 5;
const sourceReviewDate = new Date("2026-08-21");
const directoryUpdateDate = new Date("2026-08-22");

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: directoryUpdateDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/brokers`,
      lastModified: directoryUpdateDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: directoryUpdateDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/methodology`,
      lastModified: directoryUpdateDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // City pages
  const cities = Array.from(new Set(brokers.map((b) => b.city))).filter(
    (city) => brokers.filter((broker) => broker.city === city).length >= minimumIndexableCityListings
  );
  const cityPages: MetadataRoute.Sitemap = cities.map((city) => {
    const slug = city.toLowerCase().replace(/\s+/g, "-");
    return {
      url: `${baseUrl}/city/${slug}`,
      lastModified: sourceReviewDate,
      changeFrequency: "weekly",
      priority: 0.7,
    };
  });

  // Broker detail pages
  const brokerPages: MetadataRoute.Sitemap = brokers.map((broker) => ({
    url: `${baseUrl}/brokers/${broker.slug}`,
    lastModified: sourceReviewDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const guidePages: MetadataRoute.Sitemap = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const exchangePages: MetadataRoute.Sitemap = exchangeDirectories.map((exchange) => ({
    url: `${baseUrl}/exchange/${exchange.slug}`,
    lastModified: sourceReviewDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...guidePages, ...exchangePages, ...cityPages, ...brokerPages];
}
