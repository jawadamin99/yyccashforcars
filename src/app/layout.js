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
  authors: [{ name: "Calgary Cash for Cars", url: "https://www.yyccash.com" }],
  viewport: "width=device-width, initial-scale=1",
  metadataBase: new URL("https://www.yyccash.com/"),
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
    url: "https://www.yyccash.com",
    siteName: "Cash for Cars Calgary",
    images: [
      {
        url: "https://www.yyccash.com/images/gallery/g7.webp",
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
    images: ["https://www.yyccash.com/images/gallery/g7.webp"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-white`}
      >
        <Script
          id="gtag-loader"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17598549406"
        />
        <Script id="gtag-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17598549406');
            gtag('config', 'G-2LCP9SHQQR');
          `}
        </Script>
        <Script id="gtm-loader" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KK32N6HP');
          `}
        </Script>
        <Script id="trafficguard" strategy="beforeInteractive">
          {`
            var dataTrafficGuard = window.dataTrafficGuard || [];
            dataTrafficGuard.push(['property', 'tg-022627-001']);
            dataTrafficGuard.push(['event','pageview']);
            (function() {
              var tg = document.createElement('script');
              tg.type = 'text/javascript';
              tg.async = true;
              tg.src = '//tgtag.io/tg.js?pid=tg-022627-001';
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(tg, s);
            })();
          `}
        </Script>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KK32N6HP"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img src="//p.tgtag.io/event?property_id=tg-022627-001&event_name=pageview&no_script=1" width="1" height="1" border="0" />',
          }}
        />
        
        {/* End Google Tag Manager (noscript) */}

        <Header />
        <main>
          {children}
        </main>
        <WhatsAppButton />
        <Footer />

        {/* JSON-LD LocalBusiness + Website structured data */}
        <script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "AutomotiveBusiness",
                  "@id": "https://www.yyccash.com/#localbusiness",
                  name: "YYC Cash for Cars Calgary",
                  url: "https://www.yyccash.com",
                  logo: "https://www.yyccash.com/images/yyc-car-logo.png",
                  image: "https://www.yyccash.com/images/gallery/g7.webp",
                  description:
                    "Top-dollar cash for junk, wrecked and used vehicles in Calgary. Free towing, same-day pickup, licensed paperwork, and eco-friendly recycling. Serving Calgary, Airdrie, Cochrane & Okotoks.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "3412 27 St NE",
                    addressLocality: "Calgary",
                    addressRegion: "AB",
                    postalCode: "T1Y 5E2",
                    addressCountry: "Canada"
                  },
                  serviceArea: {
                    "@type": "Place",
                    name: "Calgary, Airdrie, Cochrane, Okotoks"
                  },
                  sameAs: [
                    "https://www.instagram.com/yyccashforcars"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.yyccash.com/#website",
                  url: "https://www.yyccash.com",
                  name: "YYC Cash For Cars",
                  alternateName: "YYC Cash For Cars Calgary",
                  publisher: {
                    "@id": "https://www.yyccash.com/#localbusiness"
                  },
                  inLanguage: "en-US",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://www.yyccash.com/search?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                }
              ]
            }),
          }}
        />

        <Script id="conversion-click-call" strategy="afterInteractive">
          {`
            (function(){
              document.addEventListener('click', function(e){
                if(e.target.closest('a[href^="tel:"]')){
                  gtag('event', 'conversion', {'send_to': 'AW-17598549406/eYWUCLCnyO4bEJ6b0sdB'});
                }
              });
            })();
          `}
        </Script>

        <Script id="conversion-thank-you" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              if (window.location.href.includes('/thank-you')) {
                gtag('event', 'conversion', {'send_to': 'AW-17598549406/Cle9CNH0yO4bEJ6b0sdB'});
              }
            });
          `}
        </Script>
      </body>
    </html>
  );
}
