import type { Metadata } from "next";
import { CareersHero, OpenRoles } from "@/components/careers";

export const metadata: Metadata = {
  title: "Careers — Monument Solutions",
  description:
    "Discover thrilling career opportunities at Monument and elevate your professional journey.",
};

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <OpenRoles />
    </main>
  );
}
