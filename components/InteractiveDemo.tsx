"use client";

import { useState } from "react";
import {
  SparklesIcon,
  ClockIcon,
  InstagramIcon,
  TikTokIcon,
  HeartIcon,
  Share2Icon,
  CheckIcon,
  SlidersIcon,
} from "./icons";

interface PersonaNiche {
  id: string;
  name: string;
  handle: string;
  category: string;
  avatarBg: string;
  avatarEmoji: string;
  followers: string;
  engagement: string;
  monthlyRevenue: string;
  prompt: string;
  hook: string;
  caption: string;
  hashtags: string[];
  scheduledTime: string;
  postType: "Photo" | "Video Reel";
  imageColor: string;
  imageEmoji: string;
  sceneTitle: string;
}

const NICHES: PersonaNiche[] = [
  {
    id: "fitness",
    name: "Maya Croft",
    handle: "@mayafit.ai",
    category: "Fitness & Athletic Performance",
    avatarBg: "from-emerald-500 to-teal-700",
    avatarEmoji: "🏋️‍♀️",
    followers: "524.3K",
    engagement: "9.2%",
    monthlyRevenue: "$16,800",
    prompt:
      "Ultra-realistic 8K photograph of Maya Croft, athletic build, high ponytail, in matte black seamless gym set, dynamic kettlebell movement, modern glasshouse gym with morning sunlight flare, sweat sheen, 85mm f/1.4 lens.",
    hook: "The 4-second rule that permanently eliminated my workout plateau 🔥",
    caption:
      "Most people quit right when the burn starts — that's the exact moment your muscle fibers actually trigger adaptation. Save this routine for tomorrow's leg day! 👊",
    hashtags: ["#FitnessMotivation", "#HyroxTraining", "#GymTok", "#MindsetShift", "#VirtualCoach"],
    scheduledTime: "Today at 06:30 AM (Peak morning fitness browsing)",
    postType: "Video Reel",
    imageColor: "from-emerald-800 via-teal-900 to-slate-950",
    imageEmoji: "⚡",
    sceneTitle: "High-Intensity Functional Studio",
  },
  {
    id: "luxury",
    name: "Julian Saint",
    handle: "@juliansaint.style",
    category: "Luxury Fashion & Tailoring",
    avatarBg: "from-amber-400 to-rose-700",
    avatarEmoji: "🕶️",
    followers: "680.1K",
    engagement: "7.8%",
    monthlyRevenue: "$24,500",
    prompt:
      "Medium close-up portrait of Julian Saint walking along Lake Como promenade, wearing bespoke cream cashmere trench coat, vintage Persol sunglasses, soft overcast cinematic lighting, Hasselblad X2D 100C.",
    hook: "Quiet luxury isn't about avoiding logos. It's about proportion.",
    caption:
      "Exploring Lombardy in bespoke knitwear. When the texture does the talking, you never have to raise your voice. Which palette do you prefer: Oat or Charcoal?",
    hashtags: ["#QuietLuxury", "#MensStyle", "#LakeComo", "#OldMoneyAesthetic", "#BespokeTailoring"],
    scheduledTime: "Today at 07:15 PM (European evening engagement surge)",
    postType: "Photo",
    imageColor: "from-amber-900 via-stone-900 to-slate-950",
    imageEmoji: "🏛️",
    sceneTitle: "Lake Como Sunset Editorial",
  },
  {
    id: "tech",
    name: "Nova Pixel",
    handle: "@novavox.ai",
    category: "Cyberpunk & AI Streamer",
    avatarBg: "from-violet-500 to-cyan-500",
    avatarEmoji: "🎧",
    followers: "419.7K",
    engagement: "11.4%",
    monthlyRevenue: "$19,200",
    prompt:
      "Cinematic neon portrait of Nova Pixel with holographic violet braids, futuristic transparent mech headphones, ambient purple and cyan RGB reflections, high tech gaming battlestation backdrop, Unreal Engine 5 render style.",
    hook: "Can an AI influencer beat Elden Ring without taking damage? 🎮",
    caption:
      "Chat asked for the hardest challenge yet! Streaming the new DLC tonight with custom chat-controlled neural shaders. Drop your favorite build in the comments below!",
    hashtags: ["#GamerGirl", "#StreamerLife", "#CyberpunkVibes", "#AICreator", "#TwitchClips"],
    scheduledTime: "Today at 09:00 PM (Gaming audience prime streaming window)",
    postType: "Video Reel",
    imageColor: "from-violet-900 via-fuchsia-950 to-cyan-950",
    imageEmoji: "🔮",
    sceneTitle: "RGB Battlestation Studio",
  },
  {
    id: "travel",
    name: "Chloe Sol",
    handle: "@chloesol.wander",
    category: "Nomadic Travel & Eco-Living",
    avatarBg: "from-sky-400 to-indigo-600",
    avatarEmoji: "✈️",
    followers: "390.8K",
    engagement: "8.6%",
    monthlyRevenue: "$13,400",
    prompt:
      "Wide scenic shot of Chloe Sol sitting on a wooden outcropping overlooking the turquoise cenotes in Tulum, Mexico, bohemian linen dress, golden sunset rays filtering through jungle canopy, natural skin texture, Sony A7R V.",
    hook: "3 secret cenotes in the Yucatan that tourists haven't ruined yet 🌊",
    caption:
      "Woke up at 5:30 AM to swim in pure underground crystal water before the crowds arrived. Bookmark this for your next trip to Quintana Roo! Full coordinates in my bio link.",
    hashtags: ["#TulumSecrets", "#NomadLifestyle", "#SoloTravel", "#CenotesMexico", "#HiddenGems"],
    scheduledTime: "Tomorrow at 11:00 AM (Weekend vacation planning peak)",
    postType: "Photo",
    imageColor: "from-teal-900 via-cyan-950 to-blue-950",
    imageEmoji: "🌴",
    sceneTitle: "Yucatan Cenote Hidden Lagoon",
  },
];

export default function InteractiveDemo() {
  const [selectedNicheId, setSelectedNicheId] = useState("fitness");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "scheduler" | "prompt">("preview");

  const current = NICHES.find((n) => n.id === selectedNicheId) || NICHES[0];

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(current.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <SlidersIcon className="w-3.5 h-3.5" />
            Interactive Studio Sandbox
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            See How Easy It Is To Launch & Auto-Schedule
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Pick a niche below to explore persona consistency, AI prompt generation, and automated multi-channel publishing in real-time.
          </p>
        </div>

        {/* Niche Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {NICHES.map((niche) => {
            const isSelected = niche.id === selectedNicheId;
            return (
              <button
                key={niche.id}
                onClick={() => setSelectedNicheId(niche.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-600/30 scale-105 border border-violet-400/30"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                <span>{niche.avatarEmoji}</span>
                <span>{niche.name}</span>
                <span className="hidden sm:inline text-xs opacity-75 font-normal">
                  ({niche.category.split("&")[0]})
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Workspace Container */}
        <div className="rounded-3xl border border-white/[0.1] bg-[#0c0e18] shadow-2xl p-4 sm:p-8 backdrop-blur-xl">
          {/* Top Bar with Mode Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${current.avatarBg} flex items-center justify-center text-xl shadow-lg`}>
                {current.avatarEmoji}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold text-white">{current.name}</h3>
                  <span className="text-xs text-slate-400 font-mono">{current.handle}</span>
                  <span className="text-[10px] bg-violet-500/20 text-violet-300 px-2 py-0.5 rounded-full font-medium">
                    {current.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-slate-400 mt-0.5">
                  <span><strong>{current.followers}</strong> Followers</span>
                  <span>•</span>
                  <span className="text-emerald-400 font-medium"><strong>{current.engagement}</strong> Eng. Rate</span>
                  <span>•</span>
                  <span className="text-purple-300 font-medium"><strong>{current.monthlyRevenue}</strong>/mo Est.</span>
                </div>
              </div>
            </div>

            {/* View Mode Buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/[0.08]">
              <button
                onClick={() => setActiveTab("preview")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === "preview"
                    ? "bg-violet-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Social Post Preview
              </button>
              <button
                onClick={() => setActiveTab("scheduler")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === "scheduler"
                    ? "bg-violet-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Auto-Schedule Slot
              </button>
              <button
                onClick={() => setActiveTab("prompt")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === "prompt"
                    ? "bg-violet-600 text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Consistency Prompt
              </button>
            </div>
          </div>

          {/* Dynamic Content Body */}
          <div className="pt-8">
            {activeTab === "preview" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Post Mockup (5 Cols) */}
                <div className="lg:col-span-5 max-w-sm mx-auto w-full">
                  <div className="rounded-2xl border border-white/[0.12] bg-[#121422] p-4 shadow-xl">
                    {/* Mock header */}
                    <div className="flex items-center justify-between pb-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${current.avatarBg} flex items-center justify-center text-sm`}>
                          {current.avatarEmoji}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1">
                            {current.name}
                            <span className="text-cyan-400 text-[10px]">●</span>
                          </div>
                          <div className="text-[10px] text-slate-400">{current.sceneTitle}</div>
                        </div>
                      </div>
                      <span className="text-xs text-slate-400">•••</span>
                    </div>

                    {/* Image / Video frame */}
                    <div className={`relative w-full aspect-square rounded-xl bg-gradient-to-br ${current.imageColor} flex flex-col items-center justify-center overflow-hidden p-6 text-center group`}>
                      <div className="absolute inset-0 bg-radial from-transparent to-black/40" />
                      <span className="text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                        {current.imageEmoji}
                      </span>
                      <span className="relative z-10 text-sm font-semibold text-white px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                        {current.sceneTitle}
                      </span>
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-200">
                        <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur font-mono">
                          {current.postType === "Video Reel" ? "🎥 4K Reel • 30s" : "📸 8K Raw Photo"}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/80 text-black font-bold">
                          Face Match: 99.7%
                        </span>
                      </div>
                    </div>

                    {/* Mock action buttons */}
                    <div className="flex items-center justify-between pt-3 text-slate-300">
                      <div className="flex items-center gap-4">
                        <span className="hover:text-red-400 cursor-pointer flex items-center gap-1 text-xs">
                          <HeartIcon className="w-5 h-5 text-red-500" />
                          <strong className="text-slate-200">32.4K</strong>
                        </span>
                        <span className="hover:text-violet-400 cursor-pointer flex items-center gap-1 text-xs">
                          <Share2Icon className="w-4 h-4" />
                          <span>4.1K</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400">
                        <InstagramIcon className="w-4 h-4 text-pink-400" />
                        <TikTokIcon className="w-4 h-4 text-cyan-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Post Details & AI Optimizer (7 Cols) */}
                <div className="lg:col-span-7 space-y-5 text-left">
                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-violet-400 flex items-center gap-1.5">
                        <SparklesIcon className="w-4 h-4" />
                        AI Copywriter & Hook Engine
                      </span>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        High-Virality Hook
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-base font-bold text-white">
                        &quot;{current.hook}&quot;
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {current.caption}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {current.hashtags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-medium text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-md"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Scheduled Dispatch Info */}
                  <div className="p-5 rounded-2xl bg-gradient-to-r from-violet-950/30 to-indigo-950/20 border border-violet-500/20">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="flex items-center gap-1.5 text-slate-200 font-semibold">
                        <ClockIcon className="w-4 h-4 text-cyan-400" />
                        Autopilot Dispatch Time
                      </span>
                      <span className="text-cyan-400 font-mono">Synced to Meta Graph & TikTok API</span>
                    </div>
                    <div className="text-sm font-medium text-slate-100">
                      {current.scheduledTime}
                    </div>
                    <div className="mt-3 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/[0.06]">
                      <span>Targeting 3 platforms simultaneously</span>
                      <span className="text-emerald-400 font-semibold">Auto-Rescheduling if Peak Shifts</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={handleCopyPrompt}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] text-white transition-colors"
                    >
                      {copied ? <CheckIcon className="w-4 h-4 text-emerald-400" /> : <SparklesIcon className="w-4 h-4 text-violet-400" />}
                      {copied ? "Prompt Copied!" : "Copy Full Generation Prompt"}
                    </button>
                    <a
                      href="#pricing"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-colors shadow-lg shadow-violet-600/20"
                    >
                      <span>Create This Persona &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "scheduler" && (
              <div className="space-y-4 text-left">
                <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.08]">
                  <div>
                    <h4 className="text-sm font-bold text-white">Automated Weekly Dispatch Calendar</h4>
                    <p className="text-xs text-slate-400">
                      AuraSync automatically queues 14 high-retention posts per week tailored to your persona&apos;s audience timezones.
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                    100% Autonomous
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/30 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-cyan-400">Monday • 07:30 AM</span>
                      <span className="text-[10px] bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded font-bold">Instagram</span>
                    </div>
                    <div className="text-xs font-semibold text-white">Morning Routine & Mindset Reel</div>
                    <div className="text-[11px] text-slate-400">Voice-cloned talking short with dynamic auto-captions.</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-400">Wednesday • 01:15 PM</span>
                      <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded font-bold">TikTok</span>
                    </div>
                    <div className="text-xs font-semibold text-white">Viral Trend Lip-Sync & Audio Match</div>
                    <div className="text-[11px] text-slate-400">Matched to #1 trending sound on TikTok US algorithm.</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-slate-400">Friday • 06:45 PM</span>
                      <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded font-bold">Multi-Channel</span>
                    </div>
                    <div className="text-xs font-semibold text-white">Weekend Lookbook (5 Photo Carousel)</div>
                    <div className="text-[11px] text-slate-400">Tagged with affiliate sponsorship mockup tracking links.</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "prompt" && (
              <div className="p-6 rounded-2xl bg-black/60 border border-white/[0.08] text-left font-mono">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-4">
                  <span className="text-xs text-violet-400 font-semibold">
                    {"// AuraSync Latent Consistency Anchor v3.4"}
                  </span>
                  <button
                    onClick={handleCopyPrompt}
                    className="text-xs text-slate-300 hover:text-white px-3 py-1 rounded bg-white/10 hover:bg-white/15 transition-colors"
                  >
                    {copied ? "Copied!" : "Copy Prompt"}
                  </button>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed break-words whitespace-pre-wrap">
                  {current.prompt}
                </p>
                <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap gap-4 text-[11px] text-slate-500">
                  <span>Lora Weight: <strong>0.85 (Locked)</strong></span>
                  <span>Face Geometry Seed: <strong>894103291</strong></span>
                  <span>Clip Skip: <strong>2</strong></span>
                  <span>Negative Prompt: <strong>deformed eyes, extra fingers, cartoon, 3d render</strong></span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
