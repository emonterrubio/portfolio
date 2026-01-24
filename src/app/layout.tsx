import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ed Monterrubio - Product Design Portfolio",
  description: "Design Leader specializing in AI/ML products and enterprise systems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased bg-gray-100"
      >
        {children}
      </body>
    </html>
  );
}
