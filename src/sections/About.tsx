import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamFacts } from "@/content/landing";

export function About() {
  return (
    <section aria-labelledby="sobre-titulo" className="py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            id="sobre-titulo"
            eyebrow="Porque existimos"
            title={
              <>
                Vimos negócios incríveis em Luanda <em>a perder clientes.</em>
              </>
            }
            intro="Muitas empresas angolanas têm um bom produto e um bom serviço, mas não aparecem no Google, demoram a responder e fazem tudo à mão. Por isso juntámos tecnologia, design e marketing num só lugar."
          />
          <p className="mt-8 font-display text-2xl font-semibold text-night italic">
            Uma equipa de Luanda, para negócios de Luanda.
          </p>
        </Reveal>

        <ul className="divide-y divide-line border-y border-line">
          {teamFacts.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.08} className="flex gap-5 py-7">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-mist text-brand">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-night">{title}</h3>
                  <p className="mt-1 leading-relaxed">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
