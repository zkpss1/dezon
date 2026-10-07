import React, { useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';
import { Project } from '../data/projectsData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    dialog?.showModal();
    closeButton.current?.focus();
    return () => {
      if (dialog?.open) dialog.close();
      opener?.focus();
    };
  }, [project]);

  if (!project) return null;

  const message = encodeURIComponent(`Olá Dezon Móveis, vi "${project.title}" no site e gostaria de conversar sobre um projeto semelhante para o meu imóvel.`);

  return (
    <dialog ref={dialogRef} onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} aria-labelledby="project-modal-title" className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-transparent p-3 sm:p-4 open:flex items-center justify-center backdrop:bg-[#1D1C1A]/70 backdrop:backdrop-blur-xs">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#E6DED5] max-h-[92vh] flex flex-col overflow-hidden">
        <div className="px-5 py-4 border-b border-[#E6DED5] flex items-center justify-between bg-[#FAF8F4]">
          <span className="text-[10px] tracking-widest uppercase font-sans-clean font-semibold text-[#956440]">{project.categoryLabel}</span>
          <button ref={closeButton} onClick={onClose} className="p-1.5 text-[#56514C] hover:text-[#1D1C1A] hover:bg-[#E6DED5] rounded" aria-label="Fechar projeto">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 overflow-y-auto space-y-5">
          <div className="rounded-xl overflow-hidden bg-[#F2ECE4] border border-[#E6DED5] flex justify-center">
            <img src={project.image} alt={project.title} className="max-h-[60vh] w-auto max-w-full object-contain" />
          </div>
          <div>
            <h2 id="project-modal-title" className="font-serif-editorial text-2xl sm:text-3xl text-[#1D1C1A] font-semibold mb-3">{project.title}</h2>
            <p className="text-sm text-[#56514C] font-sans-clean leading-relaxed">{project.fullDesc}</p>
          </div>
        </div>

        <div className="px-5 py-4 bg-[#FAF8F4] border-t border-[#E6DED5] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#6F6962] text-center sm:text-left">Cada projeto é desenvolvido para as medidas do seu ambiente.</p>
          <a href={`https://wa.me/5522998820120?text=${message}`} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 text-xs font-medium text-white bg-[#956440] hover:bg-[#7F5334] rounded flex items-center justify-center gap-2 shadow-xs">
            <Send className="w-3.5 h-3.5" />
            <span>Conversar sobre meu projeto</span>
          </a>
        </div>
      </div>
    </dialog>
  );
};
