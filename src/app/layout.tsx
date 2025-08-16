import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import LoadingWrapper from "@/components/LoadingWrapper";
import TopBanner from "@/components/TopBanner";
import DynamicLayout from "@/components/DynamicLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HiTech Plumbing - Professional Plumbing Services",
  description: "Professional plumbing, gas, heating, and hot water services. Expert technicians, transparent pricing, and comprehensive warranties.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingWrapper>
          <SmoothScroll>
            <TopBanner />
            <Navigation />
            <DynamicLayout>
              {children}
            </DynamicLayout>
            <Footer />
          </SmoothScroll>
        </LoadingWrapper>
      </body>
    </html>
  );
}
