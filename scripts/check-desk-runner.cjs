// Run with node scripts/check-desk-runner.cjs. Uses the project's TypeScript compiler.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
const vm = require('node:vm');
const compiled = ts.transpileModule(fs.readFileSync('src/DeskRunner.tsx', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX }
});
const exportsObject = {};
vm.runInNewContext(compiled.outputText, { exports: exportsObject, require });
const { advanceRunner } = exportsObject;
let runner = { y: 0, velocity: 0, book: 420, distance: 0 };
let hit = false;
for (let i = 0; i < 180 && !hit; i++) hit = advanceRunner(runner, 1 / 60);
assert.ok(hit, 'A grounded dinosaur must collide with an approaching book');
for (const distance of [0, 20000]) {
  runner = { y: 0, velocity: 390, book: 115, distance };
  let airborneFrames = 0;
  let peak = 0;
  for (let i = 0; i < 60; i++) {
    assert.equal(advanceRunner(runner, 1 / 60), false, 'A timed jump must clear the book at starting and maximum speed');
    if (runner.y > 0) airborneFrames++;
    peak = Math.max(peak, runner.y);
  }
  assert.ok(airborneFrames >= 29 && airborneFrames <= 34, 'Jump should last about half a second');
  assert.ok(peak > 45 && peak < 60, 'Jump should clear books without floating too high');
  assert.equal(runner.y, 0, 'Dinosaur must land back on the ground');
  assert.equal(runner.velocity, 0);
  assert.ok(runner.distance - distance >= 180, 'Running speed must stay above the new starting pace');
}
runner = { y: 0, velocity: 0, book: -30, distance: 1000 };
advanceRunner(runner, 1 / 60);
assert.ok(runner.book >= 420 && runner.book <= 540, 'Next book must spawn with room to jump');
console.log('Desk Dino: collision, jumps, landing, and obstacle spacing passed.');
