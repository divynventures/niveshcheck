import type { Metadata } from "next";

const siteName = "NiveshCheck";
export const siteUrl = "https://www.niveshcheck.in";

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, siteUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  pathname,
}: {
  title: string;
  description: string;
  pathname: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: pathname,
      siteName,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
    },
  };
}
