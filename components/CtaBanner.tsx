"use client";

import { useState } from "react";
import { SparklesIcon, ArrowRightIcon, CheckIcon } from "./icons";

export default function CtaBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Radial Backlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07080d] via-[#101328] to-[#07080d] -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-violet-600/25 via-fuchsia-600/20 to-cyan-500/20 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl border border-violet-500/30 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-8 sm:p-14 text-center backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Top Decorative Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs font-semibold uppercase tracking-wider mb-6">
            <SparklesIcon className="w-3.5 h-3.5 text-yellow-300" />
            Instant Onboarding • 100% Free Trial
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Launch Your Virtual Influencer Empire In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400">
              Under 5 Minutes.
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Stop trading your hours for photoshoots. Generate infinite high-converting photos, Reels, and TikToks with autonomous multi-channel scheduling.
          </p>

          {/* Fast Launch Form */}
          <div className="mt-10 max-w-md mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work or creator email..."
                  required
                  className="w-full px-5 py-3.5 rounded-full bg-black/50 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20 backdrop-blur-md"
                />
                <button
                  type="submit"
                  className="sm:w-auto whitespace-nowrap inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 hover:scale-105 active:scale-95 shadow-lg shadow-violet-600/30 transition-all duration-200"
                >
                  <span>Start Free</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-medium flex items-center justify-center gap-2">
                <CheckIcon className="w-5 h-5 text-emerald-400" />
                <span>Invite sent to {email}! Check your inbox to customize your first persona.</span>
              </div>
            )}
          </div>

          {/* Trust points */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
              7-Day Free Trial
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
              No Credit Card Required
            </span>
            <span className="flex items-center gap-1.5">
              <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
              Cancel Anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
