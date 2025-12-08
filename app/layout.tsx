import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer";

const Header = dynamic(() => import("@/components/Header"), {
  ssr: true,
});

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
      </body>
    </html>
  );
}

