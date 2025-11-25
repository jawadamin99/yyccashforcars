import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Script from "next/script";

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
  authors: [{ name: "Calgary Cash for Cars", url: "https://www.yourdomain.com" }],
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
      <head>
       {/* Google Tag Manager */}
  <Script id="gtm-script" strategy="afterInteractive">
    {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KK32N6HP');
    `}
  </Script>
  {/* End Google Tag Manager */}

  {/* Google Analytics (gtag.js) */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-2LCP9SHQQR"
    strategy="afterInteractive"
  />

  <Script id="ga4-script" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2LCP9SHQQR');
    `}
  </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-white`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KK32N6HP"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        {/* End Google Tag Manager (noscript) */}

        <Header />
        {children}
        <WhatsAppButton />
        <Footer />

        {/* JSON-LD LocalBusiness structured data */}
        <Script
          id="localbusiness-schema"
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
            }),
          }}
        />
      </body>
    </html>
  );
}
