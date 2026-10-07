export interface MaterialSwatch {
  id: string;
  name: string;
  category: 'madeiras' | 'lacas' | 'vidros' | 'ferragens';
  description: string;
  finish: string;
  colorPreview: string;
  recommendedFor: string;
}

// Referências visuais; materiais e disponibilidade são definidos em cada projeto.
export const MATERIAL_SWATCHES: MaterialSwatch[] = [
  {
    id: 'freijo-natural',
    name: 'Tom freijó',
    category: 'madeiras',
    description: 'Tom de madeira claro e quente, com veios aparentes. Combina com armários de cores neutras.',
    finish: 'Amadeirado em tom mel',
    colorPreview: '#A8754D',
    recommendedFor: 'Painéis, nichos e portas de armário'
  },
  {
    id: 'carvalho-americano',
    name: 'Tom carvalho',
    category: 'madeiras',
    description: 'Amadeirado mais claro, com desenho discreto. Uma opção para ambientes que pedem leveza.',
    finish: 'Amadeirado claro',
    colorPreview: '#C9A77E',
    recommendedFor: 'Armários, estantes e bancadas'
  },
  {
    id: 'nogueira-pura',
    name: 'Tom nogueira',
    category: 'madeiras',
    description: 'Marrom escuro com veios visíveis. Cria contraste com paredes e acabamentos claros.',
    finish: 'Amadeirado escuro',
    colorPreview: '#5A4334',
    recommendedFor: 'Painéis, cristaleiras e detalhes de armários'
  },
  {
    id: 'laca-fendi',
    name: 'Fendi',
    category: 'lacas',
    description: 'Cinza com fundo bege. Funciona ao lado de tons de madeira e superfícies claras.',
    finish: 'Cor lisa em tom neutro',
    colorPreview: '#C8BEAF',
    recommendedFor: 'Portas, gavetas e frentes de armário'
  },
  {
    id: 'laca-grafite',
    name: 'Grafite',
    category: 'lacas',
    description: 'Cinza escuro para criar contraste em armários ou destacar uma parte do móvel.',
    finish: 'Cor lisa escura',
    colorPreview: '#34312E',
    recommendedFor: 'Portas, gavetas e nichos'
  },
  {
    id: 'vidro-reflecta-bronze',
    name: 'Vidro bronze',
    category: 'vidros',
    description: 'O tom bronze deixa o conteúdo do armário mais discreto sem fechar totalmente a vista.',
    finish: 'Vidro com reflexo bronze',
    colorPreview: '#79604C',
    recommendedFor: 'Cristaleiras e portas de armário'
  },
  {
    id: 'vidro-canelado',
    name: 'Vidro canelado',
    category: 'vidros',
    description: 'A textura vertical deixa passar luz e reduz a visão direta do interior.',
    finish: 'Vidro texturizado',
    colorPreview: '#9F988D',
    recommendedFor: 'Cristaleiras, portas e divisórias'
  },
  {
    id: 'ferragens-blum',
    name: 'Ferragens',
    category: 'ferragens',
    description: 'Abertura, peso da porta ou gaveta e frequência de uso ajudam a definir cada peça.',
    finish: 'Modelos definidos conforme o projeto',
    colorPreview: '#827C75',
    recommendedFor: 'Portas e gavetas'
  }
];
