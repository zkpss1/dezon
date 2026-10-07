import React from 'react';
import { WHATSAPP_URL } from '../data/contact';
import { WhatsAppIcon } from './WhatsAppIcon';

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsappUrl = `${WHATSAPP_URL}?text=Ol%C3%A1%20Dezon%20M%C3%B3veis%2C%20gostaria%20de%20solicitar%20um%20projeto%20sob%20medida%20para%20meu%20im%C3%B3vel.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#1DB954] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F2524]"
      aria-label="Falar pelo WhatsApp com a Dezon Móveis"
      title="Falar pelo WhatsApp"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
};
