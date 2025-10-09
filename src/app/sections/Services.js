import React from "react";
import { DollarSign, Truck, Recycle, Zap, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
      <div className="">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-black mb-4">
            Our
            <span className="mx-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services in Calgary
            </span>
          </h3>
          <p className="text-black max-w-2xl mx-auto text-lg">
            Fast, professional cash-for-cars and scrap removal across Calgary &
            surrounding areas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Service 1: Cash for Junk Cars */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <Image
              src={"/images/car-junk.png"}
              width={600}
              height={600}
              className="h-80 w-full rounded-t-3xl mx-auto"
            />

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#4d88a9] to-[#4d88a9]/80 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-black">
                  Cash for Junk Cars
                </h4>
              </div>
              <p className="text-black mb-6 leading-relaxed">
                Get top dollar for your unwanted vehicle in Calgary any make or
                condition. We pay cash on the spot and manage paperwork, title
                transfer, and fast pickup.
              </p>

              {/* Buttons */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <Link href={"/contact"}>
                  <button className="w-full  bg-gradient-to-r from-[#4d88a9] to-[#4d88a9]/80 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Get Cash Instantly</span>
                  </button>
                </Link>
                <Link href={"/services/cash-for-junk-cars"}>
                  <button className="w-full  border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-[#4d88a9] hover:text-[#4d88a9] transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Read More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Service 2: Scrap Car Removal */}
          <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <Image
              src={"/images/tow-scrap.png"}
              width={600}
              height={600}
              className="h-80 w-full rounded-t-3xl mx-auto"
            />

            {/* Content */}
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-[#bd3747] to-[#bd3747]/80 rounded-xl flex items-center justify-center">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-black">
                  Scrap Car Removal
                </h4>
              </div>
              <p className="text-black mb-6 leading-relaxed">
                Free towing and complete removal of scrap vehicles anywhere in
                Calgary. We handle pickup, responsible recycling, and all
                disposal paperwork.
              </p>

              {/* Buttons */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <Link href={"tel:+15877009806"}>
                  <button className="w-full bg-gradient-to-r from-[#bd3747] to-[#bd3747]/80 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Request Free Towing</span>
                  </button>
                </Link>
                <Link href={"/services/scrap-car-removal"}>
                  <button className="w-full border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-[#bd3747] hover:text-[#bd3747] transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Read More</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
