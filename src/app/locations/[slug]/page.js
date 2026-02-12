import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Breadcrumb from "@/app/components/Breadcrumb";
import { MapPin, Phone, Clock, CheckCircle, Truck, Navigation } from "lucide-react";
import Contact from "@/app/sections/Contact";
import Stats from "@/app/sections/Stats";
import Testimonial from "@/app/sections/Testimonial";
import { getOgImageForPath } from "@/lib/seo";

export const dynamic = "force-static";
export const dynamicParams = false;

// Location data with detailed information
const locationsData = [
  {
    id: 1,
    name: "Calgary",
    slug: "calgary",
    area: "Downtown",
    distance: "0 km",
    primary: true,
    image: "/images/car-about.webp",
    heading: "Cash for Cars in Calgary - Fast & Fair Offers",
    description:
      "Welcome to YYC Cash for Cars, Calgary's premier car buying service. Located in the heart of downtown Calgary, we offer the most competitive prices for your used, junk, or scrap vehicles. Our experienced team provides instant cash offers and free towing services across all Calgary neighborhoods. Whether you're in the NE, NW, SE, or SW quadrants, we come to you! We specialize in buying all makes and models, regardless of condition. Get your free quote today and turn your unwanted vehicle into cash within 24 hours. Serving Calgary residents with honesty, transparency, and unbeatable customer service since our establishment.",
    additionalInfo:
      "Calgary is our primary service area, and we take pride in being the most trusted car buying service in the city. We understand the local market and offer fair, competitive prices based on current market values. Our team is available 7 days a week to serve you.",
    neighborhoods: [
      "Downtown Calgary",
      "Beltline",
      "Inglewood",
      "Kensington",
      "Mission",
      "Bridgeland",
      "Forest Lawn",
      "Marlborough",
    ],
    features: [
      "Instant cash offers within minutes",
      "Free towing service across all Calgary areas",
      "Same-day pickup available",
      "All paperwork handled for you",
      "Licensed and insured professionals",
      "Highest prices guaranteed",
      "No hidden fees or charges",
      "Eco-friendly vehicle recycling",
    ],
    hours: "Monday - Sunday: 8:00 AM - 8:00 PM",
    responseTime: "Under 30 minutes",
  },
  {
    id: 2,
    name: "Airdrie",
    slug: "airdrie",
    area: "North Calgary",
    distance: "36 km",
    primary: false,
    image: "/images/car-junk.webp",
    heading: "Cash for Cars in Airdrie - Top Dollar for Your Vehicle",
    description:
      "YYC Cash for Cars proudly serves Airdrie and surrounding areas with professional car buying services. Just 36 km north of Calgary, we extend our exceptional service to Airdrie residents looking to sell their vehicles quickly and hassle-free. Whether you have a running car, non-running vehicle, or complete scrap, we buy it all! Our Airdrie service includes free towing, instant cash payments, and complete documentation assistance. We understand the unique needs of Airdrie's growing community and offer flexible scheduling to accommodate your busy lifestyle. Experience the easiest way to sell your car in Airdrie with our trusted, reliable service.",
    additionalInfo:
      "Airdrie is one of Alberta's fastest-growing cities, and we're committed to providing the same excellent service here as we do in Calgary. Our team regularly services Airdrie with multiple pickups daily.",
    neighborhoods: [
      "Coopers Crossing",
      "Williamstown",
      "Kings Heights",
      "Bayside",
      "Windsong",
      "Reunion",
    ],
    features: [
      "Free towing from anywhere in Airdrie",
      "Quick 30-minute response time",
      "Cash paid on the spot",
      "Buy all vehicle types and conditions",
      "Environmentally responsible disposal",
      "Friendly, professional service",
      "No obligation quotes",
      "Family-owned and operated",
    ],
    hours: "Monday - Sunday: 8:00 AM - 7:00 PM",
    responseTime: "Under 45 minutes",
  },
  {
    id: 3,
    name: "Okotoks",
    slug: "okotoks",
    area: "South Calgary",
    distance: "45 km",
    primary: false,
    image: "/images/scrap.webp",
    heading: "Cash for Cars in Okotoks - Reliable Service You Can Trust",
    description:
      "Located just 45 km south of Calgary, Okotoks residents can count on YYC Cash for Cars for all their vehicle selling needs. We bring our premium car buying service directly to your doorstep in Okotoks. Whether you're upgrading your vehicle, need quick cash, or simply want to get rid of an old car taking up space, we're here to help. Our Okotoks service offers competitive pricing, fast same-day or next-day pickup, and absolutely no hassle. We buy cars in any condition - running, damaged, or scrap. Our transparent process means you'll know exactly what you're getting before we arrive. Join hundreds of satisfied Okotoks customers who chose the smart way to sell their cars.",
    additionalInfo:
      "Okotoks' small-town charm deserves big-city service. We're proud to bring professional, honest car buying to this wonderful community south of Calgary.",
    neighborhoods: [
      "Downtown Okotoks",
      "Westmount",
      "Cimarron",
      "Drake Landing",
      "D'Arcy",
      "Heritage Hills",
    ],
    features: [
      "Competitive market-based pricing",
      "Free vehicle pickup and towing",
      "Instant cash or e-transfer payment",
      "Flexible scheduling options",
      "Licensed and bonded service",
      "Same-day service available",
      "Transparent, honest quotes",
      "Complete title transfer assistance",
    ],
    hours: "Monday - Sunday: 8:00 AM - 7:00 PM",
    responseTime: "Under 1 hour",
  },
  {
    id: 4,
    name: "Cochrane",
    slug: "cochrane",
    area: "West Calgary",
    distance: "36 km",
    primary: false,
    image: "/images/tow-scrap.webp",
    heading: "Cash for Cars in Cochrane - Fast Cash for Your Vehicle",
    description:
      "YYC Cash for Cars extends its trusted service to beautiful Cochrane, just 36 km west of Calgary. We understand that selling a car in Cochrane shouldn't mean driving all the way to Calgary. That's why we come to you! Our Cochrane service offers the same premium experience our Calgary customers enjoy: instant quotes, competitive prices, and hassle-free pickup. Whether you're in the established neighborhoods or newer developments, we service all areas of Cochrane. We buy all vehicle types including trucks, SUVs, sedans, and vans - running or not. Get top dollar for your vehicle without leaving your property. Our professional team handles everything from valuation to towing, making your selling experience smooth and stress-free.",
    additionalInfo:
      "Cochrane's proximity to the mountains and its growing population make it an important service area for us. We're committed to providing exceptional service to this vibrant western community.",
    neighborhoods: [
      "Heritage",
      "Sunset",
      "Riversong",
      "Fireside",
      "Gleneagles",
      "Downtown Cochrane",
    ],
    features: [
      "Free home or office pickup",
      "No-obligation free quotes",
      "All makes and models accepted",
      "Immediate cash payment",
      "Professional courteous service",
      "Proper disposal and recycling",
      "Complete DMV paperwork handled",
      "Available 7 days a week",
    ],
    hours: "Monday - Sunday: 8:00 AM - 7:00 PM",
    responseTime: "Under 45 minutes",
  },
  {
    id: 5,
    name: "Chestermere",
    slug: "chestermere",
    area: "East Calgary",
    distance: "19 km",
    primary: false,
    image: "/images/car-about.webp",
    heading: "Cash for Cars in Chestermere - Your Local Car Buyers",
    description:
      "Chestermere's lakeside community deserves convenient car selling options, and YYC Cash for Cars delivers! Just 19 km east of Calgary, we provide Chestermere residents with fast, friendly, and fair car buying services. Whether you're by the lake or in the newer subdivisions, we'll come to you. We specialize in making the car selling process as easy as possible - no need to clean your car, fix anything, or even have it running. We buy vehicles in any condition and pay top dollar based on current market values. Our Chestermere service includes free towing, instant cash offers, and complete documentation support. Experience why Chestermere residents trust us for honest, reliable car buying service.",
    additionalInfo:
      "Being close to Calgary means we can offer very quick service to Chestermere. Many of our team members live in the area, so we truly understand the community's needs.",
    neighborhoods: [
      "Rainbow Falls",
      "Westmere",
      "East Chestermere",
      "Dawson's Landing",
      "Kinniburgh",
      "Cove",
    ],
    features: [
      "Quick 30-minute average response",
      "Highest cash offers in the area",
      "Free same-day pickup available",
      "Buy cars, trucks, SUVs, vans",
      "Damaged and non-running vehicles OK",
      "Friendly local service",
      "No pressure, no obligation",
      "Secure payment methods",
    ],
    hours: "Monday - Sunday: 8:00 AM - 8:00 PM",
    responseTime: "Under 30 minutes",
  },
  {
    id: 6,
    name: "High River",
    slug: "high-river",
    area: "South Region",
    distance: "68 km",
    primary: false,
    image: "/images/car-junk.webp",
    heading: "Cash for Cars in High River - Serving Southern Alberta",
    description:
      "YYC Cash for Cars is proud to serve High River and the surrounding southern Alberta region. Located 68 km south of Calgary, High River residents can access our professional car buying services without the drive to the city. We come directly to you! Whether you have a vintage truck, a family sedan, or a non-running vehicle, we're interested. Our High River service offers competitive pricing, free towing, and fast payment. We understand rural vehicle needs and accept farm trucks, work vehicles, and personal cars in any condition. Our team respects your time and property, arriving when scheduled and completing transactions efficiently. Discover why High River vehicle owners choose us for honest appraisals and excellent customer service.",
    additionalInfo:
      "High River holds a special place in Alberta's history and community. We're honored to serve this resilient town and offer the same quality service regardless of the distance from Calgary.",
    neighborhoods: [
      "Downtown High River",
      "Westside",
      "Sunrise Estates",
      "Eagle Ridge",
      "Highwood Village",
      "Flatiron",
    ],
    features: [
      "Serve High River and surrounding areas",
      "Buy farm trucks and work vehicles",
      "Free long-distance towing",
      "Fair market value pricing",
      "Experienced professional buyers",
      "Quick and easy process",
      "Cash or certified check payment",
      "Full administrative support",
    ],
    hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
    responseTime: "Under 1.5 hours",
  },
  {
    id: 7,
    name: "Strathmore",
    slug: "strathmore",
    area: "East Region",
    distance: "52 km",
    primary: false,
    image: "/images/scrap.webp",
    heading: "Cash for Cars in Strathmore - East of Calgary Service",
    description:
      "Strathmore and the eastern region of Calgary can count on YYC Cash for Cars for reliable, professional vehicle buying services. Located 52 km east of Calgary, Strathmore is well within our service area. We offer the same exceptional service to Strathmore residents as we do in Calgary proper. Whether you're selling a personal vehicle, getting rid of an old farm truck, or disposing of a damaged car, we buy it all. Our Strathmore service includes free estimates, competitive pricing based on actual market values, and convenient pickup scheduling. We handle all the paperwork, towing, and payment on the spot. No hidden fees, no surprises - just honest, straightforward service. Call us today for your free quote!",
    additionalInfo:
      "Strathmore's agricultural heritage means we often work with trucks and work vehicles. We have extensive experience with all vehicle types and offer fair pricing for each.",
    neighborhoods: [
      "Downtown Strathmore",
      "Westview",
      "Sagewood",
      "Meadow View Estates",
      "East Lake",
      "Kinsmen Park",
    ],
    features: [
      "Specialists in trucks and work vehicles",
      "Free vehicle removal and towing",
      "Fair, transparent pricing",
      "Same or next-day service",
      "Cash payment on pickup",
      "Licensed and insured team",
      "No title? We can help!",
      "Courteous, respectful service",
    ],
    hours: "Monday - Saturday: 8:00 AM - 6:00 PM",
    responseTime: "Under 1 hour",
  },
  {
    id: 8,
    name: "Canmore",
    slug: "canmore",
    area: "Mountain Region",
    distance: "104 km",
    primary: false,
    image: "/images/tow-scrap.webp",
    heading: "Cash for Cars in Canmore - Mountain Community Service",
    description:
      "Even in the beautiful mountain town of Canmore, 104 km from Calgary, YYC Cash for Cars brings professional vehicle buying services directly to you. We understand that living in the mountains comes with unique vehicle challenges - harsh winters, mountain roads, and wear and tear on vehicles. Whether your car has reached the end of its life, you're upgrading, or you need quick cash, we're here to help. Our Canmore service offers free towing down from the mountains, competitive pricing, and flexible scheduling to work around your mountain lifestyle. We buy all vehicles regardless of condition and pay cash on the spot. Experience hassle-free car selling in Canmore with Alberta's most trusted car buyers.",
    additionalInfo:
      "Canmore's mountain location requires special consideration for towing and transport. We have the equipment and expertise to safely remove vehicles from mountain properties.",
    neighborhoods: [
      "Downtown Canmore",
      "Three Sisters",
      "Cougar Creek",
      "Spring Creek",
      "Elk Run",
      "Peaks",
    ],
    features: [
      "Free mountain towing service",
      "Winter vehicle specialists",
      "All terrain pickup capability",
      "Competitive mountain region pricing",
      "Flexible mountain scheduling",
      "Buy damaged winter vehicles",
      "Professional mountain drivers",
      "Eco-conscious disposal",
    ],
    hours: "Monday - Saturday: 9:00 AM - 6:00 PM",
    responseTime: "1.5 - 2 hours",
  },
];

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const location = locationsData.find((loc) => loc.slug === slug);

  if (!location) {
    return {
      title: "Location Not Found",
    };
  }

  return {
    title: `${location.heading} | YYC Cash for Cars`,
    description: location.description.substring(0, 160),
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title: `${location.heading} | YYC Cash for Cars`,
      description: location.description.substring(0, 160),
      images: [
        {
          url: getOgImageForPath(`locations/${location.slug}`),
          width: 1200,
          height: 630,
          alt: location.heading,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${location.heading} | YYC Cash for Cars`,
      description: location.description.substring(0, 160),
      images: [getOgImageForPath(`locations/${location.slug}`)],
    },
  };
}

// Generate static params for all locations
export async function generateStaticParams() {
  return locationsData.map((location) => ({
    slug: location.slug,
  }));
}

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const location = locationsData.find((loc) => loc.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <div className="dark:bg-white">
      <Breadcrumb name={location.name} />

      {/* Location Detail Section */}
      <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Image Side */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src={location.image}
                  alt={`Cash for cars in ${location.name}`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 border-2 border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-sm font-semibold text-black">Hours</span>
                  </div>
                  <p className="text-xs text-black">{location.hours}</p>
                </div>

                <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl p-4 border-2 border-secondary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Navigation className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-semibold text-black">Distance</span>
                  </div>
                  <p className="text-xs text-black">{location.distance} from Calgary</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">{location.area}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 font-semibold">
                      Available Now - {location.responseTime} Response
                    </span>
                  </div>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                {location.heading}
              </h1>

              <p className="text-black leading-relaxed text-base md:text-lg mb-6">
                {location.description}
              </p>

              {location.slug === "calgary" ? (
                <p className="text-black leading-relaxed text-base mb-8">
                  Calgary is our primary service area, and we take pride in
                  being the most{" "}
                  <a
                    href="https://citywidecashforcars.ca/locations/cash-for-cars-calgary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:text-secondary underline"
                  >
                    trusted car buying service
                  </a>{" "}
                  in the city. We understand the local market and offer fair,
                  competitive prices based on current market values. Our team is
                  available 7 days a week to serve you.
                </p>
              ) : (
                <p className="text-black leading-relaxed text-base mb-8">
                  {location.additionalInfo}
                </p>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+15877009806"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold text-base px-8 py-4 rounded-full hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Now for Quote
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-base px-8 py-4 rounded-full border-2 border-primary hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all duration-300"
                >
                  Get Free Estimate
                </a>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Why Choose Us in
                <span className="mx-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {location.name}
                </span>
              </h2>
              <p className="text-black max-w-2xl mx-auto text-lg">
                Professional service you can trust with unbeatable benefits
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {location.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-100 hover:border-primary/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-black font-medium text-sm leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Neighborhoods Served */}
          {location.neighborhoods && location.neighborhoods.length > 0 && (
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                  Neighborhoods We Serve in {location.name}
                </h3>
                <p className="text-black">
                  We provide service to all areas of {location.name}
                </p>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border-2 border-primary/10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {location.neighborhoods.map((neighborhood, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-black"
                    >
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium">{neighborhood}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Service Promise */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
            <Truck className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Sell Your Car in {location.name}?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto opacity-95">
              Get an instant quote now! We offer same-day pickup, free towing, and
              cash on the spot. No hassle, no hidden fees.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:+15877009806"
                className="bg-white text-primary font-bold px-8 py-4 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                📞 (587) 700-9806
              </a>
              <a
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-primary transform hover:scale-105 transition-all duration-300"
              >
                Request Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <Stats />
      <Contact />
      <Testimonial />
    </div>
  );
}
