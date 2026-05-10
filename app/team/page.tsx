import type { Metadata } from "next";
import { TeamHero, TeamGrid } from "@/components/team";

export const metadata: Metadata = {
  title: "Our Team — Monument Solutions",
  description:
    "Get acquainted with the dedicated individuals who bring innovation, structure, and excellence to every project.",
};

export default function TeamPage() {
  return (
    <main>
      <TeamHero />
      <TeamGrid />
    </main>
  );
}
