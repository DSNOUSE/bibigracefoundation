import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bibi Grace Foundation",
  description:
    "Bibi Grace Foundation is a registered nonprofit organization supporting children and youth with education, materials, and financial assistance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
