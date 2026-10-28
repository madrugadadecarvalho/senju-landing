import { describe, expect, it } from "vitest";
import { buildDiagnosticMessage, diagnosticSchema } from "./schema";

const valid = {
  name: "Ana",
  company: "Clínica Sorriso",
  sector: "Clínica ou saúde",
  challenge: "Responder mais depressa no WhatsApp",
} as const;

describe("diagnosticSchema", () => {
  it("aceita dados válidos e limpa espaços", () => {
    const result = diagnosticSchema.parse({
      ...valid,
      name: "  Ana  ",
      instagram: "",
    });
    expect(result.name).toBe("Ana");
    expect(result.instagram).toBeUndefined();
  });

  it("rejeita nome curto com mensagem em português", () => {
    const result = diagnosticSchema.safeParse({ ...valid, name: "A" });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0]?.message).toMatch(/mínimo 2 letras/);
  });

  it("rejeita setor fora da lista", () => {
    expect(
      diagnosticSchema.safeParse({ ...valid, sector: "Banca" }).success,
    ).toBe(false);
  });

  it("aceita @utilizador e link de perfil", () => {
    expect(
      diagnosticSchema.safeParse({ ...valid, instagram: "@clinica.sorriso" })
        .success,
    ).toBe(true);
    expect(
      diagnosticSchema.safeParse({
        ...valid,
        instagram: "https://instagram.com/x",
      }).success,
    ).toBe(true);
    expect(
      diagnosticSchema.safeParse({ ...valid, instagram: "isto não é válido" })
        .success,
    ).toBe(false);
  });
});

describe("buildDiagnosticMessage", () => {
  it("começa pela palavra-chave e inclui os dados", () => {
    const message = buildDiagnosticMessage(
      diagnosticSchema.parse({ ...valid, instagram: "clinica.sorriso" }),
    );
    expect(message.split("\n")).toEqual([
      "DIAGNÓSTICO",
      "Olá! Sou Ana, da Clínica Sorriso (Clínica ou saúde).",
      "O que mais quero resolver: Responder mais depressa no WhatsApp.",
      "Instagram: @clinica.sorriso",
    ]);
  });

  it("omite o Instagram quando não é dado", () => {
    expect(buildDiagnosticMessage(diagnosticSchema.parse(valid))).not.toMatch(
      /Instagram/,
    );
  });
});
