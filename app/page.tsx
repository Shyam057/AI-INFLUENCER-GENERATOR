import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import InteractiveDemo from "@/components/InteractiveDemo";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07080d] text-slate-100 selection:bg-violet-600 selection:text-white overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Platform Integrations & Proof Bar */}
        <SocialProof />

        {/* 3. Interactive Niche Persona Playground */}
        <InteractiveDemo />

        {/* 4. Core Features Bento Grid */}
        <Features />

        {/* 5. 4-Step Process Pipeline */}
        <HowItWorks />

        {/* 6. Pricing Plans */}
        <Pricing />

        {/* 7. Testimonials & Case Studies */}
        <Testimonials />

        {/* 8. Frequently Asked Questions */}
        <FAQ />

        {/* 9. High Conversion Call to Action Banner */}
        <CtaBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

