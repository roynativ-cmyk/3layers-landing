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

const title = "3layers.ai — support AI that proves it works";
const description =
  "A support agent wrapped in three layers of proof: human review of every conversation, AI-to-AI regression testing before every release, and machine learning that turns verified failures into fixes. Deployable inside your own AWS account.";

export const metadata: Metadata = {
  metadataBase: new URL("https://3layers.ai"),
  title,
  description,
  applicationName: "3layers.ai",
  keywords: [
    "support AI",
    "customer support automation",
    "human in the loop",
    "regression testing for LLMs",
    "AI evaluation",
    "on-premise AI",
    "AWS Bedrock",
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
