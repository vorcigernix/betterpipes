import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";
// Removed unused import: import { NavigationMenu } from "@/components/ui/navigation-menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BetterPipes | The Modern Data Pipeline for Developers",
  description: "Route, transform, and enrich your event data with JavaScript lambdas. Connect to dozens of destinations like Snowflake, BigQuery, Mixpanel, and HubSpot in minutes. Powerful, flexible, and cost-effective event routing platform.",
  keywords: [
    "event routing",
    "data pipeline",
    "JavaScript",
    "data transformation",
    "analytics",
    "customer data platform",
    "CDP",
    "data integration",
    "webhooks",
    "API",
    "real-time data",
    "data streaming",
    "ETL",
    "data warehouse",
    "Snowflake",
    "BigQuery",
    "Mixpanel",
    "HubSpot"
  ],
  authors: [{ name: "Meiro" }],
  creator: "Meiro",
  publisher: "Meiro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://betterpipes.com",
    siteName: "BetterPipes",
    title: "BetterPipes | The Modern Data Pipeline for Developers",
    description: "Route, transform, and enrich your event data with JavaScript lambdas. Connect to dozens of destinations in minutes. Powerful, flexible, and cost-effective.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "BetterPipes - Event Routing Made Simple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BetterPipes | The Modern Data Pipeline for Developers",
    description: "Route, transform, and enrich your event data with JavaScript lambdas. Connect to dozens of destinations in minutes.",
    images: ["/og-image.svg"],
    creator: "@meiro",
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: "/manifest.json",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}
      >
        <header className="sticky top-0 z-50 container mx-auto px-6 py-4 bg-black/80 backdrop-blur-sm">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/logo.svg" alt="BetterPipes Logo" width={48} height={48} />
              </div>
              <div>
                <div className="font-bold text-2xl">betterpipes</div>
                <a href="https://meiro.io" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition">
                  built by Meiro
                </a>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="container mx-auto px-6 py-8 text-center text-gray-500 border-t border-gray-800">
          <p>&copy; 2025 Meiro. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}