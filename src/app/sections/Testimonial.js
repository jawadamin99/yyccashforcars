"use client";
import React, { useState, useEffect } from "react";
import { Star, Quote, User } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah M",
      location: "NW Calgary",
      rating: 5,
      content:
        "I was amazed at how easy it was to sell my car in Calgary. I got my quote, scheduled the pickup, and had cash in hand the same day!”",
      avatar: "https://placehold.co/80x80/4d88a9/ffffff?text=SM",
    },
    {
      id: 2,
      name: "John K",
      location: "SE Calgary",
      rating: 5,
      content:
        "Fast and friendly! No hassle at all. Highly recommend them if you’re in Calgary!",
      avatar: "https://placehold.co/80x80/bd3747/ffffff?text=JK",
    },
    {
      id: 3,
      name: "Chelsa Bymen",
      location: "Calgary",
      rating: 5,
      content:
        "Amazing gentelmen to deal with! Awsome service and super super kind.",
      avatar: "https://placehold.co/80x80/4d88a9/ffffff?text=CB",
    },
    {
      id: 4,
      name: "Jorden Pyle",
      location: "Calgary",
      rating: 5,
      content:
        "Very recommended for selling your used car. Very nice guy easy to deal with and super quick.",
      avatar: "https://placehold.co/80x80/bd3747/ffffff?text=JP",
    },
    {
      id: 5,
      name: "Elaine Morningstar",
      location: "Okotoks",
      rating: 5,
      content:
        "Great, friendly, quick service and responses. I felt time was taken to explain what they buy and how much it's worth and why. ",
      avatar: "https://placehold.co/80x80/4d88a9/ffffff?text=EM",
    },
    {
      id: 6,
      name: "Γρηγόρης Μος",
      location: "Airdrie",
      rating: 5,
      content:
        "Excellent service and very quick and reasonable offer on my car",
      avatar: "https://placehold.co/80x80/bd3747/ffffff?text=ΓΜ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // Default for desktop

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet
      } else {
        setVisibleCount(3); // Desktop
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCount >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? testimonials.length - visibleCount : prevIndex - 1
    );
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleCount
  );

  return (
    <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
      <div className="">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-black mb-4">
            Our
            <span className="mx-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Happy Customers
            </span>
          </h3>
          <p className="text-black max-w-2xl mx-auto text-lg">
            Don't just take our word for it - hear from our satisfied customers
            across Canada
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="flex justify-center mb-8 space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#4d88a9] hover:text-white transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#bd3747] hover:text-white transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>

          {/* Testimonial Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
              >
                {/* Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-primary fill-primary"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <Quote className="w-10 h-10 text-secondary mb-4" />
                </div>

                {/* Quote */}
                <div className="mb-6">
                  <p className="text-black leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-black">
                      {testimonial.name}
                    </h4>
                    <p className="text-black text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
              length: Math.ceil(testimonials.length / visibleCount),
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * visibleCount)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex >= i * visibleCount &&
                  currentIndex < (i + 1) * visibleCount
                    ? "bg-[#4d88a9] shadow-md"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
