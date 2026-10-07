import React from 'react';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5522998820120?text=Ol%C3%A1%20Dezon%20M%C3%B3veis%2C%20gostaria%20de%20solicitar%20um%20projeto%20sob%20medida%20para%20meu%20im%C3%B3vel.';

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-2.5 bg-[#242321] hover:bg-[#1D1C1A] text-white rounded-full shadow-lg border border-[#A8754D]/40 transition-all duration-200 hover:scale-105 group"
      aria-label="Falar pelo WhatsApp com a Dezon Móveis"
    >
      <div className="w-2.5 h-2.5 rounded-full bg-[#587158] animate-pulse" />
      <MessageCircle className="w-4 h-4 text-[#BC8A63]" />
      <span className="text-xs font-medium font-sans-clean hidden sm:inline text-[#FAF8F4]">
        Falar no WhatsApp
      </span>
    </a>
  );
};
