import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { site } from "@/config/site";
import { whatsappLink } from "@/lib/whatsapp";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-line bg-white pt-16 pb-28 lg:pb-12">
      <Container className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs">{site.tagline}</p>
        </div>

        <div>
          <h2 className="label text-night">Contactos</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={whatsappLink("")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-brand"
              >
                <WhatsAppIcon className="size-5" /> {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 hover:text-brand"
              >
                <Mail className="size-5" aria-hidden="true" /> {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-brand"
              >
                <InstagramIcon /> @senju.ao
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="label text-night">Atendimento</h2>
          <p className="mt-4">{site.openingHours}</p>
          <p className="mt-1">
            {site.city}, {site.country}
          </p>
        </div>
      </Container>

      <Container className="mt-14 flex flex-col gap-3 border-t border-line pt-8 text-sm sm:flex-row sm:justify-between">
        <p>© {year} SENJU. Site feito pela SENJU.</p>
        <a href="/privacidade/" className="hover:text-brand">
          Política de privacidade
        </a>
      </Container>
    </footer>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}
