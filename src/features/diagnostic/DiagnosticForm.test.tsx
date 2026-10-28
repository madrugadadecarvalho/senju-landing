import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { DiagnosticForm } from "./DiagnosticForm";

afterEach(() => vi.restoreAllMocks());

describe("DiagnosticForm", () => {
  it("mostra os erros em português quando se envia vazio", async () => {
    render(<DiagnosticForm />);
    await userEvent.click(
      screen.getByRole("button", { name: /enviar pelo whatsapp/i }),
    );
    expect(
      await screen.findByText("Escreva o seu nome (mínimo 2 letras)."),
    ).toBeInTheDocument();
    expect(screen.getByText("Escolha o setor.")).toBeInTheDocument();
  });

  it("abre o WhatsApp com a mensagem preenchida", async () => {
    const open = vi.spyOn(window, "open").mockReturnValue({} as Window);
    render(<DiagnosticForm />);
    await userEvent.type(screen.getByLabelText("O seu nome"), "Ana");
    await userEvent.type(screen.getByLabelText("Empresa"), "Clínica Sorriso");
    await userEvent.selectOptions(
      screen.getByLabelText("Setor"),
      "Clínica ou saúde",
    );
    await userEvent.selectOptions(
      screen.getByLabelText("O que quer resolver primeiro?"),
      "Aparecer no Google e no Google Maps",
    );
    await userEvent.click(
      screen.getByRole("button", { name: /enviar pelo whatsapp/i }),
    );

    expect(open).toHaveBeenCalledOnce();
    const url = new URL(open.mock.calls[0]![0] as string);
    expect(url.origin + url.pathname).toBe("https://wa.me/244937448712");
    expect(url.searchParams.get("text")).toMatch(
      /^DIAGNÓSTICO\nOlá! Sou Ana, da Clínica Sorriso/,
    );
  });
});
