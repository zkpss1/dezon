import React from 'react';
import { Instagram, MapPin, Clock } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '../data/contact';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FooterProps {
  onOpenSimulator: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSimulator }) => {
  return (
    <footer className="bg-[#242321] text-[#E6DED5] border-t border-[#34312E] pt-14 pb-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#34312E]">
          {/* Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#/" aria-label="Dezon Móveis Planejados — início">
              <img src="/dezon-logo.svg" alt="Dezon Móveis Planejados" className="w-[185px] h-auto" width="185" height="70" loading="lazy" />
            </a>

            <p className="text-xs text-[#FAF8F4]/80 leading-relaxed font-sans-clean max-w-sm">
              Móveis planejados sob medida em Araruama, Região dos Lagos e Rio de Janeiro.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/dezonmoveis"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#34312E] hover:bg-[#956440] text-white transition-colors"
                title="Instagram @dezonmoveis"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-[#34312E] hover:bg-[#956440] text-white transition-colors"
                title={`WhatsApp ${WHATSAPP_DISPLAY}`}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Ambientes Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#BC8A63] font-sans-clean">
              Navegação
            </p>
            <ul className="space-y-2 text-xs text-[#FAF8F4]/70">
              <li><a href="#/" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#/projetos/cozinhas" className="hover:text-white transition-colors">Cozinhas planejadas</a></li>
              <li><a href="#/projetos/salas" className="hover:text-white transition-colors">Salas</a></li>
              <li><a href="#/projetos/dormitorios" className="hover:text-white transition-colors">Quartos e closets</a></li>
              <li><a href="#/projetos/gourmet" className="hover:text-white transition-colors">Espaços gourmet</a></li>
              <li><a href="#/projetos" className="hover:text-white transition-colors">Todos os projetos</a></li>
            </ul>
          </div>

          {/* Região Atendida (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#BC8A63] font-sans-clean">
              Regiões Atendidas
            </p>
            <ul className="space-y-1.5 text-xs text-[#FAF8F4]/70">
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#BC8A63]" />
                <span>Araruama</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#BC8A63]" />
                <span>Cabo Frio & Armação dos Búzios</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#BC8A63]" />
                <span>São Pedro da Aldeia & Arraial</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#BC8A63]" />
                <span>Saquarema & Maricá</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#BC8A63]" />
                <span>Niterói & Rio de Janeiro (Capital)</span>
              </li>
            </ul>
          </div>

          {/* Endereço & Horário (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <p className="font-semibold uppercase tracking-wider text-[#BC8A63] font-sans-clean">
              Endereço & Atendimento
            </p>
            <div className="flex items-start gap-2 text-[#FAF8F4]/80">
              <MapPin className="w-4 h-4 text-[#BC8A63] shrink-0 mt-0.5" />
              <span>Rua José Maria Castanho 237, Araruama - RJ, CEP 28972-822</span>
            </div>
            <div className="flex items-start gap-2 text-[#FAF8F4]/80">
              <Clock className="w-4 h-4 text-[#BC8A63] shrink-0 mt-0.5" />
              <span>Seg à Sex: 08:30 às 18:00<br />Sáb: 09:00 às 13:00</span>
            </div>
            <div className="pt-2">
              <button
                onClick={onOpenSimulator}
                className="min-h-11 w-full py-2 px-3 text-xs font-medium text-white bg-[#956440] hover:bg-[#7F5334] rounded text-center transition-colors cursor-pointer"
              >
                Solicitar projeto
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#B7AFA7]">
          <p>© {new Date().getFullYear()} Dezon Móveis Planejados. Todos os direitos reservados.</p>
          <p>Araruama · Rio de Janeiro</p>
        </div>
      </div>
    </footer>
  );
};
