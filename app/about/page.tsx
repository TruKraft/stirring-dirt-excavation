import Image from "next/image";

export const metadata = {
  title: "About Us | Stirring Dirt Excavation",
  description: "Learn about Colton Boyack and Stirring Dirt Excavation - honest, reliable excavation services in Logan, Utah.",
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-dark text-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-300">
              Family-owned and operated excavation services built on honesty, hard work, and respect for our customers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070"
                alt="Colton Boyack at work"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Meet Colton Boyack
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Stirring Dirt Excavation is more than just a business—it&apos;s a commitment to serving the Logan, Utah community with integrity and excellence. Owner and operator Colton Boyack started this company with a simple philosophy: do honest work at fair prices, and always treat customers with respect.
                </p>
                <p>
                  Growing up in Cache Valley, Colton learned the value of hard work and community from an early age. Those lessons shaped his approach to business. When you hire Stirring Dirt Excavation, you&apos;re not getting a faceless corporation—you&apos;re working directly with Colton, who takes personal responsibility for every project.
                </p>
                <p>
                  By keeping the business lean and avoiding unnecessary overhead, Colton can offer competitive pricing without sacrificing quality. He operates the equipment himself, oversees every job personally, and ensures that the work meets his exacting standards before calling it complete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              What Drives Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do, from the smallest yard prep to the largest demolition project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Honesty</h3>
              </div>
              <p className="text-gray-600">
                We believe in transparent pricing and straightforward communication. When we provide a quote, that&apos;s what you&apos;ll pay—no surprise fees or hidden costs. If we encounter an unexpected issue, we&apos;ll discuss it with you before proceeding.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Hard Work</h3>
              </div>
              <p className="text-gray-600">
                No job is beneath us, and no challenge is too great. Whether it&apos;s preparing a small yard or tackling a major demolition, we approach every project with the same dedication and attention to detail. We don&apos;t cut corners, and we don&apos;t quit until the job is done right.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Reliability</h3>
              </div>
              <p className="text-gray-600">
                When we commit to a timeline, we honor it. When we say we&apos;ll be there, we show up. Your time is valuable, and we respect that. You can count on us to deliver consistent, dependable service from the initial quote to the final cleanup.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mr-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Community Focus</h3>
              </div>
              <p className="text-gray-600">
                We&apos;re proud to serve Logan and the surrounding Cache Valley area. This is our home, and your neighbors are our neighbors. We&apos;re invested in the success and beauty of our community, and we treat every property as if it were our own.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Serving Logan and Cache Valley
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re proud to provide excavation services throughout Cache Valley and the surrounding areas. From Logan to the surrounding communities, we&apos;re here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Residential</h3>
              <p className="text-gray-600">
                From yard prep to driveway grading, we handle all residential excavation needs.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Commercial</h3>
              <p className="text-gray-600">
                Professional excavation services for commercial properties and businesses.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Experts</h3>
              <p className="text-gray-600">
                Deep knowledge of the local area, soil conditions, and building requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">
            Experience the Difference
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to work with a contractor who puts honesty and quality first? Let&apos;s talk about your project.
          </p>
          <a
            href="tel:+1234567890"
            className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:bg-gray-100 transition-all duration-200"
          >
            Call Now: (123) 456-7890
          </a>
        </div>
      </section>
    </>
  );
}

