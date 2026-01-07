import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stirring Dirt Excavation | Professional Excavation Services in Northern Utah & Southern Idaho",
  description: "Honest, reliable excavation services in Northern Utah and Southern Idaho. Serving Logan, Preston, Ogden and surrounding areas. Yard preparation, sod installation, grading, demolition, and more. Family-owned and operated by Colton Boyack.",
  keywords: [
    "excavation services",
    "Northern Utah excavation",
    "Southern Idaho excavation",
    "Logan excavation",
    "Preston excavation",
    "Ogden excavation",
    "yard preparation",
    "sod installation",
    "grading services",
    "demolition services",
    "junk removal",
    "driveway grading",
    "decorative rock work",
    "Cache Valley excavation",
    "excavation contractor",
    "landscaping services",
  ],
  authors: [{ name: "Colton Boyack" }],
  creator: "Stirring Dirt Excavation",
  publisher: "Stirring Dirt Excavation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://stirringdirtexcavation.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stirring Dirt Excavation | Professional Excavation Services",
    description: "Honest, reliable excavation services in Northern Utah and Southern Idaho. Serving Logan, Preston, Ogden and surrounding areas.",
    url: "https://stirringdirtexcavation.com",
    siteName: "Stirring Dirt Excavation",
    images: [
      {
        url: "/stirring dirt-logo.png",
        width: 1200,
        height: 630,
        alt: "Stirring Dirt Excavation Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stirring Dirt Excavation | Professional Excavation Services",
    description: "Honest, reliable excavation services in Northern Utah and Southern Idaho.",
    images: ["/stirring dirt-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://stirringdirtexcavation.com",
    name: "Stirring Dirt Excavation",
    image: "https://stirringdirtexcavation.com/stirring dirt-logo.png",
    logo: "https://stirringdirtexcavation.com/stirring dirt-logo.png",
    url: "https://stirringdirtexcavation.com",
    telephone: "+1-208-851-0122",
    email: "Stirringdirtexcavation@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Logan",
      addressRegion: "UT",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Logan",
        addressRegion: "UT",
      },
      {
        "@type": "City",
        name: "Preston",
        addressRegion: "ID",
      },
      {
        "@type": "City",
        name: "Ogden",
        addressRegion: "UT",
      },
      {
        "@type": "State",
        name: "Northern Utah",
      },
      {
        "@type": "State",
        name: "Southern Idaho",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.7369803",
      longitude: "-111.8338359",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    description:
      "Family-owned excavation services in Northern Utah and Southern Idaho. Specializing in yard preparation, sod installation, grading, demolition, junk removal, and more.",
    founder: {
      "@type": "Person",
      name: "Colton Boyack",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Excavation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Yard Preparation",
            description:
              "Expert land preparation for landscaping projects including leveling, grading, and soil conditioning.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sod Installation",
            description:
              "Professional sod installation for instant, lush green lawns.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Decorative Rock Work",
            description:
              "Beautiful decorative rock installations for landscape design.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Driveway Grading & Gravel Restoration",
            description:
              "Driveway grading and gravel resurfacing for improved drainage.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Demolition",
            description:
              "Safe and efficient demolition services for structures and concrete.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Junk Removal & Hauling",
            description: "Fast, reliable junk removal and hauling services.",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

