import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { problems } from "@/content/landing";

export function Problem() {
  return (
    <section aria-labelledby="problema-titulo" className="py-24 sm:py-32">
      <Container>
        <Reveal>
          <SectionHeading
            id="problema-titulo"
            eyebrow="Soa-lhe familiar?"
            title={
              <>
                O cliente quer comprar. <em>O digital não deixa.</em>
              </>
            }
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article className="h-full rounded-3xl border border-line bg-white p-8 transition-shadow hover:shadow-xl hover:shadow-night/5">
                <span className="grid size-12 place-items-center rounded-2xl bg-mist text-brand">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-night">{title}</h3>
                <p className="mt-3 leading-relaxed">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-14 border-l-4 border-brand pl-6 font-display text-2xl leading-snug font-semibold text-night italic sm:text-3xl">
            Responder depressa já não é luxo. É o mínimo que o cliente espera.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
