import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { CATEGORIES } from '../data/projectsData';

interface HeaderProps {
  onOpenSimulator: () => void;
  onOpenSearch: () => void;
  onSelectCategory: (categoryId: string) => void;
  activeCategory: string;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSimulator,
  onOpenSearch,
  onSelectCategory,
  activeCategory,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Coleções', href: '#/projetos', section: 'projetos' },
    { label: 'Ambientes', href: '#/ambientes', section: 'ambientes' },
    { label: 'Materiais & Acabamentos', href: '#/materiais', section: 'materiais' },
    { label: 'O Processo', href: '#/processo', section: 'processo' },
    { label: 'Sobre a Dezon', href: '#/sobre', section: 'sobre' },
  ];

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
  };

  return (
    <header className="relative z-40 border-b border-white/10 bg-[#1F2524] text-white">
      {/* Main Header Row (Strict 3-zone contract) */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a href="#/" className="flex items-center" aria-label="Dezon Móveis Planejados — início">
          <img src="/dezon-logo.svg" alt="Dezon Móveis Planejados" className="w-[128px] sm:w-[165px] h-auto" width="165" height="62" />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-[#D8D9D4]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={activeSection === link.section ? 'page' : undefined}
              className="hover:text-white transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D0AA7B] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick search button */}
          <button
            onClick={onOpenSearch}
            className="min-h-11 min-w-11 p-2 sm:px-3 text-xs text-[#D8D9D4] hover:text-white hover:bg-white/10 rounded transition-colors flex items-center justify-center gap-2"
            title="Buscar ambientes ou acabamentos"
            aria-label="Buscar"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline text-xs font-sans-clean">Buscar</span>
          </button>

          {/* Primary Warm CTA Button */}
          <button
            onClick={onOpenSimulator}
            className="hidden min-h-11 px-4 py-2 sm:flex sm:px-5 text-xs font-semibold text-[#202321] bg-[#D0AA7B] hover:bg-[#E2BE91] rounded transition-colors whitespace-nowrap cursor-pointer items-center gap-1.5"
          >
            <span>Solicitar Projeto</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-h-11 min-w-11 p-2 text-white hover:bg-white/10 rounded flex items-center justify-center"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Category Sub-navigation Strip */}
      <div className="border-t border-white/10 bg-[#1A201F]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 overflow-x-auto py-2.5 scrollbar-none text-[11px] font-sans-clean">
            <a
              href="#/"
              aria-current={activeSection === 'inicio' ? 'page' : undefined}
              onClick={() => { if (activeSection === 'inicio') window.scrollTo(0, 0); }}
              className={`flex min-h-11 items-center whitespace-nowrap rounded px-3 py-1 transition-colors ${activeSection === 'inicio'
                ? 'bg-[#D0AA7B] font-semibold text-[#202321]'
                : 'text-[#D8D9D4] hover:bg-white/10 hover:text-white'
              }`}
            >
              Início
            </a>
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`min-h-11 px-3 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#D0AA7B] text-[#202321] font-semibold'
                      : 'text-[#D8D9D4] hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1F2524] border-b border-white/10 px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={activeSection === link.section ? 'page' : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-white py-1.5 border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSimulator();
                }}
                className="min-h-11 w-full py-2.5 text-center text-xs font-semibold text-[#202321] bg-[#D0AA7B] rounded"
              >
                Solicitar Orçamento Sob Medida
              </button>
              <div className="text-center pt-2 text-[11px] text-[#C3C8C2]">
                Rua José Maria Castanho 237, Araruama - RJ
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
