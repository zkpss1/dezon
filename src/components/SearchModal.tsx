import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../data/projectsData';
import { Search, X, ArrowUpRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  projects,
  onSelectProject,
}) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!isOpen) return;
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => {
      if (dialog?.open) dialog.close();
      openerRef.current?.focus();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const filtered = query.trim() === ''
    ? projects
    : projects.filter((p) => {
        const text = `${p.title} ${p.shortDesc} ${p.fullDesc} ${p.categoryLabel}`.toLowerCase();
        return text.includes(query.toLowerCase());
      });

  return (
    <dialog ref={dialogRef} onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} aria-label="Buscar projetos" className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-transparent px-4 pt-16 sm:pt-24 open:flex items-start justify-center backdrop:bg-[#1D1C1A]/60 backdrop:backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E6DED5] overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E6DED5] flex items-center gap-3 bg-[#FAF8F4]">
          <Search className="w-5 h-5 text-[#6F6962] shrink-0" />
          <input
            type="text"
            autoFocus
            aria-label="Buscar projetos"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por ambiente, material (ex: freijó, closet, cozinha)..."
            className="w-full bg-transparent text-sm text-[#1D1C1A] placeholder-[#6F6962] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#A8754D] font-sans-clean"
          />
          <button
            onClick={onClose}
            className="p-1.5 text-[#6F6962] hover:text-[#1D1C1A] hover:bg-[#E6DED5] rounded transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick tags */}
        <div className="px-5 py-2.5 bg-[#FAF8F4]/50 border-b border-[#E6DED5] flex items-center gap-2 overflow-x-auto text-[11px] text-[#56514C]">
          <span className="text-[#6F6962] shrink-0 font-medium">Sugestões:</span>
          {['Cozinha', 'Cristaleira', 'Guarda-roupa', 'Painel ripado', 'Sala', 'Gourmet'].map((s) => (
            <button
              key={s}
              onClick={() => setQuery(s)}
              className="px-2.5 py-0.5 rounded bg-white border border-[#E6DED5] hover:border-[#A8754D] hover:text-[#956440] transition-colors whitespace-nowrap cursor-pointer"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-4 overflow-y-auto space-y-3">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <button
                type="button"
                key={project.id}
                onClick={() => {
                  dialogRef.current?.close();
                  openerRef.current?.focus();
                  onSelectProject(project);
                  onClose();
                }}
                className="group w-full text-left p-3 rounded-xl border border-[#E6DED5] hover:border-[#A8754D] hover:bg-[#FAF8F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A8754D] transition-colors cursor-pointer flex items-center gap-4"
              >
                <span className="w-20 h-16 sm:w-24 sm:h-20 rounded-lg overflow-hidden bg-[#242321] shrink-0">
                  <img
                    src={project.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block text-[10px] uppercase tracking-wider text-[#956440] font-medium">
                    {project.categoryLabel}
                  </span>
                  <span className="block font-serif-editorial text-base font-semibold text-[#1D1C1A] truncate group-hover:text-[#956440] transition-colors">
                    {project.title}
                  </span>
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#6F6962] group-hover:text-[#956440] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </button>
            ))
          ) : (
            <div className="text-center py-10 text-[#6F6962] text-xs">
              Nenhum resultado encontrado para "{query}". Tente buscar por outros termos como "cozinha", "madeira" ou "closet".
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
};
