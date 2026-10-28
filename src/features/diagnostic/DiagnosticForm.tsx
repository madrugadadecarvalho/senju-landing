import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Send } from "lucide-react";
import { useId, type ReactNode } from "react";
import {
  useForm,
  type FieldError,
  type UseFormRegisterReturn,
} from "react-hook-form";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { whatsappLink } from "@/lib/whatsapp";
import {
  buildDiagnosticMessage,
  CHALLENGES,
  diagnosticSchema,
  SECTORS,
  type DiagnosticData,
  type DiagnosticInput,
} from "./schema";

/**
 * Formulário curto que prepara a mensagem do diagnóstico e abre o WhatsApp.
 * Não guarda nem envia dados para nenhum servidor: tudo segue diretamente no WhatsApp.
 */
export function DiagnosticForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DiagnosticInput, unknown, DiagnosticData>({
    resolver: zodResolver(diagnosticSchema),
    mode: "onTouched",
    defaultValues: { name: "", company: "", instagram: "" },
  });

  const onSubmit = (data: DiagnosticData) => {
    const url = whatsappLink(buildDiagnosticMessage(data));
    track("diagnostic_form_submit", {
      sector: data.sector,
      challenge: data.challenge,
    });
    const win = window.open(url, "_blank", "noopener,noreferrer");
    if (!win) window.location.assign(url);
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-3xl bg-white p-6 text-ink shadow-2xl shadow-night/30 sm:p-8"
      aria-labelledby="form-titulo"
    >
      <h3
        id="form-titulo"
        className="font-display text-2xl font-bold text-night"
      >
        Peça o seu diagnóstico
      </h3>
      <p className="mt-1 text-sm">
        Leva 30 segundos. A mensagem abre no WhatsApp, pronta a enviar.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="O seu nome" error={errors.name}>
          {(props) => (
            <input
              {...props}
              {...register("name")}
              autoComplete="name"
              placeholder="Ex.: Ana Silva"
            />
          )}
        </Field>
        <Field label="Empresa" error={errors.company}>
          {(props) => (
            <input
              {...props}
              {...register("company")}
              autoComplete="organization"
              placeholder="Ex.: Clínica Sorriso"
            />
          )}
        </Field>
        <Field label="Setor" error={errors.sector}>
          {(props) => (
            <Select
              props={props}
              reg={register("sector")}
              options={SECTORS}
              placeholder="Escolha o setor"
            />
          )}
        </Field>
        <Field label="O que quer resolver primeiro?" error={errors.challenge}>
          {(props) => (
            <Select
              props={props}
              reg={register("challenge")}
              options={CHALLENGES}
              placeholder="Escolha uma opção"
            />
          )}
        </Field>
        <Field
          label="Instagram da empresa"
          hint="Opcional"
          error={errors.instagram}
          className="sm:col-span-2"
        >
          {(props) => (
            <input
              {...props}
              {...register("instagram")}
              placeholder="@aminhaempresa"
            />
          )}
        </Field>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-7 inline-flex min-h-13 w-full items-center justify-center gap-2.5 rounded-full bg-brand px-6 text-lg font-semibold text-white shadow-lg shadow-brand/25 transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        <WhatsAppIcon />
        Enviar pelo WhatsApp
        <Send className="size-4" aria-hidden="true" />
      </button>
      <p className="mt-3 text-center text-xs text-ink/80">
        Não guardamos estes dados no site: seguem apenas na sua mensagem de
        WhatsApp.
      </p>
    </form>
  );
}

const inputClass =
  "block w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-night placeholder:text-ink/50 transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20 focus:outline-none aria-invalid:border-red-500 aria-invalid:ring-red-500/15";

type ControlProps = {
  id: string;
  className: string;
  "aria-invalid": boolean;
  "aria-describedby"?: string;
};

function Field({
  label,
  hint,
  error,
  className,
  children,
}: {
  label: string;
  hint?: string;
  error?: FieldError;
  className?: string;
  children: (props: ControlProps) => ReactNode;
}) {
  const id = useId();
  const errorId = `${id}-erro`;
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between text-sm font-semibold text-night"
      >
        {label}
        {hint && (
          <span className="text-xs font-normal text-ink/70">{hint}</span>
        )}
      </label>
      <div className="mt-1.5">
        {children({
          id,
          className: inputClass,
          "aria-invalid": Boolean(error),
          "aria-describedby": error ? errorId : undefined,
        })}
      </div>
      {error?.message && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
}

function Select({
  props,
  reg,
  options,
  placeholder,
}: {
  props: ControlProps;
  reg: UseFormRegisterReturn;
  options: readonly string[];
  placeholder: string;
}) {
  return (
    <div className="relative">
      <select
        {...props}
        {...reg}
        defaultValue=""
        className={cn(props.className, "appearance-none pr-10")}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute top-1/2 right-3.5 size-5 -translate-y-1/2 text-ink"
        aria-hidden="true"
      />
    </div>
  );
}
