import type { Metadata } from "next";
import { ResourcesHero, ArticlesGrid } from "@/components/resources";

export const metadata: Metadata = {
  title: "Resources — Monument Solutions",
  description:
    "Access industry trends, expert advice, and practical tips to elevate your marketing success.",
};

export default function ResourcesPage() {
  return (
    <main>
      <ResourcesHero />
      <ArticlesGrid />
    </main>
  );
}
