import { Metadata } from "next";
import Brand from "./components/home/brand";
import HeroSection from "./components/home/hero";
import WebResult from "./components/home/web-result";
import Innovation from "./components/home/innovation";
import OnlinePresence from "./components/home/online-presence";
import CreativeMind from "./components/home/creative-mind";
import CustomerStories from "./components/home/customer-stories";
import Testimonials from "./components/home/testimonials";
import Faq from "./components/home/faq";
import Achievements from "./components/home/achievements";
import Solutions from "./components/home/solution";

export const metadata: Metadata = {
    title: "Gingerly — Automate Your Recurring Payments",
    description: "Gingerly automates recurring payments so you get paid on time, every time — without the manual work.",
};


export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section-----------------  */}
      <HeroSection />

      {/* ---------------------Trusted Partners-----------------  */}
      <Brand />

      {/* ---------------------Problem Statement-----------------  */}
      <WebResult />

      {/* ---------------------Key Features-----------------  */}
      <Innovation />

      {/* ---------------------How It Works-----------------  */}
      <OnlinePresence />

      {/* ---------------------Supported Sectors-----------------  */}
      <CreativeMind />

      {/* ---------------------Benefits & Value-----------------  */}
      <CustomerStories />

      {/* ---------------------Customer Testimonials-----------------  */}
      <Testimonials />

      {/* ---------------------FAQ-----------------  */}
      <Faq />

      {/* ---------------------Trust & Credibility----------------- 
      <Achievements /> */}

      {/* ---------------------CTA-----------------  */}
      <Solutions />
    </main>
  )
}
