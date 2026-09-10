"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "./providers/AuthProvider";
import { CheckIcon, ShieldCheckIcon } from "./icons";

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const { user } = useAuth();
  const ctaHref = user ? "/dashboard" : "/sign-up";

  const tiers = [
    {
      name: "Starter",
      badge: "For Solo Creators",
      priceMonthly: 29,
      priceAnnual: 23,
      description: "Ideal for testing your first virtual persona and automating basic social posts.",
      features: [
        "1 AI Persona (100% Face Geometry Lock)",
        "300 8K Studio Photos per month",
        "15 Talking Video Reels with Voice Sync",
        "1 Account per platform (IG, TikTok, X)",
        "Auto-Schedule up to 30 posts / month",
        "AI Caption & Hashtag generator",
        "Standard GPU rendering speed",
      ],
      cta: "Start 7-Day Free Trial",
      popular: false,
      buttonClass: "bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10",
    },
    {
      name: "Creator Pro",
      badge: "Most Popular • Highest ROI",
      priceMonthly: 69,
      priceAnnual: 55,
      description: "Everything you need to grow multiple viral virtual influencers and monetize brand deals.",
      features: [
        "3 Dedicated AI Personas (Zero Facial Drift)",
        "Unlimited 8K Ultra-HD Photos",
        "60 4K Video Reels with Lip-Sync & Audio",
        "Up to 5 Accounts per social platform",
        "Unlimited 24/7 Autopilot Post Scheduler",
        "AI Social Manager (Auto-reply DMs & comments)",
        "Brand Placement & Virtual Product Insertion",
        "Ultra-Fast Turbo GPU Priority Queue",
        "Virality & Peak-Time Predictive Engine",
      ],
      cta: "Launch Pro Influencer",
      popular: true,
      buttonClass:
        "bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 text-white shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02]",
    },
    {
      name: "Agency & Studio",
      badge: "For Talent Agencies & Brands",
      priceMonthly: 189,
      priceAnnual: 149,
      description: "Enterprise infrastructure for scaling multi-creator networks and client campaigns.",
      features: [
        "Unlimited AI Personas & Face Anchors",
        "Unlimited 8K Photos & 4K Video Reels",
        "Unlimited Social Accounts & 10 Team Seats",
        "Dedicated REST API & Zapier/Make Webhooks",
        "Custom Voice Cloning from Audio Samples",
        "White-label Client Analytics Reports",
        "FTC Compliance & Watermark Remover",
        "Dedicated VIP Account Manager & 99.9% SLA",
      ],
      cta: "Contact Studio Team",
      popular: false,
      buttonClass: "bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/10",
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-[#07080d]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Predictable Pricing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Invest in Software, Not Studio Overhead
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A single human photoshoot costs $1,500+. Generate endless content and automate daily social growth for less than the cost of a daily latte.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                !annualBilling
                  ? "bg-violet-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                annualBilling
                  ? "bg-violet-600 text-white shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier) => {
            const price = annualBilling ? tier.priceAnnual : tier.priceMonthly;
            return (
              <div
                key={tier.name}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-b from-[#16172a] to-[#0d0e19] border-2 border-violet-500 shadow-2xl shadow-violet-500/20 scale-105 z-10"
                    : "bg-white/[0.02] border border-white/[0.08] hover:border-white/20"
                }`}
              >
                {/* Popular Pill */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                    ⭐ Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    <span className="text-xs text-violet-400 font-mono font-medium">{tier.badge}</span>
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {tier.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/[0.08]">
                    <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                      ${price}
                    </span>
                    <span className="text-sm text-slate-400 font-medium">/ month</span>
                    {annualBilling && (
                      <span className="text-[11px] text-emerald-400 font-mono ml-2">
                        (billed annually)
                      </span>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                      Included in {tier.name}:
                    </span>
                    {tier.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                        <CheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href={ctaHref}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm text-center block transition-all duration-200 ${tier.buttonClass}`}
                  >
                    {tier.cta} &rarr;
                  </Link>
                  <p className="text-center text-[11px] text-slate-500 mt-3">
                    No credit card required for 7-day trial
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-16 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">14-Day 100% Satisfaction Guarantee</div>
              <div className="text-xs text-slate-400">
                If your virtual influencer doesn&apos;t meet your exact standards, we will refund 100% of your money. No questions asked.
              </div>
            </div>
          </div>
          <a
            href="#demo"
            className="text-xs font-semibold text-violet-400 hover:text-violet-300 whitespace-nowrap"
          >
            Read Refund Policy &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
