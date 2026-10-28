import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Monogram } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site } from "@/config/site";
import { track } from "@/lib/analytics";
import { whatsappLink } from "@/lib/whatsapp";

export function FinalCta() {
  return (
    <section
      id="contacto"
      aria-labelledby="final-titulo"
      className="relative isolate overflow-hidden py-28 text-center text-white bg-brand-gradient sm:py-36"
    >
      <Monogram
        tone="white"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 w-[30rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] sm:w-[40rem]"
      />
      <Container>
        <Reveal>
          <h2
            id="final-titulo"
            className="mx-auto max-w-3xl font-display text-4xl leading-[1.08] font-bold text-balance sm:text-6xl"
          >
            Os seus clientes estão a procurá-lo{" "}
            <em className="font-semibold italic">agora mesmo.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">
            Mande “DIAGNÓSTICO” no WhatsApp. Respondemos no próprio dia e
            dizemos-lhe o que melhorar primeiro.
          </p>
          <ButtonLink
            href={whatsappLink()}
            external
            variant="light"
            icon={<WhatsAppIcon />}
            className="mt-10 px-8 text-lg"
            onClick={() => track("whatsapp_click", { location: "final_cta" })}
          >
            Pedir diagnóstico gratuito
          </ButtonLink>
          <p className="mt-8 label text-white/70">
            Sem compromisso · {site.city} · {site.country}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
