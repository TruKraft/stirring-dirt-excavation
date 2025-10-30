import Image from "next/image";

export const metadata = {
  title: "Services | Stirring Dirt Excavation",
  description: "Professional excavation services in Logan, Utah including yard preparation, sod installation, grading, demolition, and more.",
};

export default function Services() {
  const services = [
    {
      title: "Yard Preparation",
      description: "Expert land preparation for your next landscaping project. We ensure your yard is leveled, graded, and ready for whatever comes next.",
      details: [
        "Site clearing and debris removal",
        "Land leveling and grading",
        "Soil conditioning and preparation",
        "Drainage planning and implementation",
        "Foundation preparation for structures",
      ],
      image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=2070",
    },
    {
      title: "Sod Installation",
      description: "Transform your property with professional sod installation. Get an instant, lush green lawn that's ready to enjoy right away.",
      details: [
        "Ground preparation and soil testing",
        "Professional sod selection",
        "Proper installation techniques",
        "Initial watering and care guidance",
        "Seam blending for natural appearance",
      ],
      image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2070",
    },
    {
      title: "Decorative Rock Work",
      description: "Beautiful decorative rock installations that add character and low-maintenance elegance to your landscape design.",
      details: [
        "Rock garden design and installation",
        "Pathway and border creation",
        "Drainage rock placement",
        "Multiple stone types and colors available",
        "Landscape fabric installation",
      ],
      image: "/istockphoto-2155046393-612x612.jpg",
    },
    {
      title: "Driveway Grading & Gravel Restoration",
      description: "Restore your driveway to smooth, even condition. We grade and resurface gravel driveways for improved drainage and longevity.",
      details: [
        "Driveway grading and leveling",
        "Pothole repair and filling",
        "Gravel delivery and spreading",
        "Drainage improvement",
        "Crown restoration for water runoff",
      ],
      image: "/pexels-curtis-adams-1694007-3935333.jpg",
    },
    {
      title: "Demolition",
      description: "Safe and efficient demolition services for structures, concrete, and more. We handle projects of all sizes with care and precision.",
      details: [
        "Small structure demolition",
        "Concrete breaking and removal",
        "Deck and fence removal",
        "Safe debris handling",
        "Site cleanup and leveling",
      ],
      image: "/pexels-life-of-pix-2489.jpg",
    },
    {
      title: "Junk Removal & Hauling",
      description: "Fast, reliable junk removal and hauling services. We'll clear out unwanted items and debris, leaving your property clean and organized.",
      details: [
        "Construction debris removal",
        "Yard waste hauling",
        "Old appliance and furniture removal",
        "General junk cleanup",
        "Responsible disposal and recycling",
      ],
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-dark text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive excavation and landscaping services for residential and commercial projects in Logan, Utah and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Why Choose Stirring Dirt Excavation?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Fair Pricing
              </h3>
              <p className="text-gray-600">
                Competitive rates with no hidden fees. We provide transparent quotes and stick to them.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Personal Service
              </h3>
              <p className="text-gray-600">
                Work directly with the owner. No middlemen, just honest communication and reliable service.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                Skilled craftsmanship on every project. We take pride in our work and stand behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a free quote. We're ready to help bring your vision to life.
          </p>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all duration-200"
          >
            Call Now: (123) 456-7890
          </a>
        </div>
      </section>
    </>
  );
}

