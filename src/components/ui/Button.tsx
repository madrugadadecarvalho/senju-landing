import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "light" | "ghost" | "ghost-light";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-dark",
  light: "bg-white text-brand shadow-lg shadow-night/20 hover:bg-mist",
  ghost: "text-night hover:bg-mist",
  "ghost-light": "text-white hover:bg-white/10",
};

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: Variant;
  icon?: ReactNode;
  external?: boolean;
};

export function ButtonLink({
  variant = "primary",
  icon,
  external,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full px-6 py-3 text-base font-semibold transition-colors duration-200",
        variants[variant],
        className,
      )}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {icon}
      {children}
    </a>
  );
}
