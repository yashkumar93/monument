import { Hero } from "@/components/hero";
import { Spotlight } from "@/components/spotlight";
import { LogoWall } from "@/components/logo-wall";
import { Services } from "@/components/services";
import { Method } from "@/components/method";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { News } from "@/components/news";
import { Newsletter } from "@/components/newsletter";
import { FinalCTA } from "@/components/final-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Spotlight />
      <LogoWall />
      <Services />
      <Method />
      <Testimonials />
      <Pricing />
      <News />
      <Newsletter />
      <FinalCTA />
    </main>
  );
}
