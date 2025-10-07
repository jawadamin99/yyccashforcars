// What We Tow Section - Futuristic Design
import React from "react";
import { Car, Truck, Minus, Plus, Zap } from "lucide-react";

export default function WhatWeTowSection() {
  const vehicleTypes = [
    {
      id: 1,
      name: "Cars",
      description: "All makes, models, and conditions - running or not",
      icon: Car,
      color: "#4d88a9",
      examples: ["Sedans", "Hatchbacks", "Coupes", "Convertibles"],
    },
    {
      id: 2,
      name: "SUVs",
      description: "From compact crossovers to full-size SUVs",
      icon: Car,
      color: "#bd3747",
      examples: [
        "Crossovers",
        "Full-size SUVs",
        "Luxury SUVs",
        "Off-road SUVs",
      ],
    },
    {
      id: 3,
      name: "Trucks",
      description: "Pickup trucks, commercial trucks, and heavy-duty vehicles",
      icon: Truck,
      color: "#4d88a9",
      examples: [
        "Pickup Trucks",
        "Commercial Trucks",
        "Heavy-Duty",
        "Dump Trucks",
      ],
    },
    {
      id: 4,
      name: "More Vehicles",
      description: "Vans, motorcycles, RVs, and specialty vehicles",
      icon: Plus,
      color: "#bd3747",
      examples: ["Vans", "Motorcycles", "RVs", "ATVs", "Specialty Vehicles"],
    },
  ];

  return (
    <section className="p-4 py-16 md:p-10 lg:p-20 bg-white">
      <div className="">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            What
            <span className="mx-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              We Tow
            </span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We accept all types of vehicles - no matter the condition, make, or
            model
          </p>
        </div>

        {/* Futuristic Vehicle Grid */}
        <div className="relative">
          {/* Main Content */}
          <div className="relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vehicleTypes.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="group relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-gray-200 hover:border-[#bd3747]"
                >
                  {/* Vehicle Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: `${vehicle.color}20` }}
                  >
                    <vehicle.icon
                      className="w-8 h-8"
                      style={{ color: vehicle.color }}
                    />
                  </div>

                  {/* Vehicle Name */}
                  <h4 className="text-xl font-bold text-gray-900 text-center mb-2">
                    {vehicle.name}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
                    {vehicle.description}
                  </p>

                  {/* Examples */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {vehicle.examples.map((example, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                        style={{ borderColor: `${vehicle.color}20` }}
                      >
                        {example}
                      </span>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4d88a9]/5 to-[#bd3747]/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                  {/* Animated Elements */}
                  <div
                    className="absolute top-4 left-4 w-3 h-3 rounded-full"
                    style={{ backgroundColor: `${vehicle.color}20` }}
                  ></div>
                  <div
                    className="absolute bottom-4 right-4 w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: `${vehicle.color}40` }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
