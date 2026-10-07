import React from 'react';
import { Project } from '../data/projectsData';
import { ArrowUpRight, Maximize2 } from 'lucide-react';

interface EditorialShowcaseProps {
  projects: Project[];
  selectedCategory: string;
  onSelectProject: (project: Project) => void;
  onOpenSimulator: () => void;
}

export const EditorialShowcase: React.FC<EditorialShowcaseProps> = ({
  projects,
  selectedCategory,
  onSelectProject,
  onOpenSimulator,
}) => {
  // Filter projects based on selectedCategory
  const filteredProjects = selectedCategory === 'todos'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  // Grab specific highlight projects for the reference layout
  const sideboardProject = projects.find((p) => p.id === 'sideboard-minimalista') || projects[1];
  const livingRoomProject = projects.find((p) => p.id === 'sala-painel-tv') || projects[2];
  const wardrobeProject = projects.find((p) => p.id === 'closet-master-lumiere') || projects[3];

  return (
    <section id="projetos" className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F4] border-b border-[#E6DED5]/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* If category is filtered to a specific category, show curated grid */}
        {selectedCategory !== 'todos' ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative bg-white rounded-xl overflow-hidden border border-[#E6DED5] hover:border-[#BC8A63]/50 transition-all duration-200 shadow-xs hover:shadow-md"
                >
                  <button type="button" onClick={() => onSelectProject(project)} aria-label={`Ver projeto ${project.title}`} className="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:outline-[#A8754D]" />
                  <div className="relative aspect-[4/3] bg-[#F2ECE4] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-[#242321] opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-sans-clean text-[#6F6962] tracking-wide uppercase mb-1">
                      {project.categoryLabel}
                    </p>
                    <h3 className="font-serif-editorial text-lg text-[#1D1C1A] font-semibold mb-2 group-hover:text-[#956440] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#56514C] line-clamp-2 leading-relaxed">
                      {project.shortDesc}
                    </p>
                    <div className="mt-4 pt-3 border-t border-[#F2ECE4] flex items-center justify-between text-[11px] text-[#956440] font-medium">
                      <span>Ver projeto</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {filteredProjects.length === 0 && (
              <div className="text-center py-16 bg-white rounded-xl border border-[#E6DED5]">
                <p className="font-serif-editorial text-xl text-[#242321] mb-2">Ainda não há fotos nesta categoria</p>
                <p className="text-xs text-[#6F6962] mb-4">Conte o que você procura e vamos conversar sobre o ambiente.</p>
                <button
                  onClick={onOpenSimulator}
                  className="px-4 py-2 text-xs text-white bg-[#956440] rounded font-medium"
                >
                  Conversar sobre meu projeto
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Asymmetrical Grid matching reference photo 8118cb1fb2a4c48b25654046f21267df.jpg */
          <div className="space-y-6">
            {/* Top Row: Left Editorial Text + Center Card + Right Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Column (5 cols): Editorial Headline & Description */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 bg-white rounded-xl border border-[#E6DED5]">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-sans-clean text-[#956440] font-medium block mb-2">
                    Ambientes planejados
                  </span>
                  <h2 className="font-serif-editorial text-2xl sm:text-3xl lg:text-[34px] font-normal text-[#1D1C1A] leading-[1.12] mb-4 text-balance">
                    Ideias de móveis para cada ambiente.
                  </h2>
                  <p className="text-xs sm:text-sm text-[#56514C] font-sans-clean leading-relaxed mb-4">
                    Painéis, armários e nichos ganham forma a partir das medidas e da maneira como você usa cada espaço.
                  </p>
                  <p className="text-xs text-[#6F6962] leading-relaxed hidden sm:block">
                    As fotos mostram diferentes formas de organizar e aproveitar os ambientes.
                  </p>
                </div>

                <div className="pt-6 border-t border-[#F2ECE4] mt-6 flex items-center gap-3">
                  <button
                    onClick={onOpenSimulator}
                    className="w-full px-4 py-3 sm:w-auto sm:px-5 text-xs font-medium text-white bg-[#242321] hover:bg-[#373431] active:bg-[#161513] rounded transition-colors cursor-pointer"
                  >
                    Conversar sobre meu projeto
                  </button>
                </div>
              </div>

              {/* Center Column (3.5 cols): Sideboard Card */}
              <div
                className="lg:col-span-4 group relative bg-white rounded-xl overflow-hidden border border-[#E6DED5] hover:border-[#BC8A63]/50 transition-all duration-200 flex flex-col"
              >
                <button type="button" onClick={() => onSelectProject(sideboardProject)} aria-label={`Ver projeto ${sideboardProject.title}`} className="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:outline-[#A8754D]" />
                <div className="relative aspect-[4/3] bg-[#F2ECE4] overflow-hidden">
                  <img
                    src={sideboardProject.image}
                    alt={sideboardProject.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-[#242321] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#6F6962] mb-1">
                      {sideboardProject.categoryLabel}
                    </p>
                    <h3 className="font-serif-editorial text-base sm:text-lg font-semibold text-[#1D1C1A] group-hover:text-[#956440] transition-colors">
                      {sideboardProject.title}
                    </h3>
                    <p className="text-xs text-[#56514C] mt-1 line-clamp-2">
                      {sideboardProject.shortDesc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 text-[11px] text-[#956440] font-medium flex items-center gap-1">
                    <span>Ver projeto</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>

              {/* Right Column (3.5 cols): Living Room Card */}
              <div
                className="lg:col-span-3 group relative bg-white rounded-xl overflow-hidden border border-[#E6DED5] hover:border-[#BC8A63]/50 transition-all duration-200 flex flex-col"
              >
                <button type="button" onClick={() => onSelectProject(livingRoomProject)} aria-label={`Ver projeto ${livingRoomProject.title}`} className="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:outline-[#A8754D]" />
                <div className="relative aspect-[4/3] bg-[#F2ECE4] overflow-hidden">
                  <img
                    src={livingRoomProject.image}
                    alt={livingRoomProject.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-[#242321] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#6F6962] mb-1">
                      {livingRoomProject.categoryLabel}
                    </p>
                    <h3 className="font-serif-editorial text-base sm:text-lg font-semibold text-[#1D1C1A] group-hover:text-[#956440] transition-colors">
                      {livingRoomProject.title}
                    </h3>
                    <p className="text-xs text-[#56514C] mt-1 line-clamp-2">
                      {livingRoomProject.shortDesc}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 text-[11px] text-[#956440] font-medium flex items-center gap-1">
                    <span>Ver projeto</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Soft Beige Editorial Block + Wide Wardrobe Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Soft Editorial Banner Card (#F2ECE4 as in reference) */}
              <div className="lg:col-span-5 p-6 sm:p-8 bg-[#F2ECE4] rounded-xl border border-[#E6DED5] flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[#956440] mb-3">
                    <span className="text-[10px] font-sans-clean font-semibold tracking-widest uppercase">
                      Escolhas de projeto
                    </span>
                  </div>
                  <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#1D1C1A] font-semibold mb-3 leading-snug">
                    O espaço dita as escolhas.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#56514C] font-sans-clean leading-relaxed mb-4">
                    Conte como você usa o espaço e escolha com a equipe os materiais, as cores e os detalhes da sua marcenaria.
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E6DED5] flex items-center justify-between text-xs text-[#56514C]">
                  <span>Conte sobre seu ambiente</span>
                  <span className="font-medium text-[#242321]">Acabamentos sob consulta</span>
                </div>
              </div>

              {/* Wide Wardrobe Showcase Card */}
              <div
                className="lg:col-span-7 group relative bg-white rounded-xl overflow-hidden border border-[#E6DED5] hover:border-[#BC8A63]/50 transition-all duration-200 flex flex-col sm:flex-row"
              >
                <button type="button" onClick={() => onSelectProject(wardrobeProject)} aria-label={`Ver projeto ${wardrobeProject.title}`} className="absolute inset-0 z-10 focus-visible:outline-2 focus-visible:outline-[#A8754D]" />
                <div className="relative w-full sm:w-1/2 aspect-[4/3] sm:aspect-auto bg-[#F2ECE4] overflow-hidden">
                  <img
                    src={wardrobeProject.image}
                    alt={wardrobeProject.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-[#242321] opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="p-6 w-full sm:w-1/2 flex flex-col justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#6F6962] mb-1">
                      {wardrobeProject.categoryLabel}
                    </p>
                    <h3 className="font-serif-editorial text-xl font-semibold text-[#1D1C1A] group-hover:text-[#956440] transition-colors mb-2">
                      {wardrobeProject.title}
                    </h3>
                    <p className="text-xs text-[#56514C] leading-relaxed mb-3">
                      {wardrobeProject.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 text-[11px] text-[#6F6962]">
                      <span>Portas de piso a teto</span>
                      <span aria-hidden="true">·</span>
                      <span>Puxadores verticais</span>
                      <span aria-hidden="true">·</span>
                      <span>Bancada lateral</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-[#F2ECE4] mt-4 flex items-center justify-between text-xs text-[#956440] font-medium">
                    <span>Ver guarda-roupa</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
