import { cn } from "@/lib/cn";

/** Ícone de linha no estilo das peças da SENJU (balão + telefone). */
export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-5", className)}
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M3.5 20.5l1.3-3.9A8.5 8.5 0 1 1 8 19.6l-4.5.9z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.2c.3-.6.9-.6 1.2 0l.7 1.4c.2.4 0 .7-.2 1l-.4.4a5.6 5.6 0 0 0 2.7 2.7l.4-.4c.3-.3.6-.4 1-.2l1.4.7c.6.3.6.9 0 1.2-.8.6-1.8.8-2.7.4A8 8 0 0 1 8.6 10.9c-.4-.9-.2-1.9.4-2.7z"
        fill="currentColor"
      />
    </svg>
  );
}
