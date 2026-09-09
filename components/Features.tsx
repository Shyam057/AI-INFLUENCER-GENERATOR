import {
  CalendarIcon,
  VideoIcon,
  MessageSquareIcon,
  DollarSignIcon,
  TrendingUpIcon,
  ZapIcon,
  CheckIcon,
  CameraIcon,
} from "./icons";

export default function Features() {
  const features = [
    {
      title: "100% Facial Geometry Consistency",
      tag: "Zero-Drift Engine",
      description:
        "Never worry about your influencer looking like a different person across shots. Our proprietary latent anchor locks jawlines, eyes, skin texture, and aesthetic identity across thousands of photos and video reels.",
      icon: CameraIcon,
      colSpan: "lg:col-span-8",
      gradient: "from-violet-900/30 via-purple-900/10 to-transparent",
      badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
      highlight: "Over 99.8% biometric fidelity verification across 10,000+ scene combinations.",
    },
    {
      title: "Multi-Platform Auto-Scheduler",
      tag: "Set & Forget",
      description:
        "Direct API publishing to Instagram, TikTok, YouTube Shorts, and X. Queue up a month of content in 10 minutes with automated ratio resizing (9:16, 4:5, 1:1) and sound matching.",
      icon: CalendarIcon,
      colSpan: "lg:col-span-4",
      gradient: "from-cyan-900/30 via-teal-900/10 to-transparent",
      badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      highlight: "Official Meta & TikTok developer API verified.",
    },
    {
      title: "Hyper-Realistic Voice & Video Reels",
      tag: "40+ Languages",
      description:
        "Generate short-form talking videos with natural lip synchronization, natural blinking, and authentic vocal cadence. Clone custom accents or select from 120+ studio-grade voices.",
      icon: VideoIcon,
      colSpan: "lg:col-span-4",
      gradient: "from-pink-900/30 via-rose-900/10 to-transparent",
      badgeColor: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      highlight: "4K 60fps rendering with dynamic auto-captions.",
    },
    {
      title: "AI Social Manager: Autonomous DMs & Replies",
      tag: "Engagement Multiplier",
      description:
        "Feed your influencer a detailed persona backstory, memory, and speaking quirks. The AI automatically interacts with fan comments and replies to incoming DMs to boost platform algorithm rank.",
      icon: MessageSquareIcon,
      colSpan: "lg:col-span-4",
      gradient: "from-amber-900/30 via-orange-900/10 to-transparent",
      badgeColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      highlight: "3.4x higher comment retention rate on Instagram.",
    },
    {
      title: "Virtual Product Placement & Monetization Hub",
      tag: "Sponsorship Ready",
      description:
        "Place client products — perfumes, luxury watches, apparel, energy drinks — directly into your AI influencer's hands with photorealistic reflections, natural fabric drape, and FTC compliant disclosures.",
      icon: DollarSignIcon,
      colSpan: "lg:col-span-4",
      gradient: "from-emerald-900/30 via-green-900/10 to-transparent",
      badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      highlight: "Automate media kits, rate sheets, and brand deal tracking.",
    },
    {
      title: "Predictive Virality & Best-Time Engine",
      tag: "Algorithm Powered",
      description:
        "Our neural scheduler monitors hourly engagement trends across your specific niche, shifting post dispatch times dynamically so your content lands when your target audience is scrolling.",
      icon: TrendingUpIcon,
      colSpan: "lg:col-span-12",
      gradient: "from-indigo-900/30 via-violet-900/10 to-transparent",
      badgeColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      highlight: "Generates high-converting caption hooks and viral hashtag clusters tailored to weekly trending sound waves.",
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-[#07080d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ZapIcon className="w-3.5 h-3.5" />
            Cutting-Edge Creator Stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need To Build A Million-Follower Brand
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            AuraSync combines latent diffusion technology with enterprise social publishing infrastructure, giving you an entire studio team in a single dashboard.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`${feature.colSpan} relative rounded-3xl border border-white/[0.08] bg-gradient-to-br ${feature.gradient} p-7 sm:p-9 backdrop-blur-xl hover:border-violet-500/40 transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-lg`}
              >
                {/* Ambient glow on hover */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/5 group-hover:bg-violet-500/10 blur-[80px] rounded-full transition-all duration-500 -z-10" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <span
                      className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${feature.badgeColor}`}
                    >
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs font-medium text-slate-400">
                  <CheckIcon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300">{feature.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
