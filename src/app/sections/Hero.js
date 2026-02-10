import Link from "next/link";
import Image from "next/image";
import ContactForm from "./Contact";
import "./styles/Hero.css";
const HeroSection = () => {
  return (
    <div className="min-h-screen p-4 py-16 md:p-10 lg:p-20 heroBg relative overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Cash for cars Calgary"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="heroBgImage"
      />
      <div className="heroBgOverlay" aria-hidden="true" />
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium ">
                Cash for Junk Cars CALGARY
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight ">
                Get
                <span className="mx-4">
                  Top Cash
                </span>
                for Your Car Now
              </h1>

              <p className="text-lg text-white leading-relaxed">
                {/* We buy junk, wrecked and running vehicles top dollar paid on the
                spot. Fast, no-hassle offers by phone; free towing and
                eco-friendly disposal across Calgary and nearby communities.!! */}
              </p>
            </div>
            <p className="text-sm text-white mt-3">
              Serving Calgary, Airdrie, Cochrane, Okotoks & nearby towns & area.
            </p>
            <div className="flex gap-4 items-center">
              <Link href="tel:+15877009806">
                <button className="px-4 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  Call Us Now
                </button>
              </Link>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:pl-8">
            <ContactForm onSide={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
