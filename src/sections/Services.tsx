import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/content/landing";

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="bg-mist/60 py-24 sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="servicos-titulo"
            eyebrow="O que fazemos"
            title={
              <>
                O digital da sua empresa, <em>tratado.</em>
              </>
            }
          />
        </Reveal>

        <ol className="mt-14 divide-y divide-line border-y border-line">
          {services.map((s) => (
            <li key={s.number}>
              <Reveal className="grid gap-4 py-10 md:grid-cols-[5rem_1fr_1fr] md:gap-10">
                <span className="font-display text-4xl font-semibold text-brand italic">
                  {s.number}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-night sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-lg">{s.text}</p>
                </div>
                <ul className="space-y-2.5 md:pt-1">
                  {s.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check
                        className="mt-0.5 size-5 shrink-0 text-brand"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal className="mt-12 flex flex-col gap-6 rounded-3xl bg-night p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <p className="max-w-xl text-lg leading-relaxed text-white/90">
            Além das redes sociais, construímos os sistemas que trabalham por
            si, mesmo fora do horário.
          </p>
          <a
            href="#diagnostico"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-white underline-offset-4 hover:underline"
          >
            Qual destes precisa primeiro? Descubra no diagnóstico
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
