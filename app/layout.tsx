import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrialBoost – Optimize SaaS Free Trial to Paid Conversion",
  description: "Track trial user behavior, identify conversion blockers, and get personalized interventions to increase your SaaS paid conversions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="44071137-126f-4333-acc7-f33ea13e3798"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
