import React from 'react';
import { Ruler, Box, Wrench, ShieldCheck } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Conversa e medidas',
      desc: 'Começamos pelo espaço, pelas medidas e pelo que você precisa guardar ou usar no dia a dia.',
      icon: Ruler
    },
    {
      number: '02',
      title: 'Desenho e acabamentos',
      desc: 'Definimos a distribuição dos móveis e conversamos sobre cores, materiais e detalhes antes da produção.',
      icon: Box
    },
    {
      number: '03',
      title: 'Produção',
      desc: 'Com o desenho aprovado, as peças são preparadas conforme as medidas e escolhas do projeto.',
      icon: Wrench
    },
    {
      number: '04',
      title: 'Montagem',
      desc: 'A montagem é combinada para o seu ambiente, com prazos e detalhes alinhados antes da execução.',
      icon: ShieldCheck
    }
  ];

  return (
    <section id="processo" className="py-14 sm:py-20 lg:py-24 bg-[#FAF8F4] border-b border-[#E6DED5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[10px] tracking-[0.25em] uppercase font-sans-clean text-[#956440] font-semibold block mb-2">
            Do primeiro contato à montagem
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#1D1C1A] leading-tight mb-4">
            Como funciona o projeto
          </h2>
          <p className="text-xs sm:text-sm text-[#56514C] font-sans-clean leading-relaxed">
            Cada etapa ajuda a alinhar medidas, escolhas e prazos antes da montagem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="p-6 bg-white rounded-xl border border-[#E6DED5] flex flex-col justify-between hover:border-[#BC8A63] transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-editorial text-2xl font-semibold text-[#956440]">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-lg bg-[#FAF8F4] text-[#242321]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-serif-editorial text-lg font-semibold text-[#1D1C1A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#56514C] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
