import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { site } from "@/config/site";

const sections = [
  {
    title: "Que dados recolhemos",
    text: "Este site não tem contas, não guarda formulários e não usa cookies de publicidade. Quando nos contacta pelo WhatsApp ou por email, recebemos apenas o que nos envia: normalmente o seu nome, o nome da empresa, o número de telefone e a mensagem.",
  },
  {
    title: "Para que os usamos",
    text: "Usamos esses dados só para lhe responder, preparar o diagnóstico que pediu e, se avançar, prestar o serviço contratado. Não vendemos nem partilhamos os seus dados com terceiros para fins comerciais.",
  },
  {
    title: "WhatsApp",
    text: "As conversas pelo WhatsApp passam pelos serviços da Meta e seguem também as regras de privacidade do WhatsApp.",
  },
  {
    title: "Durante quanto tempo",
    text: "Guardamos os contactos enquanto forem necessários para a relação comercial ou enquanto a lei o exigir. Pode pedir para os apagarmos a qualquer momento.",
  },
  {
    title: "Os seus direitos",
    text: "Nos termos da Lei de Proteção de Dados Pessoais de Angola, pode pedir para ver, corrigir ou apagar os seus dados. Basta escrever-nos.",
  },
];

export function Privacy() {
  return (
    <div className="min-h-dvh bg-white">
      <header className="border-b border-line">
        <Container className="flex h-18 items-center justify-between">
          <a href="/" aria-label="SENJU, voltar à página inicial">
            <Logo />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-night hover:text-brand"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> Voltar
          </a>
        </Container>
      </header>
      <main>
        <Container className="max-w-3xl py-16 sm:py-24">
          <p className="label text-brand">Privacidade</p>
          <h1 className="mt-4 font-display text-4xl font-bold text-night sm:text-5xl">
            Política de privacidade
          </h1>
          <p className="mt-6 text-lg">
            Explicamos, em linguagem simples, o que acontece aos seus dados
            quando fala connosco.
          </p>
          <div className="mt-12 space-y-10">
            {sections.map((s) => (
              <section key={s.title}>
                <h2 className="text-xl font-bold text-night">{s.title}</h2>
                <p className="mt-3 leading-relaxed">{s.text}</p>
              </section>
            ))}
            <section>
              <h2 className="text-xl font-bold text-night">Contacto</h2>
              <p className="mt-3 leading-relaxed">
                Para qualquer pedido sobre os seus dados:{" "}
                <a
                  className="font-semibold text-brand underline-offset-4 hover:underline"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                </a>{" "}
                ou WhatsApp {site.whatsappDisplay}.
              </p>
            </section>
          </div>
        </Container>
      </main>
    </div>
  );
}
