// Gallery Section - Responsive Mosaic Layout
import Image from "next/image";
import React from "react";

export default function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      image: "/images/g1.png",
      width: "w-full md:w-1/3",
      height: "h-48 md:h-64",
    },
    {
      id: 2,
      image: "/images/g2.png",
      width: "w-full md:w-1/3",
      height: "h-48 md:h-64",
    },
    {
      id: 3,
      image: "/images/g3.png",
      width: "w-full md:w-1/3",
      height: "h-48 md:h-64",
    },
    {
      id: 4,
      image: "/images/g4.png",
      width: "w-full md:w-2/3",
      height: "h-48 md:h-64",
    },
    {
      id: 5,
      image: "/images/g5.png",
      width: "w-full md:w-1/3",
      height: "h-48 md:h-64",
    },
    {
      id: 6,
      image: "/images/g6.png",
      width: "w-full md:w-1/3",
      height: "h-48 md:h-64",
    },
    {
      id: 7,
      image: "/images/g7.png",
      width: "w-full md:w-1/3",
      height: "h-48 md:h-64",
    },
  ];

  return (
    <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
      <div className="">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-black mb-4">
            Our
            <span className="mx-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Work Gallery
            </span>
          </h3>
          <p className="text-black max-w-2xl mx-auto text-lg">
            Experience our futuristic approach to junk car removal and recycling
          </p>
        </div>

        {/* Responsive Mosaic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Row 1 - 3 equal images */}
          <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Image
              width={700}
              height={700}
              src={galleryItems[0].image}
              alt="Junk Car Collection"
              className={`w-full ${galleryItems[0].height} object-cover`}
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Image
              width={700}
              height={700}
              src={galleryItems[1].image}
              alt="Free Towing Service"
              className={`w-full ${galleryItems[1].height} object-cover`}
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Image
              width={700}
              height={700}
              src={galleryItems[2].image}
              alt="Cash Payment"
              className={`w-full ${galleryItems[2].height} object-cover`}
            />
          </div>

          {/* Row 2 - 1 wide image */}
          <div className="md:col-span-2 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Image
              width={800}
              height={700}
              src={galleryItems[3].image}
              alt="Eco-Friendly Recycling"
              className={`w-full ${galleryItems[3].height} object-cover`}
            />
          </div>

          {/* Row 3 - 2 images */}
          <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Image
              width={700}
              height={700}
              src={galleryItems[4].image}
              alt="Same Day Service"
              className={`w-full ${galleryItems[4].height} object-cover`}
            />
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Image
              width={700}
              height={700}
              src={galleryItems[5].image}
              alt="Customer Satisfaction"
              className={`w-full ${galleryItems[5].height} object-cover`}
            />
          </div>
          <div className="md:col-span-2 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <Image
              width={800}
              height={700}
              src={galleryItems[6].image}
              alt="Eco-Friendly Recycling"
              className={`w-full ${galleryItems[3].height} object-cover`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
