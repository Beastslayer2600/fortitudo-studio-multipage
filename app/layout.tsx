import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gert Fourie | Financial Advisor | Liberty Group FSP 2409 | Pretoria",
  description:
    "Calm, structured financial planning that replaces worry with clarity - Pretoria & Gauteng",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col"
        style={{ background: "var(--cream)", color: "var(--ink)" }}
      >
        {children}
      </body>
    </html>
  );
}
