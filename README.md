# SENJU · Landing page

Landing page da **SENJU**, tecnologia e marketing para o seu negócio, num só lugar (Luanda, Angola).

A página tem um único objetivo: levar o visitante a pedir o **diagnóstico digital gratuito pelo WhatsApp**.

## Tecnologias

| Área      | Escolha                                                                                                     |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| Base      | [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript (modo estrito)                        |
| Estilos   | [Tailwind CSS v4](https://tailwindcss.com), com as cores da marca em `src/index.css`                        |
| Validação | [Zod](https://zod.dev) (configuração do site e formulário) + [React Hook Form](https://react-hook-form.com) |
| Animação  | [Motion](https://motion.dev), desligada para quem ativou "reduzir movimento"                                |
| Ícones    | [Lucide](https://lucide.dev)                                                                                |
| Fontes    | Playfair Display e Inter, servidas localmente via Fontsource (sem pedidos ao Google)                        |
| Qualidade | Oxlint, Prettier (com ordenação de classes Tailwind), Vitest + Testing Library                              |
| CI        | GitHub Actions: lint, tipos, testes, formatação e build em cada push                                        |

## Começar

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev        # http://localhost:5173
```

| Comando           | O que faz                                             |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento                           |
| `npm run build`   | Verifica os tipos e gera a versão final em `dist/`    |
| `npm run preview` | Abre a versão final localmente                        |
| `npm test`        | Corre os testes                                       |
| `npm run check`   | Lint + tipos + testes + formatação (o mesmo que o CI) |
| `npm run format`  | Formata todo o código                                 |

## Onde mudar o quê

| Quero mudar…                                       | Ficheiro                                |
| -------------------------------------------------- | --------------------------------------- |
| Número de WhatsApp, email, horário, Instagram      | `src/config/site.ts` (validado com Zod) |
| Textos da página (problemas, serviços, perguntas…) | `src/content/landing.ts`                |
| Cores e fontes                                     | `src/index.css` (bloco `@theme`)        |
| Opções do formulário e mensagem enviada            | `src/features/diagnostic/schema.ts`     |
| Política de privacidade                            | `src/pages/Privacy.tsx`                 |
| Título, descrição e imagem de partilha             | `index.html`                            |

## Estrutura

```
src/
  config/         configuração do site (Zod)
  content/        todos os textos da página
  components/ui/  peças reutilizáveis (botão, logótipo, títulos…)
  features/       formulário do diagnóstico (schema, testes, componente)
  sections/       uma secção da página por ficheiro, pela ordem em App.tsx
  pages/          página de privacidade
  lib/            WhatsApp, medição e utilitários
public/           favicon, ícones, imagem de partilha, robots e sitemap
docs/marca/       monograma SJ em SVG (gradiente, branco, azul)
```

## Como funciona o formulário

O formulário do diagnóstico **não envia dados para nenhum servidor**. Valida os campos com Zod, monta a mensagem (a começar por `DIAGNÓSTICO`, a mesma palavra dos Reels) e abre o WhatsApp com ela já escrita.

## Medição

Cada botão de WhatsApp chama `track()` (`src/lib/analytics.ts`). Enquanto não houver uma ferramenta instalada, não faz nada. Para medir, basta adicionar o Google Tag Manager ou GA4 em `index.html`: os eventos `whatsapp_click` e `diagnostic_form_submit` passam a aparecer.

## Publicação

O resultado de `npm run build` (pasta `dist/`) é um site estático e pode ser publicado em qualquer serviço (Vercel, Netlify, Cloudflare Pages, GitHub Pages). Os endereços em `index.html`, `public/robots.txt` e `public/sitemap.xml` já apontam para `https://senju.ao`.

## Por fazer

- [ ] Registar o domínio `senju.ao` e criar `geral@senju.ao`
- [ ] Confirmar a fonte serifada no ficheiro original da marca
- [ ] Adicionar projetos de demonstração quando existirem
- [ ] Rever a política de privacidade com um jurista

---

© SENJU. Código público para consulta; a marca, o logótipo e os textos pertencem à SENJU.
