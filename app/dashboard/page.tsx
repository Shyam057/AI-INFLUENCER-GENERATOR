"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/providers/AuthProvider";
import {
  CalendarIcon,
  CameraIcon,
  ClockIcon,
  CloseIcon,
  DollarSignIcon,
  EyeIcon,
  LogOutIcon,
  MenuIcon,
  MessageSquareIcon,
  RefreshCwIcon,
  SlidersIcon,
  Share2Icon,
  SparklesIcon,
  TrendingUpIcon,
  UsersIcon,
  VideoIcon,
} from "@/components/icons";

const primaryNavigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: TrendingUpIcon,
    active: true,
  },
  { label: "Models / Studio", href: "/dashboard/studio", icon: SparklesIcon },
  { label: "Calendar", href: "/dashboard/calendar", icon: CalendarIcon },
  { label: "Content Library", href: "/dashboard/content", icon: VideoIcon },
  { label: "Analytics", href: "/dashboard/analytics", icon: EyeIcon },
];

const managementNavigation = [
  { label: "Accounts", href: "/dashboard/accounts", icon: UsersIcon },
  { label: "Messages", href: "/dashboard/messages", icon: MessageSquareIcon },
  { label: "Billing", href: "/dashboard/billing", icon: DollarSignIcon },
  { label: "Settings", href: "/dashboard/settings", icon: SlidersIcon },
];

const upcomingPosts = [
  {
    platform: "Instagram + TikTok",
    time: "Today, 6:30 PM",
    title: "Golden hour skincare routine",
    type: "Reel",
    color: "text-pink-300",
  },
  {
    platform: "Instagram",
    time: "Tomorrow, 9:00 AM",
    title: "Sunday reset: wellness edition",
    type: "Carousel",
    color: "text-violet-300",
  },
  {
    platform: "YouTube",
    time: "Thu, 11:30 AM",
    title: "A week in the creator studio",
    type: "Video",
    color: "text-red-300",
  },
];

type NavigationItem = (typeof primaryNavigation)[number];

function NavigationLink({
  item,
  onClick,
}: {
  item: NavigationItem;
  onClick?: () => void;
}) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${item.active ? "bg-violet-500/12 text-white shadow-[inset_3px_0_0_#a78bfa]" : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"}`}
    >
      <Icon
        className={`h-[18px] w-[18px] ${item.active ? "text-violet-300" : "text-slate-500 group-hover:text-slate-300"}`}
      />
      <span>{item.label}</span>
      {item.label === "Content Library" && (
        <span className="ml-auto rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-semibold text-slate-400">
          24
        </span>
      )}
    </Link>
  );
}

function Sidebar({
  displayName,
  email,
  signOut,
  mobileOpen,
  closeMobile,
}: {
  displayName: string;
  email?: string;
  signOut: () => void;
  mobileOpen: boolean;
  closeMobile: () => void;
}) {
  return (
    <aside
      className={`${mobileOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 flex w-[274px] flex-col border-r border-white/[0.08] bg-[#0b0d15] px-4 py-5 transition-transform duration-300 lg:relative lg:translate-x-0`}
    >
      <div className="flex items-center justify-between px-2">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={closeMobile}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 shadow-lg shadow-violet-500/20">
            <SparklesIcon className="h-[18px] w-[18px] text-white" />
          </span>
          <span className="text-[17px] font-bold tracking-tight text-white">
            Aura<span className="text-violet-300">Sync</span>
          </span>
        </Link>
        <button
          onClick={closeMobile}
          className="rounded-lg p-2 text-slate-500 hover:bg-white/[0.05] hover:text-white lg:hidden"
          aria-label="Close navigation"
        >
          <CloseIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="mt-8 flex-1 overflow-y-auto">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
          Workspace
        </p>
        <nav className="space-y-1">
          {primaryNavigation.map((item) => (
            <NavigationLink
              key={item.label}
              item={item}
              onClick={closeMobile}
            />
          ))}
        </nav>
        <p className="mb-3 mt-8 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">
          Manage
        </p>
        <nav className="space-y-1">
          {managementNavigation.map((item) => (
            <NavigationLink
              key={item.label}
              item={item}
              onClick={closeMobile}
            />
          ))}
        </nav>
        <div className="mt-8 rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/10 to-cyan-400/[0.04] p-4">
          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-violet-400/15 text-violet-300">
            <ZapIcon className="h-4 w-4" />
          </div>
          <p className="text-sm font-semibold text-white">Creator plan</p>
          <p className="mt-1 text-xs leading-5 text-slate-400">
            You have 68% of your monthly generations left.
          </p>
          <Link
            href="/dashboard/billing"
            className="mt-3 inline-flex items-center text-xs font-semibold text-violet-300 hover:text-violet-200"
          >
            Manage plan <span className="ml-1">→</span>
          </Link>
        </div>
      </div>
      <div className="border-t border-white/[0.07] pt-4">
        <div className="flex items-center gap-3 rounded-xl px-2 py-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 text-sm font-bold text-white">
            {displayName.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-slate-200">
              {displayName}
            </p>
            <p className="truncate text-[11px] text-slate-500">{email}</p>
          </div>
          <button
            onClick={signOut}
            className="rounded-lg p-2 text-slate-500 hover:bg-red-500/10 hover:text-red-300"
            title="Sign out"
            aria-label="Sign out"
          >
            <LogOutIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const { user, profile, isLoading, signOut, refreshProfile } = useAuth();
  const [refreshing, setRefreshing] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) router.push("/sign-in?redirectTo=/dashboard");
  }, [user, isLoading, router]);

  const handleManualRefresh = async () => {
    setRefreshing(true);
    await refreshProfile();
    setTimeout(() => setRefreshing(false), 500);
  };

  if (isLoading)
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#07080d] text-sm text-slate-400">
        <RefreshCwIcon className="mr-2 h-4 w-4 animate-spin text-violet-400" />
        Loading your creator workspace...
      </div>
    );
  if (!user) return null;

  const displayName =
    profile?.full_name ||
    user.user_metadata?.full_name ||
    user.user_metadata?.name ||
    user.email?.split("@")[0] ||
    "Creator";
  const stats = [
    {
      label: "Content published",
      value: "128",
      change: "+18.4%",
      icon: Share2Icon,
      tone: "text-cyan-300",
    },
    {
      label: "Total reach",
      value: "2.4M",
      change: "+24.8%",
      icon: TrendingUpIcon,
      tone: "text-emerald-300",
    },
    {
      label: "Engagement rate",
      value: "8.9%",
      change: "+1.2%",
      icon: HeartIcon,
      tone: "text-pink-300",
    },
    {
      label: "Active personas",
      value: "03",
      change: "All healthy",
      icon: UsersIcon,
      tone: "text-violet-300",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#07080d] text-slate-100 selection:bg-violet-600 selection:text-white">
      <Sidebar
        displayName={displayName}
        email={user.email}
        signOut={signOut}
        mobileOpen={mobileOpen}
        closeMobile={() => setMobileOpen(false)}
      />
      {mobileOpen && (
        <button
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation overlay"
        />
      )}
      <main className="min-w-0 flex-1 bg-[radial-gradient(circle_at_80%_0%,rgba(91,64,170,0.13),transparent_32rem)]">
        <header className="flex h-[76px] items-center justify-between border-b border-white/[0.07] px-5 sm:px-8 lg:px-10">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/[0.05] hover:text-white lg:hidden"
            aria-label="Open navigation"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
          <div className="hidden lg:block">
            <p className="text-xs font-medium text-slate-500">
              Creator workspace
            </p>
            <p className="text-sm font-semibold text-slate-200">
              Sunday, September 13, 2026
            </p>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <Link
              href="/"
              className="hidden text-xs font-medium text-slate-400 hover:text-white sm:block"
            >
              View public site
            </Link>
            <button
              onClick={handleManualRefresh}
              disabled={refreshing}
              className="rounded-lg border border-white/[0.08] p-2 text-slate-400 hover:bg-white/[0.05] hover:text-white disabled:opacity-50"
              title="Refresh profile"
              aria-label="Refresh profile"
            >
              <RefreshCwIcon
                className={`h-4 w-4 ${refreshing ? "animate-spin text-violet-300" : ""}`}
              />
            </button>
            <div className="h-7 w-px bg-white/[0.08]" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 text-xs font-bold text-white">
              {displayName.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-medium text-violet-300">
                Good morning, {displayName.split(" ")[0]}
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Your creator command center
              </h1>
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                Keep your AI personas consistent, your content moving, and your
                audience engaged.
              </p>
            </div>
            <Link
              href="/dashboard/studio"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-400"
            >
              <SparklesIcon className="h-4 w-4" /> Create with Studio
            </Link>
          </section>
          <section className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      {stat.label}
                    </span>
                    <Icon className={`h-4 w-4 ${stat.tone}`} />
                  </div>
                  <div className="mt-3 flex items-end justify-between">
                    <span className="text-2xl font-bold text-white">
                      {stat.value}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-300">
                      {stat.change}
                    </span>
                  </div>
                </div>
              );
            })}
          </section>
          <section className="mt-6 grid gap-6 xl:grid-cols-[1.35fr_1fr]">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0f19]/80 p-5 sm:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-semibold text-white">Content overview</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Your publishing activity over the last 30 days
                  </p>
                </div>
                <select className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 text-xs text-slate-300 outline-none">
                  <option>Last 30 days</option>
                  <option>Last 7 days</option>
                </select>
              </div>
              <div className="mt-8 flex h-44 items-end gap-2 sm:gap-3">
                {[35, 48, 42, 68, 56, 76, 64, 84, 72, 92, 78, 88, 73, 98].map(
                  (height, index) => (
                    <div
                      key={index}
                      className="group flex h-full flex-1 items-end"
                    >
                      <div
                        style={{ height: `${height}%` }}
                        className={`w-full rounded-t-md transition-colors group-hover:bg-violet-300 ${index > 10 ? "bg-violet-400" : "bg-violet-500/35"}`}
                      />
                    </div>
                  ),
                )}
              </div>
              <div className="mt-3 flex justify-between text-[10px] text-slate-600">
                <span>Aug 15</span>
                <span>Aug 22</span>
                <span>Aug 29</span>
                <span>Sep 05</span>
                <span>Sep 13</span>
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0f19]/80 p-5 sm:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-semibold text-white">Upcoming content</h2>
                  <p className="mt-1 text-xs text-slate-500">
                    Your next scheduled releases
                  </p>
                </div>
                <Link
                  href="/dashboard/calendar"
                  className="text-xs font-semibold text-violet-300 hover:text-violet-200"
                >
                  Open calendar
                </Link>
              </div>
              <div className="mt-5 space-y-3">
                {upcomingPosts.map((post) => (
                  <div
                    key={post.title}
                    className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/30 to-cyan-400/20">
                      <CameraIcon className="h-4 w-4 text-slate-300" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="truncate text-xs font-semibold text-slate-200">
                          {post.title}
                        </p>
                        <span
                          className={`hidden text-[10px] font-semibold sm:inline ${post.color}`}
                        >
                          {post.type}
                        </span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-500">
                        {post.platform} · {post.time}
                      </p>
                    </div>
                    <ClockIcon className="h-4 w-4 shrink-0 text-slate-600" />
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0f19]/80 p-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <h2 className="font-semibold text-white">System health</h2>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                All generation and publishing systems are operational.
              </p>
              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">AI generation queue</span>
                  <span className="font-semibold text-emerald-300">
                    Operational
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Social connections</span>
                  <span className="font-semibold text-emerald-300">
                    3 of 3 active
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0f19]/80 p-5">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-white">Top persona</h2>
                <Link
                  href="/dashboard/studio"
                  className="text-xs text-violet-300"
                >
                  View all
                </Link>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-400 to-orange-300 text-lg">
                  EV
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Elena Vance
                  </p>
                  <p className="text-xs text-slate-500">@elena.vance.ai</p>
                </div>
                <span className="ml-auto rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] font-semibold text-emerald-300">
                  Active
                </span>
              </div>
              <div className="mt-5 flex justify-between border-t border-white/[0.06] pt-4 text-xs">
                <span className="text-slate-500">Engagement</span>
                <span className="font-semibold text-white">8.9%</span>
                <span className="text-emerald-300">+2.4%</span>
              </div>
            </div>
            <div className="rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/15 to-cyan-400/[0.06] p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-400/15 text-violet-200">
                <ZapIcon className="h-4 w-4" />
              </div>
              <h2 className="mt-4 font-semibold text-white">Your next move</h2>
              <p className="mt-2 text-xs leading-5 text-slate-400">
                Turn your latest studio draft into a week of platform-ready
                content.
              </p>
              <Link
                href="/dashboard/studio"
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-violet-200"
              >
                Open Studio <span>→</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function HeartIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35 10.55 20C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35Z" />
    </svg>
  );
}

function ZapIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    </svg>
  );
}
