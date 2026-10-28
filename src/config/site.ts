import { z } from "zod";

/**
 * Configuração central do site. É validada com Zod no arranque:
 * se um valor estiver mal escrito (ex.: número de WhatsApp), o erro aparece logo.
 */
const siteSchema = z.object({
  name: z.literal("SENJU"),
  tagline: z.string().min(1),
  url: z.url(),
  email: z.email(),
  /** Número em formato internacional, só dígitos (código do país + número). */
  whatsapp: z.string().regex(/^244\d{9}$/, "Use 244 seguido de 9 dígitos"),
  whatsappDisplay: z.string().min(1),
  instagram: z.url(),
  city: z.string().min(1),
  country: z.string().min(1),
  openingHours: z.string().min(1),
});

export type SiteConfig = z.infer<typeof siteSchema>;

export const site: SiteConfig = siteSchema.parse({
  name: "SENJU",
  tagline: "Tecnologia e marketing para o seu negócio, num só lugar.",
  url: "https://senju.ao",
  email: "geral@senju.ao",
  whatsapp: "244937448712",
  whatsappDisplay: "+244 937 448 712",
  instagram: "https://www.instagram.com/senju.ao",
  city: "Luanda",
  country: "Angola",
  openingHours: "Segunda a sexta, 8h–18h",
});
