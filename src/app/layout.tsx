import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiwaleis - Building Materials & Transport Solutions",
  description:
    "Kiwaleis - Your trusted partner for high-quality building materials, timber supply, wood poles, specialized construction materials, and reliable transportation services in Dar es Salaam, Tanzania.",
  keywords: [
    "Kiwale",
    "Kiwaleis",
    "Kiwale Group Limited",
    "building materials",
    "timber",
    "wood poles",
    "transportation",
    "logistics",
    "Dar es Salaam",
    "Tanzania",
    "construction",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-64.png", type: "image/png", sizes: "64x64" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
  authors: [{ name: "Kiwaleis" }],
  openGraph: {
    title: "Kiwaleis - Building Materials & Transport Solutions",
    description:
      "Your trusted partner for high-quality building materials, timber supply, and reliable transportation services. Kiwaleis & Kiwale Group Limited.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <Preloader />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
