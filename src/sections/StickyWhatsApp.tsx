import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { whatsappLink } from "@/lib/whatsapp";

/**
 * Barra fixa no fundo do ecrã (só no telemóvel). Aparece depois do topo e
 * esconde-se quando a chamada final ou o formulário estão visíveis, para não haver dois botões.
 */
export function StickyWhatsApp() {
  const [pastHero, setPastHero] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setPastHero(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const targets = ["contacto", "diagnostico"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const visible = new Set<Element>();
    const observer = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) visible.add(e.target);
        else visible.delete(e.target);
      }
      setHidden(visible.size > 0);
    });
    targets.forEach((t) => observer.observe(t));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const show = pastHero && !hidden;

  return (
    <div
      aria-hidden={!show}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] transition-all duration-300 lg:hidden",
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={show ? 0 : -1}
        onClick={() => track("whatsapp_click", { location: "sticky" })}
        className="flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand text-lg font-semibold text-white shadow-2xl shadow-night/40"
      >
        <WhatsAppIcon />
        Diagnóstico gratuito
      </a>
    </div>
  );
}
