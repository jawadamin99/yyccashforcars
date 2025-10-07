import { Users, ShieldCheck } from "lucide-react";
export default function AboutUsSection() {
  return (
    <div className="p-4 py-16 md:p-10 lg:p-20 bg-white">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image with Absolute Divs */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/car-about.png"
                alt="About Cash 4Cars"
                className="w-full h-full object-cover"
              />

              {/* Bottom Left Absolute Div */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-3">
                  <ShieldCheck
                    size={50}
                    aria-hidden="true"
                    className="text-secondary"
                  />
                  <div>
                    <div className="text-secondary font-bold text-lg mb-1">
                      Licensed & Insured Vehicle Buyers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                About Us
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <span className="mr-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Top Cash Now
              </span>
              Cash For Cars in Calgary AB
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Calgary cash buyer for junk and used cars quick offers by phone.
              We buy all makes and conditions and pay fair, on-the-spot cash
              with free towing. Same-day pickup, licensed title handling,
              eco-friendly disposal across Calgary. Fast payment, no hassle,
              professional removal.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We deliver fast, friendly service with clear offers and upfront
              pricing. We follow eco-friendly recycling and certified disposal
              across Alberta. across Calgary AB.
            </p>

            <div className="flex gap-4 items-center">
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3 px-6 font-bold text-white">
                <p>Proudly Local & Family-Owned</p>
              </div>
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-3 px-6 font-bold text-white">
                <p>Completely Insured Services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
