import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Pulse | Billing Operations",
  description:
    "A professional SaaS billing and account aggregation platform for Global Pulse LLC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
