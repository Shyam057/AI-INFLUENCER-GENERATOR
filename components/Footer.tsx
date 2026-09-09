import {
  SparklesIcon,
  InstagramIcon,
  TikTokIcon,
  TwitterXIcon,
  YouTubeIcon,
} from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#05060a] text-slate-400 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-purple-500 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#0d0e17] rounded-[11px] flex items-center justify-center">
                  <SparklesIcon className="w-4 h-4 text-violet-400" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Aura<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400">Sync</span>
                <span className="text-xs font-mono text-violet-400 ml-1.5 font-normal">AI</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The premier AI creator studio for generating consistent virtual influencers, batch-producing 8K studio media, and automating 24/7 social growth across all major networks.
            </p>

            {/* Live System Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-medium text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400 font-mono">99.98% Uptime</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2 text-slate-400">
              <a href="#" className="p-2 rounded-lg bg-white/[0.04] hover:text-pink-400 hover:bg-white/[0.08] transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/[0.04] hover:text-cyan-400 hover:bg-white/[0.08] transition-colors" aria-label="TikTok">
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/[0.04] hover:text-white hover:bg-white/[0.08] transition-colors" aria-label="X">
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/[0.04] hover:text-red-400 hover:bg-white/[0.08] transition-colors" aria-label="YouTube">
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 1: Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Face Consistency Engine
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition-colors">
                  Multi-Platform Auto-Scheduler
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Voice & Video Reel Lip-Sync
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Virtual Brand Placement Hub
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition-colors">
                  Virality & Timing Predictor
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing & Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Integrations */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Integrations
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram Graph API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  TikTok for Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  YouTube Shorts API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  X (Twitter) v2 API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Webhooks & Zapier Integration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  REST API Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Ethics */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Compliance & Ethics
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FTC AI Disclosure Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Responsible AI Creator Charter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Brand Sponsorship Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security & SOC2 Type II
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 AuraSync AI, Inc. All rights reserved. Empowering modern creator economies.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Cookies</a>
            <a href="#" className="hover:text-slate-300">System Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
