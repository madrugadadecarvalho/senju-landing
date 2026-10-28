/**
 * Todos os textos da página num só sítio, para a equipa os poder rever sem mexer nos componentes.
 * Regra da casa: nada de clientes, números ou depoimentos inventados.
 */
import type { LucideIcon } from "lucide-react";
import {
  Bot,
  CalendarCheck,
  Clock3,
  FileSpreadsheet,
  Globe,
  HandCoins,
  Megaphone,
  MessageCircleWarning,
  SearchX,
  ShieldCheck,
  Video,
  Code2,
} from "lucide-react";

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diagnóstico", href: "#diagnostico" },
  { label: "Como trabalhamos", href: "#como-trabalhamos" },
  { label: "Perguntas", href: "#perguntas" },
] as const;

export type Problem = { icon: LucideIcon; title: string; text: string };
export const problems: Problem[] = [
  {
    icon: MessageCircleWarning,
    title: "O WhatsApp demora a responder",
    text: "O cliente pergunta o preço às 19h e a resposta chega no dia seguinte. Entretanto, já marcou noutro sítio.",
  },
  {
    icon: SearchX,
    title: "Não aparece no Google",
    text: "O cliente pesquisa o seu serviço em Talatona e só encontra a concorrência.",
  },
  {
    icon: FileSpreadsheet,
    title: "Tudo feito à mão",
    text: "Confirmações, lembretes, stock e cobranças em cadernos e folhas de cálculo. O fim do mês é uma maratona.",
  },
];

export type Service = {
  number: string;
  icon: LucideIcon;
  title: string;
  text: string;
  includes: string[];
};
export const services: Service[] = [
  {
    number: "01",
    icon: Globe,
    title: "Sites e lojas online",
    text: "Rápidos, bonitos e feitos para o telemóvel.",
    includes: [
      "Botão de WhatsApp",
      "Perfil no Google Maps",
      "Pagamento por Multicaixa Express ou referência",
    ],
  },
  {
    number: "02",
    icon: Bot,
    title: "Automação",
    text: "WhatsApp que responde e marca sozinho, processos sem papel.",
    includes: [
      "Respostas 24h às perguntas frequentes",
      "Marcações e lembretes",
      "Registo de contactos, stock e relatórios",
    ],
  },
  {
    number: "03",
    icon: Megaphone,
    title: "Redes sociais",
    text: "Conteúdo, gestão e anúncios que trazem clientes.",
    includes: [
      "Instagram e TikTok",
      "Publicações e Reels",
      "Anúncios pagos e relatório mensal",
    ],
  },
];

export const diagnosticSteps = [
  {
    title: "Envie mensagem",
    text: "Preencha o formulário ou escreva “DIAGNÓSTICO” no WhatsApp com o nome da sua empresa.",
  },
  {
    title: "Analisamos",
    text: "Vemos o seu Instagram, o Google Maps, o site e como o atendimento responde, tal como um cliente novo faria.",
  },
  {
    title: "Recebe o plano",
    text: "Em PDF ou num vídeo curto: os 3 pontos a melhorar primeiro e uma melhoria rápida que pode fazer hoje, sozinho.",
  },
] as const;

export const diagnosticAreas = [
  "Atendimento",
  "Google Maps",
  "Instagram e TikTok",
  "Site",
  "Marcações e vendas",
  "Pagamentos",
  "Processos manuais",
  "Segurança",
] as const;

export type Guarantee = { icon: LucideIcon; title: string; text: string };
export const guarantees: Guarantee[] = [
  {
    icon: CalendarCheck,
    title: "Piloto de 30 dias",
    text: "Se não ficar satisfeito, termina sem custos adicionais.",
  },
  {
    icon: HandCoins,
    title: "Pagamento por fases",
    text: "50% no início, 50% na entrega.",
  },
  {
    icon: Clock3,
    title: "Prazo cumprido",
    text: "Se não entregarmos no prazo combinado, o mês seguinte é grátis.",
  },
];

export type TeamFact = { icon: LucideIcon; title: string; text: string };
export const teamFacts: TeamFact[] = [
  {
    icon: Code2,
    title: "Software",
    text: "Sites, sistemas e automações feitos pela própria equipa, sem intermediários.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    text: "Especialistas em cibersegurança. Os dados dos seus clientes nunca são partilhados.",
  },
  {
    icon: Video,
    title: "Vídeo",
    text: "Produção de conteúdo e Reels feita dentro de casa.",
  },
];

export const faqs = [
  {
    q: "O diagnóstico é mesmo grátis?",
    a: "Sim. Recebe os 3 pontos a melhorar e fica com eles, mesmo que não trabalhe connosco.",
  },
  {
    q: "Que tipo de empresas ajudam?",
    a: "Pequenas e médias empresas de qualquer setor: clínicas, salões, restaurantes, lojas, escritórios. Se recebe clientes pelo WhatsApp ou pelo Instagram, podemos ajudar.",
  },
  {
    q: "Porque devo confiar na SENJU?",
    a: "A equipa junta desenvolvimento de software, cibersegurança e produção de vídeo. Começamos sempre com um diagnóstico gratuito, um piloto de 30 dias e pagamento por fases.",
  },
  {
    q: "Quanto custa?",
    a: "Depende do que o seu negócio precisa. Depois do diagnóstico, enviamos uma proposta clara em 24 horas, com o preço e o que está incluído.",
  },
  {
    q: "Já tenho uma agência.",
    a: "Ótimo. Fazemos uma parte que muitas agências não fazem, a automação e os sistemas, e podemos trabalhar em conjunto.",
  },
  {
    q: "Tenho alguém que me faz isso.",
    a: "Pode continuar. Trabalhamos com prazo, contrato e resultados medidos todos os meses, e podemos complementar o que já tem.",
  },
  {
    q: "Como pago?",
    a: "Por transferência ou Multicaixa Express. Projetos: 50% no início e 50% na entrega. Mensalidades no início de cada mês.",
  },
  {
    q: "Os anúncios estão incluídos?",
    a: "A gestão, sim. O valor pago ao Meta ou ao Google é à parte e sai diretamente da sua conta.",
  },
  {
    q: "Quanto tempo demora?",
    a: "Um projeto típico fica pronto em 30 dias: configuração, testes com a sua equipa, lançamento e ajustes.",
  },
] as const;

/** Conversa ilustrativa da secção de demonstração (claramente marcada como exemplo). */
export const demoChat = [
  { from: "client", text: "Bom dia, têm vaga amanhã para uma consulta?" },
  { from: "bot", text: "Bom dia! Temos às 9h30, 11h00 e 15h00. Qual prefere?" },
  { from: "client", text: "11h00, por favor." },
  {
    from: "bot",
    text: "Feito! Consulta marcada para amanhã às 11h00. Envio um lembrete 2 horas antes.",
  },
] as const;
