import { CheckCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Monogram } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { demoChat } from "@/content/landing";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { whatsappLink } from "@/lib/whatsapp";

export function Demo() {
  return (
    <section
      aria-labelledby="demo-titulo"
      className="overflow-hidden py-24 sm:py-32"
    >
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <SectionHeading
            id="demo-titulo"
            eyebrow="Veja como fica"
            title={
              <>
                Um assistente que responde <em>enquanto dorme.</em>
              </>
            }
            intro="Montamos um assistente de WhatsApp que responde às perguntas frequentes, faz marcações e envia lembretes, 24 horas por dia."
          />
          <ul className="mt-8 space-y-3 text-night">
            {[
              "Responde em segundos, mesmo às 23h",
              "Marca, confirma e lembra sozinho",
              "Passa para a sua equipa quando é preciso",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 font-medium">
                <CheckCheck className="size-5 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <ButtonLink
            href={whatsappLink(
              "Olá! Quero um assistente de WhatsApp para o meu negócio.",
            )}
            external
            className="mt-10"
            icon={<WhatsAppIcon />}
            onClick={() => track("whatsapp_click", { location: "demo" })}
          >
            Quero isto no meu negócio
          </ButtonLink>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <PhoneChat />
        </Reveal>
      </Container>
    </section>
  );
}

function PhoneChat() {
  const reduce = useReducedMotion();
  return (
    <figure className="relative w-full max-w-sm">
      <div
        className="absolute -inset-10 -z-10 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="rounded-[2.75rem] border-[10px] border-night bg-night shadow-2xl shadow-night/30">
        <div className="overflow-hidden rounded-[2rem] bg-[#efeae2]">
          <div className="flex items-center gap-3 bg-[#0b4f45] px-5 pt-7 pb-4 text-white">
            <span className="grid size-10 place-items-center rounded-full bg-white">
              <Monogram className="w-5" />
            </span>
            <div className="leading-tight">
              <p className="font-semibold">A sua empresa</p>
              <p className="text-xs text-white/75">Assistente · online</p>
            </div>
          </div>
          <ol
            className="flex min-h-96 flex-col gap-3 px-4 py-6"
            aria-label="Exemplo de conversa"
          >
            {demoChat.map((msg, i) => (
              <motion.li
                key={msg.text}
                initial={reduce ? false : { opacity: 0, y: 12, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: reduce ? 0 : 0.4 + i * 0.7,
                  duration: 0.35,
                }}
                className={cn(
                  "max-w-[85%] rounded-2xl px-4 py-2.5 text-[0.95rem] leading-snug shadow-sm",
                  msg.from === "client"
                    ? "self-end rounded-tr-sm bg-[#d9fdd3] text-[#111b21]"
                    : "self-start rounded-tl-sm bg-white text-[#111b21]",
                )}
              >
                <span className="sr-only">
                  {msg.from === "client" ? "Cliente: " : "Assistente: "}
                </span>
                {msg.text}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
      <figcaption className="mt-5 text-center text-sm text-ink/80">
        Exemplo ilustrativo
      </figcaption>
    </figure>
  );
}
