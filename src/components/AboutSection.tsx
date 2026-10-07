import React from 'react';
import { MapPin, Phone, Instagram } from 'lucide-react';

interface AboutSectionProps {
  onOpenSimulator: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenSimulator }) => {
  return (
    <section id="sobre" className="py-14 sm:py-20 bg-[#F2ECE4]/60 border-b border-[#E6DED5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column (6 cols): Brand Story */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-sans-clean text-[#956440] font-semibold block mb-2">
                Sobre a Dezon
              </span>
              <h2 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#1D1C1A] leading-tight mb-4">
                Móveis planejados para o seu espaço.
              </h2>
              <p className="text-xs sm:text-sm text-[#56514C] font-sans-clean leading-relaxed mb-4">
                Na <strong>Dezon</strong>, cada conversa começa pelo ambiente: as medidas, a rotina e o que precisa caber ali. A partir disso, pensamos a distribuição dos móveis e os acabamentos.
              </p>
              <p className="text-xs sm:text-sm text-[#56514C] font-sans-clean leading-relaxed">
                Cozinhas, salas e dormitórios pedem soluções diferentes. O desenho leva em conta a circulação, o armazenamento e a forma como você usa a casa.
              </p>
            </div>

            {/* Core credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#E6DED5]">
                <p className="font-serif-editorial text-2xl font-semibold text-[#1D1C1A] mb-1">
                  Sob medida
                </p>
                <p className="text-[11px] text-[#6F6962]">
                  Medidas e uso do espaço orientam o desenho
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E6DED5]">
                <p className="font-serif-editorial text-2xl font-semibold text-[#956440] mb-1">
                  Suas escolhas
                </p>
                <p className="text-[11px] text-[#6F6962]">
                  Divisões, cores e acabamentos combinados com você
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={onOpenSimulator}
                className="px-5 py-2.5 text-xs font-medium text-white bg-[#242321] hover:bg-[#373431] rounded transition-colors cursor-pointer"
              >
                Conversar sobre meu projeto
              </button>
              <a
                href="https://www.instagram.com/dezonmoveis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#956440] hover:underline flex items-center gap-1 font-medium"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Dezon no Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Column (6 cols): Factory & Headquarters Card */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#E6DED5] shadow-xs space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#956440]">
                  Contato
                </span>
                <h3 className="font-serif-editorial text-xl font-semibold text-[#1D1C1A] mt-1">
                  Fale com a Dezon
                </h3>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF8F4] text-[#956440]">
                <MapPin className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-3 text-xs text-[#56514C]">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF8F4] border border-[#E6DED5]/60">
                <MapPin className="w-4 h-4 text-[#956440] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1D1C1A]">Endereço</p>
                  <p>Rua José Maria Castanho 237, Araruama - RJ, CEP 28972-822</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF8F4] border border-[#E6DED5]/60">
                <Phone className="w-4 h-4 text-[#956440] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1D1C1A]">WhatsApp</p>
                  <p>(22) 99882-0120</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#FAF8F4] border border-[#E6DED5]/60">
                <MapPin className="w-4 h-4 text-[#956440] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#1D1C1A]">Atendimento</p>
                  <p>Araruama e outras cidades do RJ, sob consulta.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5522998820120?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto%20de%20m%C3%B3veis%20planejados."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-xs font-medium text-white bg-[#956440] hover:bg-[#7F5334] rounded flex items-center justify-center gap-2 transition-colors"
              >
                <span>Conversar pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
