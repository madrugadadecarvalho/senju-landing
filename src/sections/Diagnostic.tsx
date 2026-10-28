import { Container } from "@/components/ui/Container";
import { Monogram } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { diagnosticAreas, diagnosticSteps } from "@/content/landing";
import { DiagnosticForm } from "@/features/diagnostic/DiagnosticForm";

export function Diagnostic() {
  return (
    <section
      id="diagnostico"
      aria-labelledby="diagnostico-titulo"
      className="relative isolate overflow-hidden py-24 text-white bg-brand-gradient sm:py-32"
    >
      <Monogram
        tone="white"
        className="pointer-events-none absolute top-10 -right-32 -z-10 w-[36rem] opacity-[0.06]"
      />
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading
              id="diagnostico-titulo"
              tone="dark"
              eyebrow="Diagnóstico gratuito"
              title={
                <>
                  Dizemos-lhe o que está a travar o seu negócio no digital.{" "}
                  <em>De graça.</em>
                </>
              }
              intro="Uma página, 3 problemas concretos e como resolvê-los. Fica consigo, mesmo que não trabalhe connosco."
            />
          </Reveal>

          <ol className="mt-12 space-y-7">
            {diagnosticSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <li className="flex gap-5">
                  <span className="font-display text-3xl leading-none font-semibold italic">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-1 leading-relaxed text-white/85">
                      {step.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <p className="mt-12 label text-white/70">O que analisamos</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {diagnosticAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-sm"
                >
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:pt-6">
          <DiagnosticForm />
          <p className="mt-5 text-center text-sm text-white/80">
            Sem compromisso. Se não fizer sentido, fica com o diagnóstico na
            mesma.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
