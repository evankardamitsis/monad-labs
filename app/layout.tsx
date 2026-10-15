import type { Metadata } from "next";
import { DM_Sans, IBM_Plex_Mono, Sora } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const title = "Monad Labs | Tech studio for web and mobile apps";
const description =
  "Monad Labs is a tech studio that designs and builds web and mobile apps, from first sketch to shipped product. Makers of NetProphet and Refill.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://monadlabs.gr"),
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    url: "https://monadlabs.gr",
    siteName: "Monad Labs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  keywords: [
    "monad labs",
    "tech studio",
    "design and development studio",
    "web app development",
    "mobile app development",
    "ios app development",
    "android app development",
    "product design",
    "ui ux design",
    "react native",
    "expo",
    "next.js",
    "supabase",
    "netprophet",
    "refill",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${dmSans.variable} ${plexMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
