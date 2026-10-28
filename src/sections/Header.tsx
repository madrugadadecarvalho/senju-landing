import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { nav } from "@/content/landing";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { whatsappLink } from "@/lib/whatsapp";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "bg-white/95 shadow-sm shadow-night/5 backdrop-blur"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between">
        <a
          href="#topo"
          aria-label="SENJU, voltar ao início"
          onClick={() => setOpen(false)}
        >
          <Logo tone={solid ? "gradient" : "white"} />
        </a>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                solid
                  ? "text-night hover:bg-mist"
                  : "text-white/90 hover:bg-white/10 hover:text-white",
              )}
            >
              {item.label}
            </a>
          ))}
          <ButtonLink
            href={whatsappLink()}
            external
            variant={solid ? "primary" : "light"}
            className="ml-3 min-h-10 px-5 py-2 text-sm"
            icon={<WhatsAppIcon className="size-4" />}
            onClick={() => track("whatsapp_click", { location: "header" })}
          >
            Falar no WhatsApp
          </ButtonLink>
        </nav>

        <button
          type="button"
          className={cn(
            "grid size-11 place-items-center rounded-full lg:hidden",
            solid ? "text-night hover:bg-mist" : "text-white hover:bg-white/10",
          )}
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </Container>

      <div
        id="menu-movel"
        hidden={!open}
        className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-line bg-white lg:hidden"
      >
        <Container className="flex flex-col gap-1 py-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-display text-2xl font-bold text-night"
            >
              {item.label}
            </a>
          ))}
          <ButtonLink
            href={whatsappLink()}
            external
            className="mt-6"
            icon={<WhatsAppIcon />}
            onClick={() => {
              track("whatsapp_click", { location: "menu" });
              setOpen(false);
            }}
          >
            Pedir diagnóstico gratuito
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
