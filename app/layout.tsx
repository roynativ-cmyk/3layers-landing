import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "3Layers.ai | Fully Managed AI and Human Customer Support";
const description =
  "A fully managed customer-support operation: an AI Bot, our own human specialists, and live coordination with your team for the rare case that needs it — monitored in one console. Built for small and medium businesses.";

export const metadata: Metadata = {
  metadataBase: new URL("https://3layers.ai"),
  title,
  description,
  applicationName: "3layers.ai",
  keywords: [
    "customer support AI",
    "AI agent assist",
    "managed AI customer support",
    "support cost reduction",
    "AI bot for support",
    "human in the loop",
  ],
  openGraph: {
    title,
    description,
    url: "https://3layers.ai",
    siteName: "3layers.ai",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-fg font-sans">
        {children}
      </body>
    </html>
  );
}
