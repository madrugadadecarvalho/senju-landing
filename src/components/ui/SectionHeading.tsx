import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
  id?: string;
};

/** Etiqueta em maiúsculas + título serifado com palavra em itálico (padrão das peças da marca). */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  align = "left",
  className,
  id,
}: Props) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <p className={cn("label", dark ? "text-white/75" : "text-brand")}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          "mt-4 font-display text-4xl leading-[1.08] font-bold text-balance sm:text-5xl lg:text-[3.5rem]",
          "[&_em]:font-semibold [&_em]:italic",
          dark ? "text-white" : "text-night [&_em]:text-brand",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-pretty",
            dark ? "text-white/85" : "text-ink",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
