import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactForm from "../sections/Contact";
import { getOgImageForPath } from "@/lib/seo";

export const metadata = {
  alternates: { canonical: "/contact" },
  openGraph: {
    images: [getOgImageForPath("contact")],
  },
  twitter: {
    images: [getOgImageForPath("contact")],
  },
};

export default function page() {
  return (
    <div className="dark:bg-white ">
      <Breadcrumb name={"Contact Us"} />
      <div className="p-4 py-16 md:p-10 lg:p-20">
        <ContactForm />
      </div>
    </div>
  );
}
