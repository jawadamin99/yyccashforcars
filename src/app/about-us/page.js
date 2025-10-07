import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import AboutUsSection from "../sections/About";
import ScrapCarsSection from "../sections/Scrape";
import GallerySection from "../sections/Gallery";
import StatsSection from "../sections/Stats";
import TestimonialSection from "../sections/Testimonial";

export default function page() {
  return (
    <div className="dark:bg-white">
      <Breadcrumb name={"About Us"} />
      <AboutUsSection />
      <ScrapCarsSection />
      <StatsSection />
      <GallerySection />
      <TestimonialSection />
    </div>
  );
}
