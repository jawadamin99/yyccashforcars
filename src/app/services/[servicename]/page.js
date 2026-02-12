import React from "react";
import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import { notFound } from "next/navigation"; // Import Next.js navigation for handling 404
import { CheckCircle, CircleCheck } from "lucide-react";
import { getOgImageForPath } from "@/lib/seo";

// A static list of services. You can move this to a separate file or fetch it from an API.
const services = [
  {
    id: 1,
    slug: "cash-for-junk-cars",
    name: "Cash for Junk Cars",
    desc: "Top-dollar cash for junk cars in Calgary and surrounding communities. We purchase vehicles in any condition   running, damaged, salvaged or non-operational   and provide a transparent, no-obligation cash offer quickly. Our streamlined process includes instant quotes, same-day payments, and friendly, licensed staff who handle title transfer and paperwork so you get paid fast with zero hassle.",
    img: "/images/car-junk.webp",
    features: [
      "Instant, no-obligation cash offers by phone or online",
      "We buy vehicles in any condition   junk, wrecked or running",
      "Same-day payment and licensed paperwork handling",
      "Coverage across Calgary, Airdrie, Cochrane, Okotoks and nearby",
    ],
    additionalInfo:
      "Selling a junk car can be quick and secure   we arrange pickup, complete title transfer and provide immediate payment. Ask about no-title options and same-day removal to avoid towing costs.",
  },
  {
    id: 2,
    slug: "scrap-car-removal",
    name: "Scrap Car Removal",
    desc: "Professional scrap car removal with free towing and responsible disposal throughout Calgary. We collect scrap, end-of-life and abandoned vehicles from any location, provide eco-friendly recycling, and supply the documentation required for disposal. Our team ensures vehicles are dismantled or recycled according to provincial regulations, prioritizing safe handling and minimizing environmental impact.",
    img: "/images/tow-scrap.webp",
    features: [
      "Free towing and pickup from any Calgary address",
      "Responsible recycling and certified disposal processes",
      "Full removal service including cleanup and paperwork",
      "Flexible scheduling with same-day or next-day pickup options",
    ],
    additionalInfo:
      "We follow Alberta recycling standards and provide proof of disposal when requested. Contact us for quotes and to schedule a convenient, no-cost removal appointment.",
  },
];

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return services.map((service) => ({ servicename: service.slug }));
}

export async function generateMetadata({ params }) {
  const { servicename } = await params;
  const decodedServiceName = decodeURIComponent(servicename);
  const service = services.find((s) => s.slug === decodedServiceName);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const description = service.desc
    ? service.desc.substring(0, 160)
    : service.name;

  const ogImage = getOgImageForPath(`services/${service.slug}`);

  return {
    title: `${service.name} | YYC Cash for Cars`,
    description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.name} | YYC Cash for Cars`,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: service.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | YYC Cash for Cars`,
      description,
      images: [ogImage],
    },
  };
}

export default async function ServicePage({ params }) {
  const { servicename } = await params; // Await the params prop

  // Decode the servicename to handle URL-encoded characters
  const decodedServiceName = decodeURIComponent(servicename);

  // Find the matching service
  const service = services.find((s) => s.slug === decodedServiceName);

  if (!service) {
    notFound(); // Render the 404 page if the service is not found
  }

  return (
    <div>
      <Breadcrumb name={service?.name} />

      <div className="p-4 py-16 md:p-10 lg:p-20 dark:bg-white">
        <div className="relative mb-20 rounded-2xl shadow-2xl bg-white flex flex-col md:flex-row gap-0 lg:gap-20 overflow-hidden">
          {/* Service Number */}
          <span className="absolute top-1/5 lg:top-0 -left-12 text-[220px] font-bold text-primary opacity-15">
            {service.id < 10 ? `0${service.id}` : service.id}
          </span>

          {/* Content Section */}
          <div className="flex-1 p-6 lg:p-10 lg:py-32">
            <h1 className="text-4xl font-bold mb-4 dark:text-black">
              {service.name}
            </h1>
            <p className="text-gray-600 text-sm mb-6">{service.desc}</p>

            {/* Key Features List */}
            <ul className="space-y-3 mb-6">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm dark:text-black"
                >
                  <CircleCheck size={16} className="text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Additional Information */}
            <p className="text-gray-600 text-sm">{service.additionalInfo}</p>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <Image
              src={service.img}
              alt={service.name}
              width={500}
              height={500}
              className="clipImgLeft rounded-2xl w-full h-full min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
