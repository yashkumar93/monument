import type { Metadata } from "next";
import {
  AIHero,
  AIIntegrate,
  AIWhat,
  AIReasons,
  AIQuote,
  AISteps,
  AIFaq,
} from "@/components/ai-agents";

export const metadata: Metadata = {
  title: "AI Agents — Monument Solutions",
  description:
    "Transform your operations with AI-powered receptionists. Always on, stack-native, integrates with the tools you already run.",
};

export default function AIAgentsPage() {
  return (
    <main>
      <AIHero />
      <AIIntegrate />
      <AIWhat />
      <AIReasons />
      <AIQuote />
      <AISteps />
      <AIFaq />
    </main>
  );
}
