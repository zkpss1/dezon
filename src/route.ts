const sections = ['projetos', 'ambientes', 'materiais', 'processo', 'sobre'];

export function readRoute(hash: string, categories: readonly { id: string }[]) {
  const [requestedSection, requestedCategory] = hash.replace(/^#\/?/, '').split('/');
  return {
    section: sections.includes(requestedSection) ? requestedSection : 'inicio',
    category: categories.some((item) => item.id === requestedCategory) ? requestedCategory : 'todos',
  };
}
