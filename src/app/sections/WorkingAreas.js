// Working Areas Section - Advanced Futuristic Design
import React from "react";
import { MapPin, Truck, CheckCircle, Star, Globe, Compass } from "lucide-react";

export default function WorkingAreasSection() {
  const workingAreas = [
    {
      id: 1,
      name: "Calgary",
      area: "Downtown",
      distance: "0 km",
      primary: true,
      color: "#4d88a9",
    },
    {
      id: 2,
      name: "Airdrie",
      area: "North Calgary",
      distance: "36 km",
      primary: false,
      color: "#bd3747",
    },
    {
      id: 3,
      name: "Okotoks",
      area: "South Calgary",
      distance: "45 km",
      primary: false,
      color: "#4d88a9",
    },
    {
      id: 4,
      name: "Cochrane",
      area: "West Calgary",
      distance: "36 km",
      primary: false,
      color: "#bd3747",
    },
    {
      id: 5,
      name: "Chestermere",
      area: "East Calgary",
      distance: "19 km",
      primary: false,
      color: "#4d88a9",
    },
    {
      id: 6,
      name: "High River",
      area: "South Region",
      distance: "68 km",
      primary: false,
      color: "#bd3747",
    },
    {
      id: 7,
      name: "Strathmore",
      area: "East Region",
      distance: "52 km",
      primary: false,
      color: "#4d88a9",
    },
    {
      id: 8,
      name: "Canmore",
      area: "Mountain Region",
      distance: "104 km",
      primary: false,
      color: "#bd3747",
    },
  ];

  return (
    <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
      <div className="">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Our
            <span className="mx-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Service Network
            </span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Advanced coverage across Calgary and surrounding regions with
            real-time service tracking
          </p>
        </div>

        {/* Futuristic Map Visualization */}
        <div className="relative">
          {/* Main Content */}
          <div className="relative z-10">
            {/* Interactive Service Area Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {workingAreas.map((area) => (
                <div
                  key={area.id}
                  className={`group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${
                    area.primary
                      ? "border-[#4d88a9] bg-gradient-to-br from-[#4d88a9]/10 to-[#bd3747]/10"
                      : "border-gray-200 hover:border-[#bd3747]"
                  }`}
                >
                  {/* Distance Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-[#4d88a9] to-[#bd3747] rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-white">
                      {area.distance}
                    </span>
                  </div>

                  {/* Area Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4d88a9] to-[#bd3747] rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Truck className="w-8 h-8 text-white" />
                  </div>

                  {/* Area Info */}
                  <div className="text-center">
                    <h5 className="text-xl font-bold text-gray-900 mb-1">
                      {area.name}
                    </h5>
                    <p className="text-gray-600 text-sm mb-3">{area.area}</p>

                    {/* Service Status */}
                    <div className="flex items-center justify-center space-x-2 text-xs">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 font-medium">
                        Available Now
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4d88a9]/5 to-[#bd3747]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                  {/* Animated Elements */}
                  <div
                    className="absolute bottom-4 left-4 w-4 h-4 bg-[#4d88a9]/20 rounded-full animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div className="absolute top-1/2 right-4 w-2 h-2 bg-[#bd3747]/20 rounded-full animate-pulse"></div>
                </div>
              ))}
            </div>

            {/* Coverage Visualization */}
            <div className="mt-16 text-center">
              <div className="inline-block relative">
                {/* Animated Rings */}
                <div className="w-32 h-32 border-4 border-[#4d88a9]/30 rounded-full absolute -top-8 -left-8 animate-pulse"></div>
                <div
                  className="w-48 h-48 border-4 border-[#bd3747]/30 rounded-full absolute -top-16 -left-16 animate-ping"
                  style={{ animationDelay: "1s" }}
                ></div>

                {/* Central Card */}
                <div className="bg-white px-8 py-6 rounded-2xl shadow-lg relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <Compass className="w-8 h-8 text-[#4d88a9]" />
                    <Star className="w-6 h-6 text-[#bd3747] ml-2" />
                  </div>
                  <h5 className="text-xl font-bold text-gray-900 mb-2">
                    100+ KM Service Radius
                  </h5>
                  <p className="text-gray-600 mb-4">
                    Free towing within our coverage area
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
