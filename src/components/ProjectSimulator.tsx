import React, { useEffect, useRef, useState } from 'react';
import { X, Check, Send, Sparkles, MapPin } from 'lucide-react';
import { WHATSAPP_URL } from '../data/contact';
import { WhatsAppIcon } from './WhatsAppIcon';

interface ProjectSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectSimulator: React.FC<ProjectSimulatorProps> = ({ isOpen, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [environments, setEnvironments] = useState<string[]>(['cozinha']);
  const [propertyType, setPropertyType] = useState('casa');
  const [location, setLocation] = useState('Araruama');
  const [stage, setStage] = useState('pronto');
  const [preferredFinish, setPreferredFinish] = useState('freijo');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) setSubmitted(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => {
      if (dialog?.open) dialog.close();
      opener?.focus();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const envOptions = [
    { id: 'cozinha', label: 'Cozinha Planejada' },
    { id: 'living', label: 'Living & Home Theater' },
    { id: 'suite', label: 'Suíte Master & Closet' },
    { id: 'gourmet', label: 'Espaço Gourmet / Varanda' },
    { id: 'banheiro', label: 'Banheiros & Lavabos' },
    { id: 'completo', label: 'Residência Completa' },
  ];

  const cityOptions = [
    'Araruama',
    'Cabo Frio',
    'São Pedro da Aldeia',
    'Armação dos Búzios',
    'Saquarema',
    'Arraial do Cabo',
    'Maricá',
    'Niterói',
    'Rio de Janeiro (Capital)',
    'Outra Região do RJ'
  ];

  const toggleEnvironment = (id: string) => {
    if (id === 'completo') {
      setEnvironments(['completo']);
      return;
    }
    const current = environments.filter((e) => e !== 'completo');
    if (current.includes(id)) {
      setEnvironments(current.filter((e) => e !== id));
    } else {
      setEnvironments([...current, id]);
    }
  };

  const getFormattedWhatsAppMessage = () => {
    const selectedEnvLabels = environments.map(
      (e) => envOptions.find((opt) => opt.id === e)?.label || e
    ).join(', ');

    const text = `*Solicitação de Projeto Sob Medida - Dezon Móveis Planejados*\n\n` +
      `👤 *Nome:* ${name || 'Cliente'}\n` +
      `📱 *WhatsApp:* ${phone || 'A informar'}\n` +
      `📍 *Localização:* ${location}\n` +
      `🏠 *Tipo de Imóvel:* ${propertyType === 'casa' ? 'Casa em Condomínio / Rua' : propertyType === 'apto' ? 'Apartamento / Cobertura' : 'Imóvel Comercial'}\n` +
      `🛋️ *Ambientes desejados:* ${selectedEnvLabels || 'Não especificado'}\n` +
      `🪵 *Acabamento de preferência:* ${preferredFinish === 'freijo' ? 'Freijó Natural' : preferredFinish === 'carvalho' ? 'Carvalho Americano' : preferredFinish === 'laca' ? 'Laca Acetinada' : 'Madeira, laca e vidro'}\n` +
      `⏱️ *Fase do Imóvel:* ${stage === 'planta' ? 'Na Planta / Construção' : stage === 'reforma' ? 'Em Reforma' : 'Pronto para Mobiliar'}\n` +
      (notes ? `📝 *Observações:* ${notes}\n` : '') +
      `\n_Enviado pelo site oficial da Dezon Móveis Planejados (Araruama/RJ)._`;

    return encodeURIComponent(text);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMessage = getFormattedWhatsAppMessage();
    const whatsappUrl = `${WHATSAPP_URL}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <dialog ref={dialogRef} onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} aria-labelledby="simulator-title" className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none border-0 bg-transparent p-4 open:flex items-center justify-center backdrop:bg-[#1D1C1A]/60 backdrop:backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#E6DED5] max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 border-b border-[#E6DED5] flex items-center justify-between bg-[#FAF8F4]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#956440]" />
            <h3 id="simulator-title" className="font-serif-editorial text-lg sm:text-xl font-semibold text-[#1D1C1A]">
              Solicitação de Projeto Sob Medida
            </h3>
          </div>
          <button
            autoFocus
            onClick={onClose}
            className="p-1.5 text-[#6F6962] hover:text-[#1D1C1A] hover:bg-[#E6DED5] rounded transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#587158]/15 text-[#587158] flex items-center justify-center mx-auto">
                <Send className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h4 className="font-serif-editorial text-2xl text-[#1D1C1A] font-semibold">
                Sua mensagem está pronta para envio
              </h4>
              <p className="text-xs sm:text-sm text-[#56514C] max-w-md mx-auto leading-relaxed">
                Abra a conversa no WhatsApp e toque em Enviar para concluir sua solicitação. Se a conversa não abriu, use o botão abaixo.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`${WHATSAPP_URL}?text=${getFormattedWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 text-xs font-medium text-white bg-[#587158] hover:bg-[#475d47] rounded flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Abrir Conversa no WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 text-xs font-medium text-[#242321] bg-[#F2ECE4] hover:bg-[#E6DED5] rounded"
                >
                  Voltar ao Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSendWhatsApp} className="space-y-6">
              {/* Step 1: Environments */}
              <div>
                <p id="project-environments-label" className="block text-xs font-semibold text-[#1D1C1A] uppercase tracking-wider mb-2">
                  1. Quais ambientes você deseja planejar?
                </p>
                <div role="group" aria-labelledby="project-environments-label" className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {envOptions.map((opt) => {
                    const isSelected = environments.includes(opt.id);
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => toggleEnvironment(opt.id)}
                        aria-pressed={isSelected}
                        className={`p-2.5 text-xs rounded-lg border text-left flex items-center justify-between transition-colors cursor-pointer ${
                          isSelected
                            ? 'bg-[#FAF8F4] border-[#A8754D] text-[#1D1C1A] font-medium ring-1 ring-[#A8754D]/30'
                            : 'bg-white border-[#E6DED5] text-[#56514C] hover:border-[#BC8A63]'
                        }`}
                      >
                        <span className="truncate">{opt.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#956440] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Property & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="project-location" className="block text-xs font-semibold text-[#1D1C1A] uppercase tracking-wider mb-2">
                    2. Cidade / Região do Imóvel
                  </label>
                  <div className="relative">
                    <select
                      id="project-location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full h-10 px-3 pr-8 rounded-lg border border-[#E6DED5] bg-white text-xs text-[#1D1C1A] focus:outline-none focus:border-[#A8754D]"
                    >
                      {cityOptions.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    <MapPin className="w-4 h-4 text-[#6F6962] absolute right-3 top-3 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <p id="project-property-label" className="block text-xs font-semibold text-[#1D1C1A] uppercase tracking-wider mb-2">
                    3. Tipo de Imóvel
                  </p>
                  <div role="group" aria-labelledby="project-property-label" className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPropertyType('casa')}
                      aria-pressed={propertyType === 'casa'}
                      className={`p-2 text-xs rounded-lg border text-center transition-colors cursor-pointer ${
                        propertyType === 'casa'
                          ? 'bg-[#242321] text-white font-medium border-[#242321]'
                          : 'bg-white border-[#E6DED5] text-[#56514C]'
                      }`}
                    >
                      Casa
                    </button>
                    <button
                      type="button"
                      onClick={() => setPropertyType('apto')}
                      aria-pressed={propertyType === 'apto'}
                      className={`p-2 text-xs rounded-lg border text-center transition-colors cursor-pointer ${
                        propertyType === 'apto'
                          ? 'bg-[#242321] text-white font-medium border-[#242321]'
                          : 'bg-white border-[#E6DED5] text-[#56514C]'
                      }`}
                    >
                      Apto / Cob.
                    </button>
                    <button
                      type="button"
                      onClick={() => setPropertyType('comercial')}
                      aria-pressed={propertyType === 'comercial'}
                      className={`p-2 text-xs rounded-lg border text-center transition-colors cursor-pointer ${
                        propertyType === 'comercial'
                          ? 'bg-[#242321] text-white font-medium border-[#242321]'
                          : 'bg-white border-[#E6DED5] text-[#56514C]'
                      }`}
                    >
                      Comercial
                    </button>
                  </div>
                </div>
              </div>

              {/* Step 3: Stage & Finish */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p id="project-stage-label" className="block text-xs font-semibold text-[#1D1C1A] uppercase tracking-wider mb-2">
                    4. Fase da Obra
                  </p>
                  <div role="group" aria-labelledby="project-stage-label" className="grid grid-cols-3 gap-1.5 text-[11px]">
                    {[
                      { id: 'planta', label: 'Na Planta' },
                      { id: 'reforma', label: 'Em Reforma' },
                      { id: 'pronto', label: 'Pronto p/ mobiliar' },
                    ].map((s) => (
                      <button
                        type="button"
                        key={s.id}
                        onClick={() => setStage(s.id)}
                        aria-pressed={stage === s.id}
                        className={`p-2 rounded border text-center transition-colors cursor-pointer ${
                          stage === s.id
                            ? 'bg-[#FAF8F4] border-[#A8754D] text-[#956440] font-medium'
                            : 'bg-white border-[#E6DED5] text-[#56514C]'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="project-finish" className="block text-xs font-semibold text-[#1D1C1A] uppercase tracking-wider mb-2">
                    5. Estilo / Acabamento Desejado
                  </label>
                  <select
                    id="project-finish"
                    value={preferredFinish}
                    onChange={(e) => setPreferredFinish(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-[#E6DED5] bg-white text-xs text-[#1D1C1A] focus:outline-none focus:border-[#A8754D]"
                  >
                    <option value="freijo">Freijó Natural & Madeira Quente</option>
                    <option value="carvalho">Carvalho Americano & Minimalista</option>
                    <option value="laca">Laca (Fendi / Grafite)</option>
                    <option value="misto">Madeira, laca e vidro</option>
                  </select>
                </div>
              </div>

              {/* Step 4: Contact details */}
              <div className="pt-2 border-t border-[#E6DED5] space-y-3">
                <p className="block text-xs font-semibold text-[#1D1C1A] uppercase tracking-wider">
                  6. Seus dados para contato direto
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    aria-label="Nome completo"
                    required
                    placeholder="Seu nome completo"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="h-10 px-3.5 rounded-lg border border-[#E6DED5] bg-white text-xs text-[#1D1C1A] focus:outline-none focus:border-[#A8754D]"
                  />
                  <input
                    type="tel"
                    aria-label="Número de WhatsApp"
                    required
                    placeholder="WhatsApp (ex.: 22 99999-9999)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-10 px-3.5 rounded-lg border border-[#E6DED5] bg-white text-xs text-[#1D1C1A] focus:outline-none focus:border-[#A8754D]"
                  />
                </div>
                <textarea
                  aria-label="Observações ou metragem aproximada"
                  rows={2}
                  placeholder="Observações ou metragem aproximada (opcional)"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-3 rounded-lg border border-[#E6DED5] bg-white text-xs text-[#1D1C1A] focus:outline-none focus:border-[#A8754D]"
                />
              </div>

              {/* Bottom Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="text-[11px] text-[#6F6962]">
                  Atendimento direto pela equipe Dezon em Araruama / RJ.
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-medium text-white bg-[#956440] hover:bg-[#7F5334] active:bg-[#7F5334] rounded flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Enviar Solicitação pelo WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </dialog>
  );
};
