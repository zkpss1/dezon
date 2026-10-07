import livingImage from '../assets/images/dezon-painel-ripado.webp';
import barImage from '../assets/images/dezon-cristaleira-bar.webp';
import livingRoomImage from '../assets/images/dezon-sala-painel-tv.jpg';
import wardrobeImage from '../assets/images/dezon-guarda-roupa.webp';
import kitchenImage from '../assets/images/dezon-cozinha-cinza.webp';

export interface Project {
  id: string;
  title: string;
  category: 'cozinhas' | 'salas' | 'dormitorios' | 'gourmet';
  categoryLabel: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'living-reserva',
    title: 'Painel ripado e rack sob medida',
    category: 'salas',
    categoryLabel: 'Salas & Living',
    image: livingImage,
    shortDesc: 'Painel ripado amadeirado com base suspensa, nicho para equipamentos e armários claros.',
    fullDesc: 'Uma composição de marcenaria para a sala de estar: ripas verticais criam textura ao lado do painel de TV, enquanto a base combina área aberta e armários fechados. A foto mostra a montagem antes da instalação da televisão.'
  },
  {
    id: 'sideboard-minimalista',
    title: 'Cristaleira e bar planejado',
    category: 'gourmet',
    categoryLabel: 'Espaços Gourmet',
    image: barImage,
    shortDesc: 'Cristaleira iluminada, nichos para garrafas e bancada com armários inferiores em tom cinza.',
    fullDesc: 'O móvel reúne exposição e armazenamento em um só conjunto. Nichos para garrafas, portas espelhadas na parte superior e uma bancada de apoio aproveitam a parede da área social.'
  },
  {
    id: 'sala-painel-tv',
    title: 'Sala com painel de TV ripado',
    category: 'salas',
    categoryLabel: 'Salas & Living',
    image: livingRoomImage,
    shortDesc: 'Painel de TV com ripado amadeirado, móvel baixo e espaço para os aparelhos.',
    fullDesc: 'A foto mostra a sala com o painel de TV instalado. O ripado amadeirado acompanha a parede, enquanto o móvel baixo oferece apoio e espaço para os aparelhos.'
  },
  {
    id: 'closet-master-lumiere',
    title: 'Guarda-roupa planejado em cinza',
    category: 'dormitorios',
    categoryLabel: 'Dormitórios & Closets',
    image: wardrobeImage,
    shortDesc: 'Armário de piso a teto com portas cinza e puxadores verticais, integrado a uma bancada lateral.',
    fullDesc: 'O guarda-roupa aproveita a altura da parede com portas amplas e puxadores verticais. Ao lado, uma bancada e nichos abertos complementam o uso do dormitório.'
  },
  {
    id: 'cozinha-freijo-calacatta',
    title: 'Cozinha planejada em tons de cinza',
    category: 'cozinhas',
    categoryLabel: 'Cozinhas Planejadas',
    image: kitchenImage,
    shortDesc: 'Marcenaria cinza com armários até o teto, gavetões, bancada clara e integração dos eletrodomésticos.',
    fullDesc: 'A cozinha combina torre para geladeira, armários superiores e inferiores e uma bancada contínua. Os tons de cinza mantêm a composição discreta e valorizam a área de preparo.'
  }
];

export const CATEGORIES = [
  { id: 'todos', label: 'Todos os Ambientes' },
  { id: 'cozinhas', label: 'Cozinhas' },
  { id: 'salas', label: 'Salas & Living' },
  { id: 'dormitorios', label: 'Suítes & Closets' },
  { id: 'gourmet', label: 'Espaços Gourmet' }
] as const;
