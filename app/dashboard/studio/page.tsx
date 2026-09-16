"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { useAuth } from "@/components/providers/AuthProvider";
import {
  ArrowRightIcon,
  CameraIcon,
  CheckIcon,
  MenuIcon,
  RefreshCwIcon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
} from "@/components/icons";

const portraitImage =
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=85";
const bodyImage =
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&q=85";

const optionGroups = [
  { key: "gender", label: "Gender", icon: "◐", options: ["Female", "Male"] },
  {
    key: "bodyType",
    label: "Body type",
    icon: "◒",
    options: ["Petite", "Athletic", "Curvy", "Tall"],
  },
  {
    key: "skinTone",
    label: "Skin tone",
    icon: "◉",
    options: ["Porcelain", "Warm beige", "Golden", "Deep"],
  },
  {
    key: "ageRange",
    label: "Age range",
    icon: "⌁",
    options: ["18–24", "25–34", "35–44", "45+"],
  },
  {
    key: "hairStyle",
    label: "Hair style",
    icon: "✦",
    options: ["Long waves", "Bob cut", "Braids", "Pixie"],
  },
  {
    key: "hairColor",
    label: "Hair color",
    icon: "◌",
    options: ["Brunette", "Blonde", "Black", "Copper"],
  },
  {
    key: "eyeColor",
    label: "Eye color",
    icon: "◉",
    options: ["Brown", "Hazel", "Blue", "Green"],
  },
  {
    key: "vibe",
    label: "Vibe / aesthetic",
    icon: "✧",
    options: ["Soft editorial", "Street luxe", "Clean girl", "Retro muse"],
  },
] as const;

type OptionKey = (typeof optionGroups)[number]["key"];
type StudioOptions = Record<OptionKey, string>;

const defaultOptions: StudioOptions = {
  gender: "Female",
  bodyType: "Athletic",
  skinTone: "Warm beige",
  ageRange: "25–34",
  hairStyle: "Long waves",
  hairColor: "Brunette",
  eyeColor: "Hazel",
  vibe: "Soft editorial",
};

function ChoiceGroup({
  group,
  value,
  onChange,
}: {
  group: (typeof optionGroups)[number];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2.5 flex items-center gap-2 text-xs font-semibold text-slate-300">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-400/10 text-sm text-violet-300">
          {group.icon}
        </span>
        {group.label}
      </legend>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {group.options.map((option) => {
          const selected = option === value;
          return (
            <button
              type="button"
              key={option}
              onClick={() => onChange(option)}
              className={`relative min-h-10 rounded-xl border px-2 py-2 text-[11px] font-medium transition-all ${selected ? "border-violet-300/70 bg-violet-400/15 text-white shadow-[0_0_0_3px_rgba(167,139,250,0.08)]" : "border-white/[0.07] bg-white/[0.025] text-slate-400 hover:border-white/20 hover:bg-white/[0.06] hover:text-slate-200"}`}
            >
              {option}
              {selected && (
                <CheckIcon className="absolute right-1.5 top-1.5 h-3 w-3 text-violet-300" />
              )}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function StudioPage() {
  const router = useRouter();
  const { user, profile, isLoading, signOut, refreshProfile } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"model" | "post">("model");
  const [name, setName] = useState("Maya Sterling");
  const [options, setOptions] = useState<StudioOptions>(defaultOptions);
  const [credits, setCredits] = useState(300);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isLoading && !user)
      router.push("/sign-in?redirectTo=/dashboard/studio");
  }, [user, isLoading, router]);

  const updateOption = (key: OptionKey, value: string) => {
    setOptions((current) => ({ ...current, [key]: value }));
    setGenerated(false);
  };

  const handleGenerate = async () => {
    if (!name.trim()) {
      setError("Give your influencer a name first.");
      return;
    }
    if (availableCredits < 50) {
      setError("You need at least 50 credits to generate an influencer.");
      return;
    }
    setError("");
    setIsGenerating(true);
    try {
      let remainingCredits = availableCredits - 50;
      if (isSupabaseConfigured() && user) {
        const { data, error: deductionError } = await createClient().rpc(
          "deduct_generation_credits",
          { generation_cost: 50 },
        );
        if (deductionError) throw deductionError;
        remainingCredits = data as number;
        await refreshProfile();
      }
      setCredits(remainingCredits);
      setGenerated(true);
    } catch (generationError) {
      setError(
        generationError instanceof Error
          ? generationError.message
          : "Could not generate this influencer.",
      );
    } finally {
      setIsGenerating(false);
    }
  };

  if (isLoading || !user)
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#07080d] text-sm text-slate-400">
        <RefreshCwIcon className="mr-2 h-4 w-4 animate-spin text-violet-400" />{" "}
        Loading Studio...
      </div>
    );
  const displayName =
    profile?.full_name || user.email?.split("@")[0] || "Creator";
  const availableCredits = profile?.credits ?? credits;
  const prompt = `${options.vibe} virtual influencer, ${options.ageRange}, ${options.gender.toLowerCase()}, ${options.bodyType.toLowerCase()} build, ${options.skinTone.toLowerCase()} skin, ${options.hairStyle.toLowerCase()} ${options.hairColor.toLowerCase()} hair, ${options.eyeColor.toLowerCase()} eyes`;

  return (
    <div className="flex min-h-screen bg-[#07080d] text-slate-100 selection:bg-violet-600 selection:text-white">
      <aside
        className={`${mobileOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 left-0 z-50 flex w-[274px] flex-col border-r border-white/[0.08] bg-[#0b0d15] px-4 py-5 transition-transform duration-300 lg:relative lg:translate-x-0`}
      >
        <div className="flex items-center justify-between px-2">
          <Link
            href="/dashboard"
            className="flex items-center gap-3"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 shadow-lg shadow-violet-500/20">
              <SparklesIcon className="h-[18px] w-[18px] text-white" />
            </span>
            <span className="text-[17px] font-bold tracking-tight text-white">
              Aura<span className="text-violet-300">Sync</span>
            </span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:text-white lg:hidden"
            aria-label="Close navigation"
          >
            ×
          </button>
        </div>
        <nav className="mt-10 space-y-1">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"
          >
            <span>↗</span>Dashboard
          </Link>
          <Link
            href="/dashboard/studio"
            className="flex items-center gap-3 rounded-xl bg-violet-500/12 px-3 py-2.5 text-sm font-medium text-white shadow-[inset_3px_0_0_#a78bfa]"
          >
            <SparklesIcon className="h-[18px] w-[18px] text-violet-300" />
            Models / Studio
          </Link>
          <Link
            href="/dashboard/content"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"
          >
            <VideoIcon className="h-[18px] w-[18px]" />
            Content Library
          </Link>
          <Link
            href="/dashboard/analytics"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-white/[0.04] hover:text-slate-100"
          >
            <span>◌</span>Analytics
          </Link>
        </nav>
        <div className="mt-auto border-t border-white/[0.07] pt-4">
          <div className="flex items-center gap-3 rounded-xl px-2 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 text-sm font-bold">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-slate-200">
                {displayName}
              </p>
              <p className="truncate text-[11px] text-slate-500">
                {user.email}
              </p>
            </div>
            <button
              onClick={signOut}
              className="text-xs text-slate-500 hover:text-red-300"
              aria-label="Sign out"
            >
              Exit
            </button>
          </div>
        </div>
      </aside>
      {mobileOpen && (
        <button
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-label="Close navigation overlay"
        />
      )}
      <main className="min-w-0 flex-1 bg-[radial-gradient(circle_at_80%_0%,rgba(91,64,170,0.16),transparent_32rem)]">
        <header className="flex h-[76px] items-center justify-between border-b border-white/[0.07] px-5 sm:px-8 lg:px-10">
          <button
            onClick={() => setMobileOpen(true)}
            className="rounded-lg p-2 text-slate-400 hover:text-white lg:hidden"
            aria-label="Open navigation"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
          <div className="hidden lg:block">
            <p className="text-xs font-medium text-slate-500">
              Creator workspace
            </p>
            <p className="text-sm font-semibold text-slate-200">
              Models / Studio
            </p>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/[0.06] px-3 py-1.5 text-xs font-semibold text-amber-200">
              <span>✦</span>
              {availableCredits} credits
            </div>
            <div className="h-7 w-px bg-white/[0.08]" />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-cyan-400 text-xs font-bold">
              {displayName.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
          <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-sm font-medium text-violet-300">
                Studio / Create
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Build your next virtual creator
              </h1>
              <p className="mt-2 max-w-xl text-sm text-slate-400">
                Shape every detail, then generate a consistent influencer ready
                for your content pipeline.
              </p>
            </div>
            <div className="flex rounded-xl border border-white/[0.08] bg-white/[0.025] p-1">
              <button
                onClick={() => setActiveTab("model")}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold ${activeTab === "model" ? "bg-violet-500 text-white" : "text-slate-400 hover:text-white"}`}
              >
                <UsersIcon className="h-4 w-4" />
                Add new model
              </button>
              <button
                onClick={() => setActiveTab("post")}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold ${activeTab === "post" ? "bg-violet-500 text-white" : "text-slate-400 hover:text-white"}`}
              >
                <CameraIcon className="h-4 w-4" />
                Create new post
              </button>
            </div>
          </section>
          {activeTab === "post" ? (
            <div className="mt-8 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <CameraIcon className="h-7 w-7" />
              </div>
              <h2 className="mt-5 text-xl font-semibold text-white">
                Post studio is next
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                Your generated models will live here so you can turn them into
                platform-ready posts.
              </p>
              <button
                onClick={() => setActiveTab("model")}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-white"
              >
                Create a model first <ArrowRightIcon className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_minmax(420px,0.92fr)]">
              <section className="rounded-2xl border border-white/[0.08] bg-[#0c0f19]/85 p-5 sm:p-7">
                <div className="flex items-center justify-between border-b border-white/[0.07] pb-5">
                  <div>
                    <h2 className="font-semibold text-white">Model identity</h2>
                    <p className="mt-1 text-xs text-slate-500">
                      Start with the signature details.
                    </p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-300">
                    01 / 02
                  </span>
                </div>
                <label className="mt-6 block text-xs font-semibold text-slate-300">
                  Influencer name
                  <input
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value);
                      setGenerated(false);
                    }}
                    className="mt-2 h-11 w-full rounded-xl border border-white/[0.08] bg-white/[0.035] px-3 text-sm text-white outline-none transition focus:border-violet-400/70"
                    placeholder="e.g. Maya Sterling"
                  />
                </label>
                <div className="mt-7 space-y-6">
                  {optionGroups.map((group) => (
                    <ChoiceGroup
                      key={group.key}
                      group={group}
                      value={options[group.key]}
                      onChange={(value) => updateOption(group.key, value)}
                    />
                  ))}
                </div>
              </section>
              <aside className="xl:sticky xl:top-8 xl:self-start">
                <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0f19]/85">
                  <div className="flex items-start justify-between border-b border-white/[0.07] p-5 sm:p-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
                        Your preview
                      </p>
                      <h2 className="mt-1 text-lg font-semibold text-white">
                        {name || "Untitled creator"}
                      </h2>
                      <p className="mt-1 text-xs text-slate-500">
                        {options.vibe} · {options.ageRange}
                      </p>
                    </div>
                    <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
                      {generated ? "Generated" : "Live draft"}
                    </span>
                  </div>
                  <div className="grid grid-cols-5 gap-2 bg-[#080a11] p-3">
                    <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-xl bg-violet-950/30">
                      <Image
                        src={portraitImage}
                        alt={`${name || "Influencer"} portrait preview`}
                        fill
                        sizes="(max-width: 1280px) 45vw, 340px"
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div className="relative col-span-2 aspect-[2/3] overflow-hidden rounded-xl bg-cyan-950/30">
                      <Image
                        src={bodyImage}
                        alt={`${name || "Influencer"} full body preview`}
                        fill
                        sizes="(max-width: 1280px) 30vw, 220px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 border-t border-white/[0.07] p-5 sm:p-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-600">
                        Style
                      </p>
                      <p className="mt-1 text-xs font-medium text-slate-300">
                        {options.vibe}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-slate-600">
                        Generation
                      </p>
                      <p className="mt-1 text-xs font-medium text-amber-200">
                        50 credits
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-white/[0.07] p-5 sm:p-6">
                    <div className="mb-4 flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Prompt builder ready
                    </div>
                    <p className="mb-4 rounded-lg border border-white/[0.06] bg-black/20 px-3 py-2 text-[11px] leading-5 text-slate-400">
                      {prompt}
                    </p>
                    {error && (
                      <p className="mb-3 rounded-lg bg-red-400/10 px-3 py-2 text-xs text-red-300">
                        {error}
                      </p>
                    )}
                    <button
                      onClick={handleGenerate}
                      disabled={isGenerating}
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-400 hover:to-indigo-400 disabled:cursor-wait disabled:opacity-70"
                    >
                      {isGenerating ? (
                        <>
                          <RefreshCwIcon className="h-4 w-4 animate-spin" />
                          Generating preview...
                        </>
                      ) : (
                        <>
                          <SparklesIcon className="h-4 w-4" />
                          Generate influencer{" "}
                          <span className="text-violet-200">· 50</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
