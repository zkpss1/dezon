import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';

interface HeroProps {
  onOpenSimulator: () => void;
  onExplorePortfolio: () => void;
}

const slides = [PROJECTS[2], PROJECTS[4], PROJECTS[1], PROJECTS[3], PROJECTS[0]];

export function Hero({ onOpenSimulator, onExplorePortfolio }: HeroProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (paused || userPaused || reducedMotion.matches) return;

    const timer = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, userPaused]);

  const goTo = (step: number) => setActive((current) => (current + step + slides.length) % slides.length);

  return (
    <section className="bg-[#1F2524] text-[#F7F5F0]" aria-label="Projetos em destaque">
      <div className="mx-auto grid w-full max-w-[1600px] lg:min-h-[650px] lg:grid-cols-[40%_60%]">
        <div className="flex flex-col justify-center px-5 pb-7 pt-8 sm:px-10 sm:pb-12 sm:pt-16 lg:px-12 lg:py-16 xl:px-14">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#C9AD8B] sm:mb-7 sm:text-xs">
            Móveis planejados sob medida
          </p>
          <h1 className="max-w-[620px] text-[clamp(2.8rem,4.3vw,5rem)] font-semibold leading-[1.03] tracking-[-0.055em]">
            Um projeto precisa fazer sentido.
          </h1>
          <p className="mt-4 max-w-[470px] text-sm leading-7 text-[#D8D9D4] sm:mt-6 sm:text-base">
            Cozinhas, salas e dormitórios desenhados para o seu espaço e para o seu dia a dia.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
            <button onClick={onOpenSimulator} className="min-h-12 rounded bg-[#D0AA7B] px-5 py-3 text-sm font-semibold text-[#202321] transition-colors hover:bg-[#E2BE91] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              <span className="sm:hidden">Solicitar projeto</span><span className="hidden sm:inline">Conversar sobre meu projeto</span>
            </button>
            <button onClick={onExplorePortfolio} className="min-h-12 rounded border border-[#69706C] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Ver projetos
            </button>
          </div>
          <p className="mt-12 hidden border-t border-white/15 pt-5 text-xs tracking-[0.04em] text-[#BCC1BA] sm:block">
            Araruama · Região dos Lagos · Rio de Janeiro
          </p>
        </div>

        <div className="min-w-0 bg-[#171C1B]" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out motion-reduce:transition-none" style={{ transform: `translateX(-${active * 100}%)` }}>
              {slides.map((project, index) => (
                <div className="grid h-[390px] w-full shrink-0 grid-cols-1 gap-1 sm:h-[540px] sm:grid-cols-2 lg:h-[650px]" key={project.id} aria-hidden={index !== active}>
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover object-center" loading={index === 0 ? 'eager' : 'lazy'} />
                  <img src={slides[(index + 1) % slides.length].image} alt="" className="hidden h-full w-full object-cover object-center sm:block" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex min-h-[88px] flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-7 lg:px-9">
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9AD8B]">{slides[active].categoryLabel}</p>
              <p className="mt-1 text-sm font-medium text-white">{slides[active].title}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="min-w-[3.5rem] text-center text-xs tabular-nums text-[#C3C8C2]" aria-live="polite">
                {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </span>
              <button onClick={() => setUserPaused((value) => !value)} aria-label={userPaused ? 'Reproduzir carrossel' : 'Pausar carrossel'} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                {userPaused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}
              </button>
              <button onClick={() => goTo(-1)} aria-label="Projeto anterior" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <ArrowLeft size={17} aria-hidden="true" />
              </button>
              <button onClick={() => goTo(1)} aria-label="Próximo projeto" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
