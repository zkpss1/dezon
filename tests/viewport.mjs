import assert from 'node:assert/strict';
import { belowNormalZoom } from '../src/viewport.ts';

assert.equal(belowNormalZoom(1, 0.8), true);
assert.equal(belowNormalZoom(1, 1.4), false);
assert.equal(belowNormalZoom(2, 0.6), false);
assert.equal(belowNormalZoom(2, 0.4), true);
console.log('Zoom mínimo: OK');
