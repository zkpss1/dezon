import assert from 'node:assert/strict';
import { readRoute } from '../src/route.ts';

const categories = [{ id: 'todos' }, { id: 'cozinhas' }];

assert.deepEqual(readRoute('#/', categories), { section: 'inicio', category: 'todos' });
assert.deepEqual(readRoute('#/projetos/cozinhas', categories), { section: 'projetos', category: 'cozinhas' });
assert.deepEqual(readRoute('#/materiais', categories), { section: 'materiais', category: 'todos' });
assert.deepEqual(readRoute('#/projetos/inexistente', categories), { section: 'projetos', category: 'todos' });

console.log('Rotas: OK');
