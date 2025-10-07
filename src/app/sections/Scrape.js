import React from "react";
import { Car, DollarSign, Truck, Recycle, FileText, Clock } from "lucide-react";
import Link from "next/link";

const ScrapCarsSection = () => {
  return (
    <>
      <section className="relative overflow-hidden ">
        <div className=" p-4 py-16 md:p-10 lg:p-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Cash For Scrap Cars in{" "}
                  <span className="bg-gradient-to-r from-[#4d88a9] to-[#bd3747] bg-clip-text text-transparent">
                    Calgary, AB
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get $300 - $10,000 • Fast same-day pickup, free towing & responsible recycling
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4d88a9]/20 to-[#bd3747]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#4d88a9]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      No Title? No Problem!
                    </h3>
                    <p className="text-gray-600 mt-1">
                      We purchase vehicles without titles easy, legal handling
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#4d88a9]/20 to-[#bd3747]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-[#bd3747]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
                      Free Towing
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Free towing and removal across Calgary & nearby communities
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Link href={'/contact'} >
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                  <span className="flex items-center space-x-2">
                    <DollarSign className="w-5 h-5" />
                    <span>Get Your Cash Offer Today!</span>
                  </span>
                </button>
                </Link>
              </div>
            </div>

            {/* Right Content - Futuristic Car Visual */}
            <div className="relative">
              <div className="relative z-10">
                <div className="w-full max-w-md mx-auto">
                  {/* Car Container */}
                  <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
                    {/* Car Silhouette */}
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-r from-[#4d88a9]/30 to-[#bd3747]/30 rounded-2xl flex items-center justify-center">
                        <Car className="w-24 h-24 text-gray-400 opacity-50" />
                      </div>

                      {/* Animated Elements */}
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#4d88a9]/20 rounded-full animate-pulse"></div>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#bd3747]/20 rounded-full animate-ping"></div>
                    </div>

                    {/* Price Tag */}
                    <div className="mt-6 bg-gradient-to-r from-[#4d88a9] to-[#bd3747] rounded-2xl p-4 text-white text-center">
                      <div className="text-sm opacity-90">Your Offer</div>
                      <div className="text-3xl font-bold mt-1">
                        $300 - $10,000
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Geometric Elements */}
              <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div
                  className="absolute top-10 left-10 w-20 h-20 border-2 border-[#4d88a9]/30 rounded-lg transform rotate-45 animate-spin"
                  style={{ animationDuration: "20s" }}
                ></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-[#bd3747]/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-[#4d88a9]/20 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#4d88a9]/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-[#bd3747]/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      <section className="p-4 py-16 md:p-10 lg:p-20">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Why
              <span className="mx-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Choose Us
              </span>
             
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fast, reliable, and hassle-free car buying and scrap removal in Calgary
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4d88a9] to-[#4d88a9]/80 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Locally Owned & Operated
              </h4>
              <p className="text-gray-600">
                Same-day cash offers, transparent pricing and free towing
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#bd3747] to-[#bd3747]/80 rounded-xl flex items-center justify-center mb-4">
                <Recycle className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Eco-Friendly
              </h4>
              <p className="text-gray-600">
                Responsible recycling and certified disposal for every vehicle
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-[#4d88a9] to-[#bd3747] rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Best Prices
              </h4>
              <p className="text-gray-600">
                Guaranteed top dollar highest payouts in Calgary for scrap cars
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrapCarsSection;
