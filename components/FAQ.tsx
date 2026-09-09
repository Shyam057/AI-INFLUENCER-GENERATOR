"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./icons";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does AuraSync guarantee 100% facial consistency without drift?",
    answer:
      "Unlike basic prompt-based image generators that generate a different person every time, AuraSync creates a persistent multi-layer latent identity anchor. Our engine locks 3D facial bone topology, eye geometry, and skin texture. You can change outfits, hairstyles, locations, and poses while maintaining the exact same recognizable face across thousands of renders.",
  },
  {
    question: "Are AI influencers allowed on Instagram, TikTok, and YouTube?",
    answer:
      "Yes, completely! Virtual creators like Lil Miquela (2.5M+ followers) and Aitana Lopez are mainstream and partner with global luxury brands. Meta, TikTok, and YouTube officially support virtual creator accounts. AuraSync includes built-in FTC-compliant disclosure labels (such as #VirtualCreator and #AI) to keep your accounts 100% compliant with platform policies.",
  },
  {
    question: "How does the auto-scheduler post without risking bans or shadowbans?",
    answer:
      "AuraSync connects exclusively through official developer APIs (Meta Graph API for Instagram/Facebook, TikTok for Developers, and official X & YouTube APIs). We never use shady browser automation bots, password scraping, or unofficial reverse-engineered tools. Your accounts remain 100% secure with verified OAuth authorization.",
  },
  {
    question: "Can I generate talking video reels with custom voice and accents?",
    answer:
      "Yes! Our Creator Pro and Agency tiers allow you to generate full lip-synchronized video reels. You can choose from 120+ ultra-realistic human voices across 40+ languages (with natural breath pauses and emotional cadence) or clone a custom voice using a short 60-second audio recording.",
  },
  {
    question: "How do AI influencers make money and get brand deals?",
    answer:
      "Virtual creators monetize via sponsored product placements, digital affiliate marketing, modeling contracts for fashion labels, and creator fund ad revenue. AuraSync includes a Virtual Brand Placement Hub that seamlessly inserts real-world products (perfumes, drinks, apparel, accessories) directly into your influencer's hands with photorealistic lighting.",
  },
  {
    question: "Do I retain full commercial ownership of the generated content?",
    answer:
      "Yes. You own 100% of all intellectual property, character likenesses, photographs, videos, and scripts generated on AuraSync. You are free to monetize, sell merchandise, license, or sign talent contracts with zero royalties owed to us.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-[#07080d]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Everything you need to know about persona consistency, autonomous scheduling, and platform monetization.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/[0.05] flex items-center justify-center text-slate-300 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-violet-600 text-white" : ""
                    }`}
                  >
                    <ChevronDownIcon className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/[0.04]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-12 text-center text-xs text-slate-400">
          Have a unique requirement or custom agency workflow?{" "}
          <a href="#demo" className="text-violet-400 hover:text-violet-300 font-medium underline underline-offset-4">
            Chat with our engineering team &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
