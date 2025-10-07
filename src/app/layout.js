import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Head from "next/head";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cash for Cars Calgary — Top Dollar for Junk & Scrap Cars",
  description:
    "Get fast, same-day cash for junk, wrecked and used vehicles in Calgary. Free towing, licensed paperwork, and eco-friendly recycling. Serving Calgary, Airdrie, Cochrane & Okotoks. Instant quotes available online or by phone.",
  keywords: [
    "cash for cars Calgary",
    "cash for junk cars Calgary",
    "scrap car removal Calgary",
    "free towing Calgary",
    "sell my car Calgary",
    "junk car buyers Calgary",
    "same day car pickup Calgary",
  ],
  applicationName: "Cash for Cars Calgary",
  generator: "Next.js",
  authors: [
    { name: "Calgary Cash for Cars", url: "https://www.yourdomain.com" },
  ],
  viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL("https://www.yourdomain.com"),
  alternates: { canonical: "https://www.yourdomain.com" },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Cash for Cars Calgary — Top Dollar for Junk & Scrap Cars",
    description:
      "Fast, trusted cash for junk and scrap vehicles in Calgary. Free towing, immediate payment, licensed paperwork and responsible recycling. Serving Calgary, Airdrie, Cochrane & Okotoks.",
    url: "https://www.yourdomain.com",
    siteName: "Cash for Cars Calgary",
    images: [
      {
        url: "https://www.yourdomain.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cash for Cars Calgary - top dollar for junk cars",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cash for Cars Calgary — Top Dollar for Junk & Scrap Cars",
    description:
      "Get same-day cash for junk cars in Calgary. Free towing, licensed paperwork, and eco-friendly recycling. Instant quotes online or by phone.",
    images: ["https://www.yourdomain.com/images/og-image.jpg"],
    creator: "@YourTwitterHandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Cash for Cars Calgary — Top Dollar for Junk & Scrap Cars</title>
        <meta
          name="description"
          content="Get fast, same-day cash for junk, wrecked and used vehicles in Calgary. Free towing, licensed paperwork, and eco-friendly recycling. Serving Calgary, Airdrie, Cochrane & Okotoks. Instant quotes available online or by phone."
        />
        <meta
          name="keywords"
          content="cash for cars Calgary, cash for junk cars Calgary, scrap car removal Calgary, free towing Calgary, sell my car Calgary, junk car buyers Calgary, same day car pickup Calgary"
        />
        <link rel="canonical" href="https://www.yourdomain.com" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Cash for Cars Calgary — Top Dollar for Junk & Scrap Cars"
        />
        <meta
          property="og:description"
          content="Fast, trusted cash for junk and scrap vehicles in Calgary. Free towing, immediate payment, licensed paperwork and responsible recycling. Serving Calgary, Airdrie, Cochrane & Okotoks."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourdomain.com" />
        <meta
          property="og:image"
          content="https://www.yourdomain.com/images/og-image.jpg"
        />
        <meta property="og:site_name" content="Cash for Cars Calgary" />
        <meta property="og:locale" content="en_CA" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Cash for Cars Calgary — Top Dollar for Junk & Scrap Cars"
        />
        <meta
          name="twitter:description"
          content="Get same-day cash for junk cars in Calgary. Free towing, licensed paperwork, and eco-friendly recycling. Instant quotes online or by phone."
        />
        <meta
          name="twitter:image"
          content="https://www.yourdomain.com/images/og-image.jpg"
        />
        <meta name="twitter:creator" content="@YourTwitterHandle" />

        {/* Local SEO hints */}
        <meta name="geo.region" content="CA-AB" />
        <meta name="geo.placename" content="Calgary" />
        <meta name="geo.position" content="51.0447;-114.0719" />
        <meta name="ICBM" content="51.0447, -114.0719" />

        {/* JSON-LD LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutomotiveBusiness",
              name: "Calgary Cash for Cars",
              url: "https://www.yourdomain.com",
              logo: "https://www.yourdomain.com/images/logo.png",
              image: "https://www.yourdomain.com/images/og-image.jpg",
              description:
                "Top-dollar cash for junk, wrecked and used vehicles in Calgary. Free towing, same-day pickup, licensed paperwork, and eco-friendly recycling. Serving Calgary, Airdrie, Cochrane & Okotoks.",
              serviceArea: {
                "@type": "Place",
                name: "Calgary, Airdrie, Cochrane, Okotoks",
              },
              sameAs: [
                "https://www.facebook.com/yourpage",
                "https://www.instagram.com/yourprofile",
                "https://twitter.com/YourTwitterHandle",
              ],
              // You can add telephone, address, priceRange when available
            }),
          }}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-white`}
      >
        <Header />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
