import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

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
  description: "Route, transform, and enrich your event data with JavaScript lambdas. Powerful, flexible, and cost-effective.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-white antialiased`}
      >
        <header className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image src="/logo.svg" alt="BetterPipes Logo" width={48} height={48} />
              </div>
              <div>
                <div className="font-bold text-2xl">betterpipes</div>
                <a href="https://meiro.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition">
                  built by Meiro
                </a>
              </div>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}