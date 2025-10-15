// Stats Section
import React from "react";
import { Users, DollarSign, Car, Clock, CheckCircle, Star, StarIcon, Smile } from "lucide-react";
export default function StatsSection() {
  const stats = [
    {
      id: 1,
      number: "2500+",
      label: "Cars Purchased",
      icon: Car,
      color: "#4d88a9",
    },

    {
      id: 3,
      number: "98%",
      label: "Customer Satisfaction",
      icon: Smile,
      color: "#bd3747",
    },
    {
      id: 4,
      number: "8+",
      label: "Years of Experience",
      icon: Clock,
      color: "#4d88a9",
    },
    // {
    //   id: 6,
    //   number: "10,000+",
    //   label: "Happy Customers",
    //   icon: Users,
    //   color: "#bd3747",
    // },
    // {
    //   id: 2,
    //   number: "2500+",
    //   label: "Cars purchased",
    //   icon: DollarSign,
    //   color: "#4d88a9",
    // },
    //  {
    //   id: 5,
    //   number: "5",
    //   label: "Rating",
    //   icon: StarIcon,
    //   color: "#bd3747",
    // },
  ];

  return (
    <section className="p-4 py-16 md:p-10 lg:p-20 text-black bg-white">
      <div className="">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-4">
            Our
            <span className="mx-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Stats
            </span>
          </h3>
          <p className="text-black max-w-2xl mx-auto text-lg">
            Our track record speaks for itself - trusted by thousands of Calgary
            residents
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="bg-white   rounded-2xl p-8 text-center shadow-lg transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
              </div>

              {/* Number */}
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: stat.color }}
              >
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-xl font-semibold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                {stat.label}
              </div>

              {/* Animated Element */}
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-transparent to-white/30 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
