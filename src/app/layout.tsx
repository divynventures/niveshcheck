import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "NiveshCheck – SEBI Registered Stock Brokers in India",
    template: "%s | NiveshCheck",
  },
  description:
    "Check and compare SEBI registered stock brokers in India. Find discount and full-service brokers, best brokers by city, and more on NiveshCheck.",
  keywords: [
    "SEBI registered brokers",
    "stock brokers in India",
    "demat account",
    "discount brokers",
    "full service brokers",
    "best stock brokers",
    "NiveshCheck",
  ],
  openGraph: {
    title: "NiveshCheck – SEBI Registered Stock Brokers in India",
    description:
      "Discover and compare SEBI registered stock brokers. Find the right broker for your needs.",
    url: "https://niveshcheck.vercel.app",
    siteName: "NiveshCheck",
    type: "website",
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
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}