"use client";

import Link from "next/link";
import { useAuth } from "./providers/AuthProvider";
import {
  SparklesIcon,
  ArrowRightIcon,
  PlayIcon,
  StarIcon,
  InstagramIcon,
  TikTokIcon,
  TwitterXIcon,
  YouTubeIcon,
  CheckIcon,
  ClockIcon,
  TrendingUpIcon,
} from "./icons";

export default function Hero() {
  const { user } = useAuth();
  const ctaHref = user ? "/dashboard" : "/sign-up";

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Glow Orbs Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] md:w-[900px] md:h-[450px] bg-gradient-to-tr from-violet-600/20 via-purple-500/15 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-600/10 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Release Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md hover:bg-violet-500/15 transition-colors cursor-pointer group">
            <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            <span>AuraSync v3.4 Engine Live</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300 group-hover:text-white transition-colors">
              Zero-Drift Face Consistency & Auto-Pilot Scheduler &rarr;
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] sm:leading-[1.1]">
            Build Hyper-Realistic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">
              AI Influencers.
            </span>
            <br className="hidden sm:inline" />
            Put Social Media Growth On{" "}
            <span className="underline decoration-violet-500/40 underline-offset-8">
              Autopilot.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed">
            Generate lifelike digital personas with 100% facial consistency across any scene, outfit, or mood.
            Automatically schedule viral Reels, TikToks, and posts with AI-optimized captions, tags, and multi-channel publishing.
          </p>

          {/* CTA Cluster */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link
              href={ctaHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-base text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-600 shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <SparklesIcon className="w-5 h-5 text-yellow-300" />
              <span>{user ? "Open Creator Dashboard" : "Generate Your AI Persona Free"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-base text-slate-200 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:text-white transition-all duration-200 backdrop-blur-md"
            >
              <PlayIcon className="w-4 h-4 text-violet-400" />
              <span>View Interactive Playground</span>
            </a>
          </div>

          {/* Trust stats row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <span className="font-semibold text-slate-200">4.9/5</span>
              <span>(2,400+ creator reviews)</span>
            </div>
            <div className="hidden sm:inline text-slate-700">•</div>
            <div className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-emerald-400" />
              <span>No Camera or Studio Needed</span>
            </div>
            <div className="hidden sm:inline text-slate-700">•</div>
            <div className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-emerald-400" />
              <span>Direct Instagram & TikTok API</span>
            </div>
          </div>

          {/* Interactive Hero Showcase / Simulated Card */}
          <div className="mt-16 w-full max-w-5xl relative">
            {/* Ambient Backlight */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-cyan-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 -z-10" />

            <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c0e18]/90 backdrop-blur-2xl p-4 sm:p-6 shadow-2xl overflow-hidden">
              {/* Top Window Bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 pl-2 border-l border-white/10">
                    AuraStudio • Active Influencer Dashboard
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    Auto-Pilot Active
                  </span>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs px-2 py-1 rounded bg-white/[0.04]">
                    <ClockIcon className="w-3.5 h-3.5 text-slate-400" />
                    <span>Next Post: 28m</span>
                  </div>
                </div>
              </div>

              {/* Grid Content */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
                {/* Influencer Profile Card (Left 5 Cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between rounded-xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] p-5 text-left">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-violet-500/40 p-0.5 bg-gradient-to-tr from-violet-500 to-cyan-400">
                            {/* SVG Simulated Portrait of Influencer */}
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-900 via-purple-800 to-slate-900 flex items-center justify-center text-2xl font-bold text-violet-200">
                              👩‍🎤
                            </div>
                          </div>
                          <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0c0e18]" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-base font-bold text-white">Elena Vance</h3>
                            <span className="w-4 h-4 rounded-full bg-cyan-500 flex items-center justify-center text-[10px] text-black font-bold">✓</span>
                          </div>
                          <p className="text-xs text-slate-400">@elena.vance.ai</p>
                          <span className="inline-block mt-1 text-[11px] text-violet-300 bg-violet-500/10 px-2 py-0.5 rounded font-medium">
                            Niche: High-End Fashion & Wellness
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Stats strip */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-lg bg-black/40 border border-white/[0.06] text-center my-3">
                      <div>
                        <div className="text-xs text-slate-400">Followers</div>
                        <div className="text-sm font-bold text-white">412.8K</div>
                      </div>
                      <div className="border-x border-white/10">
                        <div className="text-xs text-slate-400">Avg. Eng.</div>
                        <div className="text-sm font-bold text-emerald-400">8.9%</div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-400">Est. Mo.</div>
                        <div className="text-sm font-bold text-purple-300">$14.2K</div>
                      </div>
                    </div>

                    {/* Consistency indicator */}
                    <div className="mt-4 p-3 rounded-lg bg-violet-950/20 border border-violet-500/20">
                      <div className="flex items-center justify-between text-xs mb-1.5">
                        <span className="text-violet-300 font-medium flex items-center gap-1.5">
                          <SparklesIcon className="w-3.5 h-3.5 text-violet-400" />
                          Facial Geometry Lock
                        </span>
                        <span className="text-emerald-400 font-mono font-bold">99.4% Match</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-gradient-to-r from-violet-500 to-emerald-400 h-1.5 rounded-full w-[99.4%]" />
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2">
                        Locked across 340+ unique generated photo/video scenes with zero face drift.
                      </p>
                    </div>
                  </div>

                  {/* Connected platforms */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between mt-4">
                    <span className="text-xs text-slate-400">Connected Channels:</span>
                    <div className="flex items-center gap-2 text-slate-300">
                      <span className="p-1.5 rounded bg-white/[0.05] hover:text-pink-400 transition-colors" title="Instagram">
                        <InstagramIcon className="w-4 h-4" />
                      </span>
                      <span className="p-1.5 rounded bg-white/[0.05] hover:text-cyan-400 transition-colors" title="TikTok">
                        <TikTokIcon className="w-4 h-4" />
                      </span>
                      <span className="p-1.5 rounded bg-white/[0.05] hover:text-white transition-colors" title="X (Twitter)">
                        <TwitterXIcon className="w-4 h-4" />
                      </span>
                      <span className="p-1.5 rounded bg-white/[0.05] hover:text-red-400 transition-colors" title="YouTube Shorts">
                        <YouTubeIcon className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>

                {/* Live Auto-Scheduler Queue (Right 7 Cols) */}
                <div className="lg:col-span-7 flex flex-col justify-between rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] p-5 text-left">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded-md bg-cyan-500/10 text-cyan-400">
                          <TrendingUpIcon className="w-4 h-4" />
                        </div>
                        <h4 className="text-sm font-semibold text-white">
                          Automated Content Pipeline
                        </h4>
                      </div>
                      <span className="text-xs text-slate-400 font-mono bg-white/[0.05] px-2.5 py-1 rounded">
                        14 Posts Queued This Week
                      </span>
                    </div>

                    {/* Up Next Card Preview */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-violet-950/40 via-purple-950/20 to-slate-900/60 border border-violet-500/30 mb-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                              Publishing in 28m
                            </span>
                            <span className="text-xs text-slate-400">Optimal engagement slot</span>
                          </div>
                          <p className="text-sm font-medium text-slate-200 mt-1">
                            &quot;Morning rooftop matcha in Tokyo 🍵 Starting the week centered. What&apos;s your non-negotiable ritual?&quot;
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            <span className="text-[11px] text-violet-400">#TokyoMorning</span>
                            <span className="text-[11px] text-violet-400">#MindfulLiving</span>
                            <span className="text-[11px] text-violet-400">#VirtualCreator</span>
                            <span className="text-[11px] text-emerald-400 font-mono">+8 optimized tags</span>
                          </div>
                        </div>

                        {/* Simulated Visual Thumbnail */}
                        <div className="relative w-20 h-24 rounded-lg overflow-hidden bg-gradient-to-tr from-violet-800 via-fuchsia-700 to-amber-500 flex-shrink-0 flex items-center justify-center shadow-md">
                          <div className="absolute inset-0 bg-black/20" />
                          <span className="relative text-2xl">🌇</span>
                          <span className="absolute bottom-1 right-1 text-[9px] bg-black/70 text-white font-mono px-1 rounded">
                            4K HD
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-300">Channels:</span>
                          <div className="flex items-center gap-1.5 text-slate-200">
                            <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                            <TikTokIcon className="w-3.5 h-3.5 text-cyan-300" />
                            <TwitterXIcon className="w-3.5 h-3.5 text-slate-100" />
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Predicted Virality: 96/100
                        </div>
                      </div>
                    </div>

                    {/* Upcoming Schedule Row Snippets */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-slate-400 w-16">Tomorrow 18:00</span>
                          <span className="text-xs text-slate-300 truncate max-w-[220px] sm:max-w-xs">
                            Reel: Pilates core workout series & athletic wear collab
                          </span>
                        </div>
                        <span className="text-[11px] text-purple-300 font-mono bg-purple-500/10 px-2 py-0.5 rounded">
                          Video + Voice
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-slate-400 w-16">Thursday 11:30</span>
                          <span className="text-xs text-slate-300 truncate max-w-[220px] sm:max-w-xs">
                            Photo Carousel: Spring fashion moodboard Paris editorial
                          </span>
                        </div>
                        <span className="text-[11px] text-cyan-300 font-mono bg-cyan-500/10 px-2 py-0.5 rounded">
                          5 Photos
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Micro trigger footer */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
                    <span>⚡ AI Auto-Pilot automatically reschedules if audience peak shifts</span>
                    <a href="#demo" className="text-violet-400 hover:text-violet-300 font-medium inline-flex items-center gap-1">
                      Customize Schedule &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
