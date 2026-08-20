import type { Metadata } from "next";
import { Libre_Franklin, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const libreFranklin = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-head",
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Why Spray Foam Contractors Can't Afford to Miss a Call",
    template: "%s",
  },
  description:
    "An educational resource for spray foam contractors on missed calls, call-handling gaps, and how to fix them. Call 844-967-5247.",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${libreFranklin.variable} ${sourceSans.variable}`}>
      <body className="font-body bg-paper text-ink antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
