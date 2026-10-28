import { useId } from "react";
import { cn } from "@/lib/cn";
import { MONOGRAM_PATH, MONOGRAM_VIEWBOX } from "./monogram-path";

type Tone = "gradient" | "white" | "brand";

export function Monogram({
  tone = "gradient",
  className,
  title,
}: {
  tone?: Tone;
  className?: string;
  title?: string;
}) {
  const gradientId = useId();
  const fill =
    tone === "gradient"
      ? `url(#${gradientId})`
      : tone === "white"
        ? "#ffffff"
        : "var(--color-brand)";

  return (
    <svg
      viewBox={MONOGRAM_VIEWBOX}
      className={cn("h-auto", className)}
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {tone === "gradient" && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4DA2FF" />
            <stop offset="1" stopColor="#1262FF" />
          </linearGradient>
        </defs>
      )}
      <path fill={fill} fillRule="evenodd" d={MONOGRAM_PATH} />
    </svg>
  );
}

export function Logo({
  tone = "gradient",
  className,
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <Monogram tone={tone} className="w-8" />
      <span
        className={cn(
          "font-display text-xl font-bold tracking-[0.3em]",
          tone === "white" ? "text-white" : "text-night",
        )}
      >
        SENJU
      </span>
    </span>
  );
}
