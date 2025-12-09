import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stirring Dirt Excavation | Professional Excavation Services in Logan, Utah",
  description: "Honest, reliable excavation services in Logan, Utah. Yard preparation, sod installation, grading, demolition, and more. Family-owned and operated by Colton Boyack.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ContactForm />
      </body>
    </html>
  );
}

