import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const title = "Monad Labs - Where ideas take shape.";
const description =
  "We build from first principles — crafting digital products that matter.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://monadlabs.gr"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Monad Labs - Where ideas take shape.",
    description:
      "Monad Labs is a Tech and Design studio crafting intentional digital products, including Netprophet, a data-led prediction game expanding across emerging sports.",
    url: "https://monadlabs.gr",
    siteName: "Monad Labs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monad Labs - Where ideas take shape.",
    description:
      "Monad Labs is a Tech and Design studio crafting intentional digital products, including Netprophet, a data-led prediction game expanding across emerging sports.",
  },
  keywords: [
    "monad labs",
    "digital products",
    "tech studio",
    "software studio",
    "software lab",
    "software company",
    "software development",
    "software engineering",
    "software architecture",
    "software design",
    "software development company",
    "software development lab",
    "software development studio",
    "software development startup",
    "software development lab",
    "tech startup",
    "tech lab",
    "netprophet",
    "netprophet prediction game",
    "netprophet prediction platform",
    "netprophet prediction app",
    "netprophet prediction tool",
    "netprophet prediction service",
    "netprophet prediction solution",
    "sports prediction",
    "data-led prediction",
    "sports analytics",
    "sports prediction game",
    "sports prediction platform",
    "sports prediction app",
    "sports prediction tool",
    "sports prediction service",
    "sports prediction solution"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-[#0A0A0A] text-[#F5F5F5] antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 px-6 md:px-12 lg:px-20 xl:px-28">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
