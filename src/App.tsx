import { About } from "@/sections/About";
import { Demo } from "@/sections/Demo";
import { Diagnostic } from "@/sections/Diagnostic";
import { Faq } from "@/sections/Faq";
import { FinalCta } from "@/sections/FinalCta";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { HowWeWork } from "@/sections/HowWeWork";
import { Problem } from "@/sections/Problem";
import { Services } from "@/sections/Services";
import { StickyWhatsApp } from "@/sections/StickyWhatsApp";

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-[60] rounded-full bg-white px-4 py-2 font-semibold text-night focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Saltar para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Problem />
        <Services />
        <Diagnostic />
        <Demo />
        <HowWeWork />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
