import {
  SparklesIcon,
  CameraIcon,
  CalendarIcon,
  Share2Icon,
  ArrowRightIcon,
} from "./icons";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Design Your Virtual Persona",
      description:
        "Select facial geometry, ethnicity, age, style aesthetics, and personality traits. Our engine compiles your dedicated latent identity anchor that never changes.",
      icon: SparklesIcon,
      badge: "Persona Inception",
    },
    {
      number: "02",
      title: "Batch Generate Photos & Reels",
      description:
        "Produce hundreds of 8K photos and talking video reels in seconds using 1-click scene presets or custom prompts with guaranteed facial consistency.",
      icon: CameraIcon,
      badge: "Zero-Drift Rendering",
    },
    {
      number: "03",
      title: "AI Writes Captions & Syncs Sounds",
      description:
        "Our viral copywriter generates hooks, story captions, and trending hashtags, while pairing videos with trending audio tracks on TikTok and Reels.",
      icon: Share2Icon,
      badge: "Virality Optimization",
    },
    {
      number: "04",
      title: "Autopilot Publishing & Growth",
      description:
        "Set your weekly posting cadence. AuraSync dispatches content across all platforms during peak audience activity windows and engages with incoming fans.",
      icon: CalendarIcon,
      badge: "Hands-Free Social Growth",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 border-t border-white/[0.06] bg-[#090b14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Simple 4-Step Pipeline
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            From Zero to Automated Virtual Empire
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            No lighting setups, no talent contracts, and no burnout. Launch your virtual creator in under 5 minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 hover:bg-white/[0.04] hover:border-violet-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold font-mono text-white/20 group-hover:text-violet-400/50 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-2 block">
                    {step.badge}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-white/20">
                    <ArrowRightIcon className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
