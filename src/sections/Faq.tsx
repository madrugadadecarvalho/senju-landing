import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/landing";

export function Faq() {
  return (
    <section
      id="perguntas"
      aria-labelledby="perguntas-titulo"
      className="bg-mist/60 py-24 sm:py-32"
    >
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            id="perguntas-titulo"
            eyebrow="Perguntas frequentes"
            title={
              <>
                Perguntas que nos fazem <em>muitas vezes.</em>
              </>
            }
          />
        </Reveal>

        <div className="divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold text-night [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus
                  className="size-5 shrink-0 text-brand transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="-mt-1 pr-10 pb-6 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
