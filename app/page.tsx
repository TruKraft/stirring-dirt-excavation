import Image from "next/image";
import Link from "next/link";
import AnchorLink from "@/components/AnchorLink";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const services = [
    {
      title: "Yard Preparation",
      description: "Expert land preparation for your next landscaping project. We ensure your yard is leveled, graded, and ready for whatever comes next.",
      image: "/yard.png" ,
      slug: "yard-preparation",
    },
    {
      title: "Sod Installation",
      description: "Transform your property with professional sod installation. Get an instant, lush green lawn that's ready to enjoy right away.",
      image: "/sod.png",
      slug: "sod-installation",
    },
    {
      title: "Decorative Rock Work",
      description: "Beautiful decorative rock installations that add character and low-maintenance elegance to your landscape design.",
      image: "/decorative-rock.png",
      slug: "decorative-rock-work",
    },
    {
      title: "Driveway Grading & Gravel Restoration",
      description: "Restore your driveway to smooth, even condition. We grade and resurface gravel driveways for improved drainage and longevity.",
      image: "/driveway.png",
      slug: "driveway-grading-gravel-restoration",
    },
    {
      title: "Demolition",
      description: "Safe and efficient demolition services for structures, concrete, and more. We handle projects of all sizes with care and precision.",
      image: "/demolition.png",
      slug: "demolition",
    },
    {
      title: "Junk Removal & Hauling",
      description: "Fast, reliable junk removal and hauling services. We'll clear out unwanted items and debris, leaving your property clean and organized.",
      image: "/junk-removal.png",
      slug: "junk-removal-hauling",
    },
  ];

  const values = [
    {
      title: "Honest",
      description: "Transparent pricing and straightforward communication. What we quote is what you pay.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Hardworking",
      description: "No job is too big or too small. We put in the effort to get every project done right.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Reliable",
      description: "When we say we'll be there, we'll be there. Count on us to show up and deliver quality work on time.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Community-Oriented",
      description: "Proud to serve Logan and the surrounding areas. Your neighbors are our neighbors.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/pexels-dsnsyj-1139553.jpg"
            alt="Excavation work"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              <span className="block">Honest Excavation</span>
              <span className="block text-primary">Done Right</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Family-owned excavation services in Logan, Utah. From yard preparation to demolition, we deliver quality workmanship with integrity and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary-dark transition-all duration-200"
              >
                Call for a Free Quote
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md bg-white px-8 py-4 text-lg font-semibold text-dark hover:bg-gray-100 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional excavation and landscaping services tailored to your needs. No job is too big or too small.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnchorLink
                key={index}
                href={`/services#${service.slug}`}
                className="group relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 block"
              >
                <div className="absolute inset-0">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200 line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </AnchorLink>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-primary font-semibold hover:text-primary-dark"
            >
              Learn more about our services
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About/Values Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                Meet Colton Boyack
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Stirring Dirt Excavation is a family-owned business built on strong values and genuine craftsmanship. Owner and operator Colton Boyack brings a personal touch to every project, working directly with customers to ensure satisfaction from start to finish.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                By keeping operations lean and efficient, we&apos;re able to offer competitive pricing without compromising on quality. You won&apos;t deal with layers of management—you&apos;ll work directly with Colton, ensuring clear communication and accountability.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-primary font-semibold hover:text-primary-dark"
              >
                Learn more about us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070"
                alt="Excavation equipment at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              These principles guide everything we do, from the smallest project to the largest job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </>
  );
}

