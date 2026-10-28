import { describe, expect, it } from "vitest";
import { whatsappLink } from "./whatsapp";

describe("whatsappLink", () => {
  it("usa o número da SENJU e a palavra DIAGNÓSTICO por defeito", () => {
    expect(whatsappLink()).toBe(
      "https://wa.me/244937448712?text=DIAGN%C3%93STICO",
    );
  });

  it("codifica acentos e quebras de linha", () => {
    expect(whatsappLink("Olá\nSENJU")).toBe(
      "https://wa.me/244937448712?text=Ol%C3%A1%0ASENJU",
    );
  });

  it("devolve o link sem texto quando a mensagem está vazia", () => {
    expect(whatsappLink("   ")).toBe("https://wa.me/244937448712");
  });
});
