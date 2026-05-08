import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// [REPLACE: Update title, description, and metadata with client details]
export const metadata: Metadata = {
  title: {
    default: "Ryno Greyling | Financial Advisor | Liberty",
    template: "%s | Ryno Greyling Financial",
  },
  description:
    "Strategic wealth management and financial planning for professionals and families in South Africa. Authorised representative of Liberty.",
  keywords: ["financial advisor", "wealth management", "retirement planning", "estate planning", "insurance", "Liberty"],
  authors: [{ name: "Ryno Greyling" }],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    // [REPLACE: Set your actual domain URL]
    url: "https://yourwebsite.co.za",
    siteName: "Ryno Greyling Financial",
    title: "Ryno Greyling | Financial Advisor | Liberty",
    description:
      "Strategic wealth management and financial planning for professionals and families in South Africa.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
