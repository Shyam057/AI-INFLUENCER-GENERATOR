"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import {
  SparklesIcon,
  CheckIcon,
  ClockIcon,
  TrendingUpIcon,
  InstagramIcon,
  TikTokIcon,
  TwitterXIcon,
  LogOutIcon,
  UserIcon,
  RefreshCwIcon,
} from "@/components/icons";

export default function DashboardPage() {
  const router = useRouter();
  const { user, profile, isLoading, signOut, refreshProfile } = useAuth();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/sign-in?redirectTo=/dashboard");
    }
  }, [user, isLoading, router]);

  const handleManualRefresh = async () => {
    setRefreshing(true);
    await refreshProfile();
    setTimeout(() => setRefreshing(false), 500);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#07080d] flex items-center justify-center text-slate-200">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-violet-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm font-medium text-slate-400">Loading your creator workspace...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const displayName =
    profile?.full_name ||
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    user.email?.split("@")[0] ||
    "Creator";

  return (
    <div className="min-h-screen bg-[#07080d] text-slate-100 selection:bg-violet-600 selection:text-white flex flex-col">
      {/* Top App Header */}
      <header className="border-b border-white/[0.08] bg-[#090b14]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-purple-500 to-cyan-400 p-[1px] shadow-md shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-all duration-300">
                <div className="w-full h-full bg-[#0d0e17] rounded-[11px] flex items-center justify-center">
                  <SparklesIcon className="w-4 h-4 text-violet-400" />
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Aura<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">Sync</span>
              </span>
            </Link>

            <span className="hidden sm:inline-block text-xs font-mono text-slate-400 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06]">
              Creator Studio
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/[0.04]"
            >
              Public Home
            </Link>

            {/* User Profile Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-xs font-bold text-white uppercase">
                {displayName.charAt(0)}
              </div>
              <span className="text-xs font-medium text-slate-200 max-w-[140px] truncate">
                {displayName}
              </span>
            </div>

            <button
              onClick={signOut}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-red-400 transition-colors px-3 py-1.5 rounded-lg hover:bg-white/[0.04]"
              title="Sign Out"
            >
              <LogOutIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-8">
        {/* Welcome & Database Status Banner */}
        <div className="relative rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-950/40 via-purple-950/20 to-slate-900/40 p-6 sm:p-8 backdrop-blur-xl overflow-hidden">
          <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-violet-600/10 blur-3xl rounded-full pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Authenticated via Supabase Auth</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Welcome, {displayName}!
              </h1>
              <p className="mt-1 text-sm text-slate-300">
                Your AI influencer generator pipeline and autonomous social scheduler are ready.
              </p>
            </div>

            <button
              onClick={handleManualRefresh}
              disabled={refreshing}
              className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] hover:text-white transition-all disabled:opacity-50"
            >
              <RefreshCwIcon className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-violet-400" : ""}`} />
              <span>{refreshing ? "Syncing..." : "Refresh DB Profile"}</span>
            </button>
          </div>

          {/* Supabase DB Record Confirmation Box */}
          <div className="mt-6 pt-6 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
              <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider block mb-1">
                Database Status
              </span>
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                <CheckIcon className="w-4 h-4 text-emerald-400" />
                <span>Saved in public.users</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
              <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider block mb-1">
                Account Email
              </span>
              <span className="text-xs font-mono text-slate-200 truncate block">
                {user.email}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06]">
              <span className="text-[11px] text-slate-400 uppercase font-semibold tracking-wider block mb-1">
                User ID (UUID)
              </span>
              <span className="text-[11px] font-mono text-slate-400 truncate block" title={user.id}>
                {user.id}
              </span>
            </div>
          </div>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Active Personas (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-white">Your Virtual Personas</h2>
                <p className="text-xs text-slate-400">Consistent facial anchors & active generative models</p>
              </div>
              <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md shadow-violet-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                <SparklesIcon className="w-3.5 h-3.5 text-yellow-300" />
                <span>+ Create Persona</span>
              </button>
            </div>

            {/* Persona Card */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e18]/80 p-5 sm:p-6 backdrop-blur-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-violet-600 via-purple-600 to-cyan-400 p-0.5 shadow-lg">
                    <div className="w-full h-full rounded-[14px] bg-[#0d0e17] flex items-center justify-center text-3xl">
                      👩‍🎤
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-white">Elena Vance</h3>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Active
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">@elena.vance.ai • High-End Fashion & Wellness</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <span className="px-2.5 py-1 rounded bg-white/[0.04]">Face Lock: 99.4%</span>
                  <span className="px-2.5 py-1 rounded bg-white/[0.04]">412K Audience</span>
                </div>
              </div>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[11px] text-slate-400 block">Generated Photos</span>
                  <span className="text-base font-bold text-white font-mono">342</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[11px] text-slate-400 block">Video Reels</span>
                  <span className="text-base font-bold text-white font-mono">48</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[11px] text-slate-400 block">Avg. Engagement</span>
                  <span className="text-base font-bold text-emerald-400 font-mono">8.9%</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                  <span className="text-[11px] text-slate-400 block">Est. Revenue</span>
                  <span className="text-base font-bold text-violet-300 font-mono">$14.2K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Content Pipeline (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-white">Auto-Pilot Queue</h2>
              <p className="text-xs text-slate-400">Direct-to-platform scheduled releases</p>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e18]/80 p-5 space-y-3.5 backdrop-blur-xl">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Auto-Pilot: Active</span>
                </div>
                <span className="text-slate-400 font-mono">3 Queued</span>
              </div>

              <div className="p-3 rounded-xl bg-violet-950/20 border border-violet-500/20 space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-bold text-cyan-400">In 28 minutes</span>
                  <div className="flex items-center gap-1 text-slate-400">
                    <InstagramIcon className="w-3 h-3 text-pink-400" />
                    <TikTokIcon className="w-3 h-3 text-cyan-300" />
                  </div>
                </div>
                <p className="text-xs text-slate-200 font-medium truncate">
                  &quot;Morning rooftop matcha in Tokyo 🍵&quot;
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono">Tomorrow 18:00</span>
                  <span className="text-[10px] text-purple-300 font-mono bg-purple-500/10 px-1.5 py-0.5 rounded">
                    Reel
                  </span>
                </div>
                <p className="text-xs text-slate-300 truncate">
                  Pilates workout series & collab
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-1.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono">Thursday 11:30</span>
                  <span className="text-[10px] text-cyan-300 font-mono bg-cyan-500/10 px-1.5 py-0.5 rounded">
                    Carousel
                  </span>
                </div>
                <p className="text-xs text-slate-300 truncate">
                  Spring fashion Paris moodboard
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
