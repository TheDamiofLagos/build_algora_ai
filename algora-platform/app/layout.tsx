import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Algora - Tech Learning Platform",
  description: "Democratizing access to high-quality tech education in Africa through structured learning paths, live support, and affordable subscriptions.",
  keywords: ["tech education", "learning platform", "data analytics", "Africa", "online courses"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
