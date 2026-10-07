import React from 'react';
import { Project } from '../data/projectsData';
import { ArrowUpRight } from 'lucide-react';

interface AlternatingEditorialSectionProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onOpenSimulator: () => void;
}

export const AlternatingEditorialSection: React.FC<AlternatingEditorialSectionProps> = ({
  projects,
  onSelectProject,
  onOpenSimulator,
}) => {
  const kitchenProject = projects.find((p) => p.id === 'cozinha-freijo-calacatta') || projects[0];
  const livingProject = projects.find((p) => p.id === 'living-reserva') || projects[0];
  const sideboardProject = projects.find((p) => p.id === 'sideboard-minimalista') || projects[1];

  const galleryItems = [
    {
      project: kitchenProject,
      tag: 'Cozinhas Planejadas',
      subtitle: kitchenProject.shortDesc
    },
    {
      project: livingProject,
      tag: 'Salas & Living',
      subtitle: livingProject.shortDesc
    },
    {
      project: sideboardProject,
      tag: 'Espaços Gourmet',
      subtitle: sideboardProject.shortDesc
    }
  ];

  return (
    <section id="ambientes" className="py-14 sm:py-20 lg:py-24 bg-[#F2ECE4]/75 border-b border-[#E6DED5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Two-column Editorial Header (matching reference image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
          {/* Left Column (6 cols): Headline + CTA */}
          <div className="lg:col-span-6">
            <span className="text-[10px] tracking-[0.25em] uppercase font-sans-clean text-[#956440] font-semibold block mb-2">
              Ambientes da casa
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1D1C1A] leading-[1.08] mb-6 text-balance">
              Cada espaço pede uma solução diferente.
            </h2>
            <button
              onClick={onOpenSimulator}
              className="px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium text-white bg-[#242321] hover:bg-[#373431] active:bg-[#161513] rounded transition-colors cursor-pointer inline-flex items-center gap-2"
            >
              <span>Conversar sobre meu ambiente</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Right Column (6 cols): Editorial narrative */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full pt-1">
            <p className="text-xs sm:text-sm text-[#56514C] font-sans-clean leading-relaxed mb-4">
              Cozinhas, salas e áreas de convivência têm usos diferentes. Veja nas fotos como armários, painéis e nichos foram distribuídos em cada ambiente.
            </p>
          </div>
        </div>

        {/* 3-card Gallery Row (matching reference image) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.project.id + index}
              className="group relative bg-white rounded-xl overflow-hidden border border-[#E6DED5] hover:border-[#BC8A63] transition-all duration-200 flex flex-col shadow-xs hover:shadow-md"
            >
              <button type="button" onClick={() => onSelectProject(item.project)} aria-label={`Ver projeto ${item.project.title}`} className="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:outline-[#A8754D]" />
              <div className="relative aspect-[4/3] bg-[#F2ECE4] overflow-hidden">
                <img
                  src={item.project.image}
                  alt={item.project.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-wider text-[#6F6962]">{item.tag}</p>
                  <h3 className="font-serif-editorial text-lg font-semibold text-[#1D1C1A] group-hover:text-[#956440] transition-colors mb-1">
                    {item.project.title}
                  </h3>
                  <p className="text-xs text-[#56514C] leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center justify-between text-[11px] text-[#956440] font-medium">
                  <span>Explorar projeto</span>
                  <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
