import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { guarantees } from "@/content/landing";
import { track } from "@/lib/analytics";
import { whatsappLink } from "@/lib/whatsapp";

export function HowWeWork() {
  return (
    <section
      id="como-trabalhamos"
      aria-labelledby="como-titulo"
      className="bg-night py-24 text-white sm:py-32"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="como-titulo"
            tone="dark"
            align="center"
            eyebrow="Como trabalhamos"
            title={
              <>
                Resultados primeiro. <em>O risco fica connosco.</em>
              </>
            }
            intro="Trabalhamos com poucas empresas de cada vez, para dar a cada uma atenção total e resultados medidos todos os meses."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {guarantees.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/5 p-8">
                <Icon className="size-8 text-brand-light" aria-hidden="true" />
                <h3 className="mt-6 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-white/80">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-col items-center gap-6 text-center">
          <p className="max-w-xl text-lg text-white/90">
            <strong className="font-semibold text-white">
              Condição especial de lançamento:
            </strong>{" "}
            cerca de 40% de desconto nos primeiros 6 meses.
          </p>
          <ButtonLink
            href={whatsappLink(
              "Olá! Quero saber mais sobre a condição especial de lançamento.",
            )}
            external
            variant="light"
            icon={<WhatsAppIcon />}
            onClick={() =>
              track("whatsapp_click", { location: "launch_offer" })
            }
          >
            Quero aproveitar a condição
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
