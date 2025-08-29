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
                <a href="https://meiro.com" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition">
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