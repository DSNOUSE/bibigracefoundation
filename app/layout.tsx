import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bibi Grace Foundation – Coming Soon",
  description:
    "Bibi Grace Foundation is a registered non-profit organisation that provides quality education, materials and financial support to children and youths.",
  keywords: [
    "Bibi Grace Foundation",
    "non-profit",
    "education",
    "children",
    "youth",
    "support",
    "Nigeria",
  ],
  openGraph: {
    title: "Bibi Grace Foundation – Coming Soon",
    description:
      "Quality education, materials and financial support for children and youths. Launching soon!",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bibi Grace Foundation – Coming Soon",
    description:
      "Quality education, materials and financial support for children and youths. Launching soon!",
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
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌸</text></svg>" />
      </head>
      <body>{children}</body>
    </html>
  );
}
