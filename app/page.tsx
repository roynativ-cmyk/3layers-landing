import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { TrustedBy } from "@/components/TrustedBy";
import { Logos } from "@/components/Logos";
import { Problem } from "@/components/Problem";
import { Layers } from "@/components/Layers";
import { Workspace } from "@/components/Workspace";
import { Flow } from "@/components/Flow";
import { Deploy } from "@/components/Deploy";
import { Compare } from "@/components/Compare";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Logos />
        <Problem />
        <Layers />
        <Workspace />
        <Flow />
        <Deploy />
        <Compare />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
