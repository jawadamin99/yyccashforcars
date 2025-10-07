import Image from "next/image";
import HeroSection from "./sections/Hero";
import AboutUsSection from "./sections/About";
import ScrapCarsSection from "./sections/Scrape";
import Services from "./sections/Services";
import ProcessSection from "./sections/Process";
import StatsSection from "./sections/Stats";
import GallerySection from "./sections/Gallery";
import FAQSection from "./sections/FAQ";
import TestimonialSection from "./sections/Testimonial";
import WorkingAreasSection from "./sections/WorkingAreas";
import WhatWeTowSection from "./sections/WhatTow";

export default function Home() {
  return (
    <div className="bg-white dark:bg-white">
    <HeroSection />
    <AboutUsSection />
    <ScrapCarsSection />
    <Services />
    <WhatWeTowSection />
    <ProcessSection />
    <StatsSection />
    <GallerySection />
    <WorkingAreasSection />
    <FAQSection />
    <TestimonialSection />
    </div>
  );
}
