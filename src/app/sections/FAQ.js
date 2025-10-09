"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you buy cars without titles?",
      answer:
        "Yes! We buy cars without titles in Calgary. We understand that sometimes paperwork gets lost or misplaced, and we're here to help you get cash for your vehicle regardless.",
    },
    {
      question: "How quickly can you pick up my junk car?",
      answer:
        "We offer same-day service in most cases. Once you accept our quote, we'll schedule a pickup time that works for you, often within 24 hours.",
    },
    {
      question: "What types of vehicles do you buy?",
      answer:
        "We buy all types of vehicles including cars, trucks, SUVs, vans, and even motorcycles. Whether your vehicle is running or not, we'll make you an offer.",
    },
    {
      question: "Is there a fee for towing?",
      answer:
        "No, we provide free towing service for all junk cars in the Calgary area. There are no hidden fees or charges for pickup.",
    },
    {
      question: "How do I get paid?",
      answer:
        "We pay cash on the spot at the time of pickup. You'll receive payment immediately after we inspect your vehicle and complete the paperwork.",
    },
    {
      question: "Do you recycle vehicles responsibly?",
      answer:
        "Absolutely! We follow all environmental regulations and ensure that your vehicle is recycled responsibly, with hazardous materials properly disposed of and usable parts salvaged.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
      <div className="">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-black mb-4">
            <span className="mx-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Frequently Asked
            </span>
            Questions
          </h3>
          <p className="text-black max-w-2xl mx-auto text-lg">
            Got questions? We've got answers. Find everything you need to know
            about selling your junk car.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-secondary rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? "shadow-lg" : ""
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center space-x-3">
                  <HelpCircle className="w-5 h-5 text-[#4d88a9]" />
                  <span className="text-xl font-semibold text-primary">
                    {faq.question}
                  </span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#bd3747]" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 bg-gray-50">
                  <p className="text-black leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
