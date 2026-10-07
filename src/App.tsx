/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HomeContent } from './components/HomeContent';
import { EditorialShowcase } from './components/EditorialShowcase';
import { AlternatingEditorialSection } from './components/AlternatingEditorialSection';
import { MaterialsShowcase } from './components/MaterialsShowcase';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ProjectSimulator } from './components/ProjectSimulator';
import { SearchModal } from './components/SearchModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { CATEGORIES, PROJECTS, Project } from './data/projectsData';
import { readRoute } from './route';

const pageNames: Record<string, string> = {
  inicio: 'Início',
  projetos: 'Projetos',
  ambientes: 'Ambientes',
  materiais: 'Materiais e acabamentos',
  processo: 'Como trabalhamos',
  sobre: 'Sobre a Dezon',
};

export default function App() {
  const [route, setRoute] = useState(() => readRoute(window.location.hash, CATEGORIES));
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const mainRef = useRef<HTMLElement>(null);
  const mounted = useRef(false);
  const categoryName = route.section === 'projetos' ? CATEGORIES.find((item) => item.id === route.category)?.label : undefined;
  const pageName = route.category !== 'todos' ? categoryName || pageNames[route.section] : pageNames[route.section];

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    const onHashChange = () => {
      setRoute(readRoute(window.location.hash, CATEGORIES));
      setSelectedProject(null);
      setIsSearchOpen(false);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    document.title = route.section === 'inicio'
      ? 'Dezon Móveis Planejados | Marcenaria sob medida'
      : `${pageName} | Dezon Móveis Planejados`;
    window.scrollTo(0, 0);
    if (mounted.current) mainRef.current?.focus({ preventScroll: true });
    mounted.current = true;
  }, [route, pageName]);

  const handleOpenSimulator = () => setIsSimulatorOpen(true);

  const handleSelectCategory = (categoryId: string) => {
    window.location.hash = categoryId === 'todos' ? '#/projetos' : `#/projetos/${categoryId}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF8F4] text-[#1D1C1A] flex flex-col font-sans-clean antialiased selection:bg-[#BC8A63]/25 selection:text-[#1D1C1A]">
      <button className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#242321] focus:px-4 focus:py-2 focus:text-white" onClick={() => mainRef.current?.focus()}>
        Pular para o conteúdo
      </button>
      <Header
        onOpenSimulator={handleOpenSimulator}
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={handleSelectCategory}
        activeCategory={route.section === 'projetos' ? route.category : ''}
        activeSection={route.section}
      />

      <main id="conteudo" ref={mainRef} tabIndex={-1} aria-label={pageName} className="flex-1 outline-none">
        {route.section !== 'inicio' && <h1 className="sr-only">{pageName}</h1>}
        {route.section === 'inicio' && <>
          <Hero
            onOpenSimulator={handleOpenSimulator}
            onExplorePortfolio={() => { window.location.hash = '#/projetos'; }}
          />
          <HomeContent onOpenSimulator={handleOpenSimulator} />
        </>}

        {route.section === 'projetos' && <EditorialShowcase
          projects={PROJECTS}
          selectedCategory={route.category}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenSimulator={handleOpenSimulator}
        />}

        {route.section === 'ambientes' && <AlternatingEditorialSection
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenSimulator={handleOpenSimulator}
        />}

        {route.section === 'materiais' && <MaterialsShowcase
          onOpenSimulator={handleOpenSimulator}
        />}

        {route.section === 'processo' && <ProcessSection />}

        {route.section === 'sobre' && <AboutSection
          onOpenSimulator={handleOpenSimulator}
        />}
      </main>

      {/* Editorial Dark Footer */}
      <Footer
        onOpenSimulator={handleOpenSimulator}
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppFloatingButton />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ProjectSimulator
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        projects={PROJECTS}
        onSelectProject={(project) => setSelectedProject(project)}
      />
    </div>
  );
}
