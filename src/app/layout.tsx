import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NiveshCheck Editorial Team",
  url: "https://niveshcheck.in",
  email: "hello@niveshcheck.in",
  description:
    "An independent directory that organizes publicly available information about stock brokers in India.",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.niveshcheck.in"),
  title: {
    default: "NiveshCheck – SEBI Registered Stock Brokers in India",
    template: "%s | NiveshCheck",
  },
  description:
    "Check and compare SEBI registered stock brokers in India. Find discount and full-service brokers, best brokers by city, and more on NiveshCheck.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NiveshCheck – SEBI Registered Stock Brokers in India",
    description:
      "Discover and compare SEBI registered stock brokers. Find the right broker for your needs.",
    url: "https://www.niveshcheck.in",
    siteName: "NiveshCheck",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "NiveshCheck – SEBI Registered Stock Brokers",
    description: "Check SEBI registered stock brokers in India.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3XHH4N1HP4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3XHH4N1HP4');
          `}
        </Script>

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
