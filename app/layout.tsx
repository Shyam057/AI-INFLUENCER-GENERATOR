import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AuraSync AI • AI Influencer Generator & Auto Post Scheduler",
  description:
    "Create hyper-realistic virtual influencers with 100% facial consistency and put your social media growth on autopilot across Instagram, TikTok, YouTube, and X.",
  keywords: [
    "AI Influencer",
    "Virtual Creator",
    "Auto Post Scheduler",
    "Social Media Automation",
    "AI Avatar Generator",
    "Consistent Character Generator",
  ],
  openGraph: {
    title: "AuraSync AI • AI Influencer Generator & Auto Post Scheduler",
    description:
      "Create hyper-realistic virtual influencers and automate your 24/7 social media publishing pipeline.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth h-full">
      <body className="min-h-full flex flex-col bg-[#07080d] text-slate-100 antialiased selection:bg-violet-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
