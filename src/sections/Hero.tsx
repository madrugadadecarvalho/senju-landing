import { ArrowDown, Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Monogram } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site } from "@/config/site";
import { track } from "@/lib/analytics";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative isolate overflow-hidden pt-32 pb-24 bg-brand-gradient sm:pt-40 lg:pb-32"
    >
      <Container className="grid items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
        <Reveal>
          <p className="label text-white/80">
            Tecnologia e marketing · {site.city}
          </p>
          <h1 className="mt-6 font-display text-[2.9rem] leading-[1.04] font-bold text-balance text-white sm:text-6xl lg:text-7xl">
            O digital do seu negócio,{" "}
            <em className="font-semibold italic">num só lugar.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
            Sites, automação de WhatsApp e redes sociais para empresas angolanas
            que querem mais clientes e menos trabalho manual.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink
              href={whatsappLink()}
              external
              variant="light"
              icon={<WhatsAppIcon />}
              className="px-7 text-lg"
              onClick={() => track("whatsapp_click", { location: "hero" })}
            >
              Pedir diagnóstico gratuito
            </ButtonLink>
            <ButtonLink
              href="#servicos"
              variant="ghost-light"
              icon={<ArrowDown className="size-5" />}
            >
              Ver o que fazemos
            </ButtonLink>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/85">
            {["Sem compromisso", "Resposta no próprio dia"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <Check className="size-4" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="hidden justify-center lg:flex">
          <Monogram
            tone="white"
            className="w-72 drop-shadow-[0_30px_60px_rgba(10,37,96,0.35)] xl:w-80"
          />
        </Reveal>
      </Container>

      {/* Monograma gigante e translúcido no fundo, como nas peças do Instagram */}
      <Monogram
        tone="white"
        className="pointer-events-none absolute -right-24 -bottom-40 -z-10 w-[32rem] opacity-[0.07] lg:hidden"
      />
    </section>
  );
}
