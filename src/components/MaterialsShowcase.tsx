import React, { useState } from 'react';
import { MATERIAL_SWATCHES, MaterialSwatch } from '../data/materialsData';
import { Check, ArrowRight } from 'lucide-react';

interface MaterialsShowcaseProps {
  onOpenSimulator: () => void;
}

export const MaterialsShowcase: React.FC<MaterialsShowcaseProps> = ({ onOpenSimulator }) => {
  const [activeTab, setActiveTab] = useState<'madeiras' | 'lacas' | 'vidros' | 'ferragens'>('madeiras');
  const [selectedSwatch, setSelectedSwatch] = useState<MaterialSwatch>(MATERIAL_SWATCHES[0]);

  const tabs = [
    { id: 'madeiras', label: 'Amadeirados' },
    { id: 'lacas', label: 'Cores lisas' },
    { id: 'vidros', label: 'Vidros' },
    { id: 'ferragens', label: 'Ferragens' },
  ] as const;

  const currentSwatches = MATERIAL_SWATCHES.filter((s) => s.category === activeTab);

  return (
    <section id="materiais" className="py-14 sm:py-20 bg-[#FAF8F4] border-b border-[#E6DED5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-[10px] tracking-[0.25em] uppercase font-sans-clean text-[#956440] font-semibold block mb-2">
            Acabamentos
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#1D1C1A] leading-tight mb-4 text-balance">
            Escolha o visual do seu móvel.
          </h2>
          <p className="text-xs sm:text-sm text-[#56514C] font-sans-clean leading-relaxed">
            Explore algumas referências de cor e textura. Os materiais disponíveis e a especificação final são definidos com a equipe para cada ambiente.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  const firstOfCategory = MATERIAL_SWATCHES.find((s) => s.category === tab.id);
                  if (firstOfCategory) setSelectedSwatch(firstOfCategory);
                }}
                className={`px-4 py-2 text-xs rounded transition-colors whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#242321] text-white font-medium shadow-xs'
                    : 'bg-[#F2ECE4] text-[#56514C] hover:bg-[#E6DED5] hover:text-[#1D1C1A]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Interactive Material Grid + Detail Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Swatch Selector Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentSwatches.map((swatch) => {
              const isSelected = selectedSwatch.id === swatch.id;
              return (
                <button
                  type="button"
                  key={swatch.id}
                  onClick={() => setSelectedSwatch(swatch)}
                  aria-pressed={isSelected}
                  className={`w-full text-left p-4 rounded-xl border transition-colors cursor-pointer bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8754D] ${
                    isSelected
                      ? 'border-[#A8754D] shadow-sm ring-1 ring-[#A8754D]/30'
                      : 'border-[#E6DED5] hover:border-[#BC8A63]/50'
                  }`}
                >
                  <span className="flex items-center gap-3 mb-3">
                    <span
                      className="w-10 h-10 rounded-lg border border-black/10 shrink-0 shadow-inner flex items-center justify-center text-white"
                      style={{ backgroundColor: swatch.colorPreview }}
                    >
                      {isSelected && <Check className="w-4 h-4 stroke-[2.5]" />}
                    </span>
                    <span>
                      <span className="block font-serif-editorial text-base font-semibold text-[#1D1C1A]">
                        {swatch.name}
                      </span>
                      <span className="block text-[11px] text-[#6F6962]">
                        {swatch.finish}
                      </span>
                    </span>
                  </span>
                  <span className="block text-xs text-[#56514C] line-clamp-2 leading-relaxed">
                    {swatch.description}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Material Deep Inspection Card (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-[#E6DED5] shadow-xs sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-[#F2ECE4] mb-5">
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-md border border-black/10"
                  style={{ backgroundColor: selectedSwatch.colorPreview }}
                />
                <div>
                  <h3 className="font-serif-editorial text-xl font-semibold text-[#1D1C1A]">
                    {selectedSwatch.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-[#956440] font-medium">
                    Referência visual
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#56514C] leading-relaxed mb-5">
              {selectedSwatch.description}
            </p>

            <div className="space-y-3.5 text-xs">
              <div className="bg-[#FAF8F4] p-3 rounded-lg border border-[#E6DED5]/70">
                <p className="text-[10px] uppercase font-semibold text-[#6F6962] tracking-wider mb-0.5">
                  Cor e textura
                </p>
                <p className="text-[#1D1C1A] font-medium">
                  {selectedSwatch.finish}
                </p>
              </div>

              <div className="bg-[#FAF8F4] p-3 rounded-lg border border-[#E6DED5]/70">
                <p className="text-[10px] uppercase font-semibold text-[#6F6962] tracking-wider mb-0.5">
                  Onde pode funcionar
                </p>
                <p className="text-[#1D1C1A]">
                  {selectedSwatch.recommendedFor}
                </p>
              </div>

              <div className="bg-[#FAF8F4] p-3 rounded-lg border border-[#E6DED5]/70">
                <p className="text-[#56514C] text-[11px]">
                  As cores na tela são aproximadas. Confirme o material e os cuidados de uso antes de fechar o projeto.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#F2ECE4]">
              <button
                onClick={onOpenSimulator}
                className="w-full py-2.5 text-xs font-medium text-white bg-[#956440] hover:bg-[#7F5334] rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Conversar sobre este acabamento</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
