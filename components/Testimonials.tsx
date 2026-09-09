import { StarIcon, CheckIcon } from "./icons";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marcus Sterling",
      role: "Solo AI Creator & Digital Marketer",
      handle: "@marcusai.lab",
      avatarEmoji: "🚀",
      rating: 5,
      metric: "+480K Followers in 90 Days",
      revenue: "$18.4K/mo Sponsorships",
      quote:
        "Before AuraSync, maintaining consistent facial features across different lighting and outfits in Midjourney or Stable Diffusion was a nightmare. AuraSync solved face drift completely. Combined with the auto-scheduler, my persona posts twice a day while I sleep.",
    },
    {
      name: "Sarah Lin-Gomez",
      role: "Founder & Talent Director, NexaTalent",
      handle: "@nexatalent_mgmt",
      avatarEmoji: "💼",
      rating: 5,
      metric: "14 Virtual Influencers Managed",
      revenue: "$92K Brand Deals Q1",
      quote:
        "We manage 14 virtual creators across fashion, gaming, and lifestyle. AuraSync gives our agency an enterprise-grade pipeline: batch generating 500 photos a week, scheduling to TikTok and Instagram, and syncing voice reels without hiring a single human model.",
    },
    {
      name: "Elena Rossi",
      role: "Creative Director, Veloce Apparel",
      handle: "@veloce.studio",
      avatarEmoji: "✨",
      rating: 5,
      metric: "8.9% Engagement Benchmark",
      revenue: "Saved $38K in Studio Shoots",
      quote:
        "Our digital fashion brand uses AuraSync to showcase our seasonal lookbooks. The photorealism of fabric textures, natural skin pores, and lighting reflections is indistinguishable from traditional $15k photoshoot campaigns.",
    },
  ];

  return (
    <section id="testimonials" className="relative py-24 border-t border-white/[0.06] bg-[#090b14]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Creator Proof
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Trusted By The Next Generation of Media Empires
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Discover how creators and agencies are building multi-six-figure virtual influencer businesses with AuraSync.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8 flex flex-col justify-between hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div>
                {/* Stars & Metric Strip */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-semibold">
                    {t.metric}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic mb-6">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-lg">
                    {t.avatarEmoji}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1">
                      {t.name}
                      <CheckIcon className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-500">Tracked Revenue</div>
                  <div className="text-xs font-mono font-bold text-purple-300">{t.revenue}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
