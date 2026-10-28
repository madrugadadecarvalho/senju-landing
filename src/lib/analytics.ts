type EventParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Regista um evento se houver uma ferramenta de medição instalada (GA4 / Google Tag Manager).
 * Sem ferramenta instalada, não faz nada: a página funciona igual.
 */
export function track(event: string, params: EventParams = {}): void {
  if (typeof window === "undefined" || !Array.isArray(window.dataLayer)) return;
  window.dataLayer.push({ event, ...params });
}
