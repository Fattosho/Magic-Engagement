
import React from 'react';
import { ShieldCheck, TrendingUp, DollarSign, Zap, Globe, Code, Skull, Eye, Heart } from 'lucide-react';
import { Feature, FAQItem, Testimonial } from './types';

export const FEATURES: Feature[] = [
  {
    title: "Sua Fábrica de Egos",
    description: "Um script pronto para você vender status. O site processa pedidos de gente sedenta por atenção 24 horas por dia.",
    icon: <Code />
  },
  {
    title: "Ouro por Centavos",
    description: "Você paga R$ 0,20 por 1.000 curtidas e revende por R$ 20,00. A margem é pornográfica porque o desejo de ser visto é infinito.",
    icon: <DollarSign />
  },
  {
    title: "Venda o Sonho",
    description: "Influencers, modelos e empresas precisam parecer grandes para venderem. Você será o fornecedor do oxigênio deles.",
    icon: <Eye />
  },
  {
    title: "Poder de Percepção",
    description: "No digital, ser importante é mais relevante do que ser bom. Aprenda a fabricar autoridade instantânea para qualquer pessoa.",
    icon: <ShieldCheck />
  },
  {
    title: "Engajamento Zumbi",
    description: "Crie o efeito manada. Posts com 10.000 curtidas atraem o público real de forma automática. Manipule o algoritmo.",
    icon: <Heart />
  },
  {
    title: "Domínio Global",
    description: "O ego não fala apenas português. Atenda o mundo inteiro e receba em moedas fortes enquanto eles buscam aprovação.",
    icon: <Globe />
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arthur V.",
    role: "Proprietário de Painel",
    content: "O script se pagou na primeira hora. Nunca vi gente tão disposta a gastar dinheiro quanto alguém querendo ser famoso.",
    avatar: "https://picsum.photos/seed/arthur/100/100"
  },
  {
    name: "Juliana M.",
    role: "Estrategista de Imagem",
    content: "Status é poder. O Magic me deu as ferramentas para construir impérios baseados em pura percepção. O lucro é assustador.",
    avatar: "https://picsum.photos/seed/juliana/100/100"
  },
  {
    name: "Ricardo K.",
    role: "Empreendedor Digital",
    content: "Eu parei de vender cursos e comecei a vender seguidores. A demanda é 10x maior e a entrega é automática. Genial.",
    avatar: "https://picsum.photos/seed/ricardo/100/100"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Isso é ético?",
    answer: "O mercado é livre. Se as pessoas querem pagar por status, quem é você para não fornecer? Nós apenas entregamos o que o mercado pede desesperadamente."
  },
  {
    question: "O lucro é realmente tudo isso?",
    answer: "Sim. A vaidade é um dos poucos produtos onde o cliente não questiona o preço, ele questiona a velocidade da entrega. Margens de 1000% são o padrão."
  },
  {
    question: "Vou precisar de suporte?",
    answer: "O script é plug-and-play. Mas se sua ambição for maior que seu conhecimento técnico, temos um guia completo de instalação."
  },
  {
    question: "Quanto tempo dura esse mercado?",
    answer: "Enquanto existirem redes sociais e seres humanos carentes de aprovação, esse mercado será uma mina de ouro inesgotável."
  }
];
