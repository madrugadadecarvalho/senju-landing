import { site } from "@/config/site";

/** Palavra que os Reels pedem para enviar. Mantém a mesma em todo o lado. */
export const DIAGNOSTIC_KEYWORD = "DIAGNÓSTICO";

/** Cria um link wa.me com a mensagem já preenchida. */
export function whatsappLink(
  message: string = DIAGNOSTIC_KEYWORD,
  phone: string = site.whatsapp,
): string {
  const text = message.trim();
  const base = `https://wa.me/${phone}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
