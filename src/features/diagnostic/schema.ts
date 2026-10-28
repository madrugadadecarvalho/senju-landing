import { z } from "zod";
import { DIAGNOSTIC_KEYWORD } from "@/lib/whatsapp";

export const SECTORS = [
  "Clínica ou saúde",
  "Beleza e estética",
  "Restaurante ou pastelaria",
  "Loja ou comércio",
  "Serviços profissionais",
  "Outro",
] as const;

export const CHALLENGES = [
  "Responder mais depressa no WhatsApp",
  "Aparecer no Google e no Google Maps",
  "Ter um site ou loja online",
  "Redes sociais que trazem clientes",
  "Menos trabalho feito à mão",
  "Ainda não sei, quero o diagnóstico",
] as const;

const requiredText = (label: string, max: number) =>
  z
    .string()
    .trim()
    .min(2, `Escreva ${label} (mínimo 2 letras).`)
    .max(max, `Use no máximo ${max} caracteres.`);

export const diagnosticSchema = z.object({
  name: requiredText("o seu nome", 60),
  company: requiredText("o nome da empresa", 80),
  sector: z.enum(SECTORS, { error: "Escolha o setor." }),
  challenge: z.enum(CHALLENGES, {
    error: "Escolha o que quer resolver primeiro.",
  }),
  instagram: z
    .string()
    .trim()
    .max(80, "Use no máximo 80 caracteres.")
    .regex(
      /^$|^@?[\w.]{1,30}$|^https?:\/\/\S+$/,
      "Escreva @utilizador ou o link do perfil.",
    )
    .optional()
    .transform((value) => (value ? value : undefined)),
});

export type DiagnosticInput = z.input<typeof diagnosticSchema>;
export type DiagnosticData = z.output<typeof diagnosticSchema>;

/** Mensagem que segue para o WhatsApp. Começa pela palavra-chave dos Reels. */
export function buildDiagnosticMessage(data: DiagnosticData): string {
  const instagram = data.instagram
    ? data.instagram.startsWith("http") || data.instagram.startsWith("@")
      ? data.instagram
      : `@${data.instagram}`
    : undefined;

  return [
    DIAGNOSTIC_KEYWORD,
    `Olá! Sou ${data.name}, da ${data.company} (${data.sector}).`,
    `O que mais quero resolver: ${data.challenge}.`,
    instagram ? `Instagram: ${instagram}` : undefined,
  ]
    .filter(Boolean)
    .join("\n");
}
