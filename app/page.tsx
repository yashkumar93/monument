import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Spotlight } from "@/components/spotlight";
import { LogoWall } from "@/components/logo-wall";
import { Services } from "@/components/services";
import { Method } from "@/components/method";
import { Numbers } from "@/components/numbers";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { News } from "@/components/news";
import { Newsletter } from "@/components/newsletter";
import { FinalCTA } from "@/components/final-cta";
import { SiteFooter } from "@/components/site-footer";
import { Tweaks } from "@/components/tweaks";
import { CursorGlow } from "@/components/cursor-glow";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <Spotlight />
        <LogoWall />
        <Services />
        <Method />
        <Numbers />
        <Testimonials />
        <Pricing />
        <News />
        <Newsletter />
        <FinalCTA />
      </main>
      <SiteFooter />
      <Tweaks />
    </>
  );
}
