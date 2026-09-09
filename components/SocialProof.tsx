import {
  InstagramIcon,
  TikTokIcon,
  TwitterXIcon,
  YouTubeIcon,
} from "./icons";

export default function SocialProof() {
  const platforms = [
    { name: "Instagram", icon: InstagramIcon, color: "text-pink-400", feature: "Reels & Carousels" },
    { name: "TikTok", icon: TikTokIcon, color: "text-cyan-400", feature: "Trending Audio Sync" },
    { name: "YouTube Shorts", icon: YouTubeIcon, color: "text-red-400", feature: "4K 60fps Shortform" },
    { name: "X (Twitter)", icon: TwitterXIcon, color: "text-slate-100", feature: "Threads & Photos" },
  ];

  const metrics = [
    { label: "Active AI Influencers", value: "54,200+", change: "+34% this month" },
    { label: "Posts Auto-Scheduled", value: "14.8M", change: "99.9% on-time delivery" },
    { label: "Creator Earnings Powered", value: "$4.6M+", change: "Through brand collabs" },
    { label: "Account Bans / Strikes", value: "0", change: "100% Official API Compliance" },
  ];

  return (
    <section className="relative py-12 border-y border-white/[0.06] bg-gradient-to-b from-[#090b14]/50 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Platform Sync Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/[0.06]">
          <div className="text-center md:text-left">
            <span className="text-xs font-semibold uppercase tracking-widest text-violet-400">
              Native Multi-Platform Auto-Publish
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              One Persona. Everywhere Your Audience Lives.
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <div
                  key={platform.name}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-violet-500/30 transition-colors group"
                >
                  <Icon className={`w-5 h-5 ${platform.color} group-hover:scale-110 transition-transform`} />
                  <div className="text-left">
                    <div className="text-xs font-semibold text-white leading-tight">
                      {platform.name}
                    </div>
                    <div className="text-[10px] text-slate-400">{platform.feature}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Big Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="relative p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400 font-mono">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-2">{metric.label}</div>
              <div className="flex items-center gap-1.5 text-xs text-violet-400 mt-1 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                {metric.change}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
