import React from "react";

const Home = () => {
  return (
    <main className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        {/* Background Image Placeholder with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000"
            alt="Modern Building"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 animate-in slide-in-from-left duration-700">
              Find Your <span className="text-secondary">Perfect</span>{" "}
              Comfortable Home
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed animate-in slide-in-from-left duration-700 delay-150">
              Mega Properties provides the most comfortable environments for
              people to live in. We deal with premium rentals of apartments and
              houses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-left duration-700 delay-300">
              <button className="bg-secondary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/20">
                Browse Properties
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                List Your House
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-dark text-white py-12 relative z-20 -mt-10 mx-auto max-w-5xl rounded-2xl shadow-2xl border border-gray-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 text-center">
          <div>
            <div className="text-3xl font-bold text-secondary mb-1">500+</div>
            <div className="text-sm text-gray-400 font-medium">
              Happy Families
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-1">1.2k+</div>
            <div className="text-sm text-gray-400 font-medium">
              Houses Rented
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-1">15+</div>
            <div className="text-sm text-gray-400 font-medium">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary mb-1">100%</div>
            <div className="text-sm text-gray-400 font-medium">
              Comfort Rating
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
                alt="Comfortable Interior"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary rounded-3xl -z-10 hidden lg:block"></div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">
                About the Company
              </h2>
              <h3 className="text-4xl font-bold text-dark mb-6 leading-tight">
                Providing Comfortable Environments for Modern Living
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At Mega Properties, we believe that a home is more than just a
                place; it's a sanctuary. We meticulously curate our listings to
                ensure that every house and apartment we offer provides the
                highest level of comfort and security.
              </p>
              <div className="space-y-4">
                {[
                  "Comfortable and serene environments",
                  "Vetted and secure neighborhoods",
                  "Transparent rental processes",
                  "Available vacant houses for quick move-ins",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="bg-secondary/10 p-1 rounded-full">
                      <svg
                        className="h-5 w-5 text-secondary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-dark font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-dark mb-4">
                Featured Properties
              </h2>
              <p className="text-gray-600 max-w-xl">
                Explore our handpicked selection of premium apartments and
                houses available for rent.
              </p>
            </div>
            <button className="hidden md:block text-primary font-bold border-b-2 border-primary hover:text-secondary hover:border-secondary transition-all pb-1">
              View All Properties
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Duplex Apartment",
                location: "Victoria Island, Lagos",
                price: "₦5,000,000/yr",
                type: "Apartment",
                img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Modern 4-Bedroom Villa",
                location: "Lekki Phase 1, Lagos",
                price: "₦7,500,000/yr",
                type: "House",
                img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
              },
              {
                title: "Elegant Studio Apartment",
                location: "Ikoyi, Lagos",
                price: "₦3,200,000/yr",
                type: "Apartment",
                img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
              },
            ].map((prop, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={prop.img}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {prop.type}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-dark/70 backdrop-blur-sm text-white px-3 py-2 rounded-xl text-lg font-bold">
                    {prop.price}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-dark mb-2">
                    {prop.title}
                  </h4>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <svg
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {prop.location}
                  </div>
                  <div className="flex justify-between items-center border-t pt-4">
                    <div className="flex space-x-4">
                      <div className="flex items-center text-dark font-medium text-sm">
                        <span className="mr-1 text-secondary">3</span> Bed
                      </div>
                      <div className="flex items-center text-dark font-medium text-sm">
                        <span className="mr-1 text-secondary">2</span> Bath
                      </div>
                    </div>
                    <button className="text-secondary font-bold hover:underline">
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-secondary tracking-widest uppercase mb-4">
              Why Choose Us
            </h2>
            <h3 className="text-4xl font-bold text-dark">
              Exceptional Services for Everyone
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Premium Locations",
                desc: "We offer properties in the most sought-after and secure neighborhoods.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                ),
              },
              {
                title: "Comfortable Environment",
                desc: "Our houses are designed to provide a serene and stress-free living experience.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                ),
              },
              {
                title: "Professional Support",
                desc: "Our team of experts is always available to help you with your property needs.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ),
              },
              {
                title: "Fast Verification",
                desc: "Get your documents verified quickly and move into your dream home in no time.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                ),
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gray-100 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:bg-primary group-hover:text-white transition-colors">
                  <svg
                    className="h-7 w-7 text-primary group-hover:text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {service.icon}
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-dark mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Find Your New Comfortable Home?
              </h2>
              <p className="text-primary-100 text-lg mb-10 text-gray-200">
                Join thousands of happy families who have found their perfect
                living space through Mega Properties.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all">
                  Contact Us Today
                </button>
                <button className="bg-dark/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                  View Vacant Houses
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
