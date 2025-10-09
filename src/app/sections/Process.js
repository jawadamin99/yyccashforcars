import React from "react";
import {
  Phone,
  DollarSign,
  Car,
  MessageSquare,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function ProcessSection() {
  return (
    <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
      <div className="">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-black mb-4">
            <span className="mx-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              3 Easy Steps
            </span>
            To Sell Your Junk Car in Calgary
          </h3>
          <p className="text-black max-w-2xl mx-auto text-lg">
            Fast, simple and trustworthy process to get instant cash for your unwanted vehicle   same-day pickup and free towing available across Calgary.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
            {/* Step Number */}
            <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-r from-[#4d88a9] to-[#bd3747] rounded-full flex items-center justify-center text-white font-bold text-sm">
              1
            </div>

            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#4d88a9]/20 to-[#bd3747]/20 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-[#4d88a9]" />
            </div>

            {/* Content */}
            <h4 className="text-2xl font-bold text-black mb-4">
              Tell Us About Your Vehicle
            </h4>
            <p className="text-black mb-6 leading-relaxed">
              Use our quick form or call now with your car details. Provide make, model, year and condition and get a firm, no-obligation offer typically within a few hours and always within 24.
            </p>

            {/* Visual Element */}
            <div className="mt-6 p-4 bg-gray-100 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#4d88a9]/20 rounded-full flex items-center justify-center">
                  <Car className="w-6 h-6 text-[#4d88a9]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">
                    Vehicle Details
                  </div>
                  <div className="text-xs text-black">
                    Make, Model, Year, Condition, VIN
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
            {/* Step Number */}
            <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-r from-[#4d88a9] to-[#bd3747] rounded-full flex items-center justify-center text-white font-bold text-sm">
              2
            </div>

            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#4d88a9]/20 to-[#bd3747]/20 rounded-2xl flex items-center justify-center mb-6">
              <MessageSquare className="w-8 h-8 text-[#bd3747]" />
            </div>

            {/* Content */}
            <h4 className="text-2xl font-bold text-black mb-4">
              Receive Your Free Offer
            </h4>
            <p className="text-black mb-6 leading-relaxed">
              We provide a clear, transparent quote with no hidden fees. Phone and online offers are honest and backed by our team so you can choose with confidence.
            </p>

            {/* Visual Element */}
            <div className="mt-6 p-4 bg-gray-100 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#bd3747]/20 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-[#bd3747]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">
                    Firm Cash Quote
                  </div>
                  <div className="text-xs text-black">
                    Accurate offer based on condition
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
            {/* Step Number */}
            <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-r from-[#4d88a9] to-[#bd3747] rounded-full flex items-center justify-center text-white font-bold text-sm">
              3
            </div>

            {/* Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-[#4d88a9]/20 to-[#bd3747]/20 rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-[#4d88a9]" />
            </div>

            {/* Content */}
            <h4 className="text-2xl font-bold text-black mb-4">
              Accept & Get Paid Today
            </h4>
            <p className="text-black mb-6 leading-relaxed">
              Say yes to the offer and we’ll schedule pickup and immediate payment. Same-day removal, licensed paperwork handling and responsible recycling   fast and secure.
            </p>

            {/* Visual Element */}
            <div className="mt-6 p-4 bg-gray-100 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#4d88a9]/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#4d88a9]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-black">
                    Same Day Removal
                  </div>
                  <div className="text-xs text-black">
                    Cash in hand, car removed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
