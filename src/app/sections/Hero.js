import ContactForm from "./Contact";

const HeroSection = () => {
  return (
    <div className="min-h-screen p-4 py-16 md:p-10 lg:p-20">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                Cash for Junk Cars CALG.
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Get
                <span className="mx-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Top Cash Now
                </span>
                for Your Car
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                We buy junk, wrecked and running vehicles top dollar paid on the spot. Fast, no-hassle offers by phone; free towing and eco-friendly disposal across Calgary and nearby communities.!!
              </p>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Serving Calgary, Airdrie, Cochrane, Okotoks & nearby towns & area.
            </p>
            <div className="">
              <button className="px-4 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Your Cash
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:pl-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
