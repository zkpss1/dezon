import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';

const featured = PROJECTS.filter((project) =>
  ['sala-painel-tv', 'closet-master-lumiere', 'cozinha-freijo-calacatta'].includes(project.id)
);

export function HomeContent({ onOpenSimulator }: { onOpenSimulator: () => void }) {
  return (
    <>
      <section className="bg-[#F7F5F0] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-9 flex flex-col justify-between gap-5 sm:mb-11 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#895F3F]">Trabalhos da Dezon</p>
              <h2 className="max-w-[700px] text-[clamp(2rem,3.4vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-[#202625]">
                Do desenho à peça instalada.
              </h2>
              <p className="mt-4 max-w-[600px] text-sm leading-7 text-[#555A55] sm:text-base">
                Veja como a marcenaria pode aproveitar uma parede, organizar a rotina e compor cada ambiente.
              </p>
            </div>
            <a href="#/projetos" className="inline-flex min-h-11 items-center gap-2 self-start border-b border-[#202625] text-sm font-semibold text-[#202625] transition-colors hover:text-[#895F3F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#895F3F]">
              Ver todos os projetos <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((project) => (
              <a key={project.id} href={`#/projetos/${project.category}`} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#895F3F]">
                <div className="h-[340px] overflow-hidden bg-[#E0DED7] sm:h-[410px] md:h-[370px] lg:h-[460px]">
                  <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transition-none" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-[#895F3F]">{project.categoryLabel}</p>
                    <h3 className="mt-1 text-lg font-semibold tracking-[-0.025em] text-[#202625]">{project.title}</h3>
                  </div>
                  <ArrowUpRight size={19} className="mt-1 shrink-0 text-[#202625]" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#DED9D1] bg-[#ECE7DF] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[35%_1fr] lg:gap-20">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#895F3F]">Como trabalhamos</p>
            <h2 className="text-[clamp(2rem,3.1vw,3.3rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-[#202625]">
              Seu projeto começa com uma conversa.
            </h2>
            <p className="mt-5 max-w-[430px] text-sm leading-7 text-[#555A55] sm:text-base">
              Entendemos o espaço e o que você precisa antes de definir medidas, materiais e acabamentos.
            </p>
            <button onClick={onOpenSimulator} className="mt-7 min-h-12 rounded bg-[#202625] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#3A4340] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#895F3F]">
              Contar sobre meu espaço
            </button>
          </div>
          <div className="grid gap-0 sm:grid-cols-3">
            {[
              ['01', 'Conversa e medidas', 'O espaço e a rotina orientam o início do desenho.'],
              ['02', 'Desenho e escolhas', 'Você acompanha a definição dos móveis e acabamentos.'],
              ['03', 'Produção e montagem', 'As peças são produzidas e instaladas para o ambiente.'],
            ].map(([number, title, description]) => (
              <div key={number} className="border-t border-[#BDB8AF] py-6 sm:border-l sm:border-t-0 sm:px-6 sm:py-0 first:sm:border-l-0 first:sm:pl-0 last:sm:pr-0">
                <span className="text-xs font-semibold tracking-[0.15em] text-[#895F3F]">{number}</span>
                <h3 className="mt-9 text-lg font-semibold leading-snug text-[#202625]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#555A55]">{description}</p>
              </div>
            ))}
            <a href="#/processo" className="inline-flex min-h-11 items-center gap-2 self-end border-b border-[#202625] py-2 text-sm font-semibold text-[#202625] sm:col-span-3 sm:mt-7 sm:justify-self-end">
              Conhecer o processo <ArrowUpRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
