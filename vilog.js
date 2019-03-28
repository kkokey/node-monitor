// import { logger } from 'd3-vilog';
const logger = require('d3-vilog').logger;
 
function gen_data() {
  const fst = [],
    snd = [],
    trd = [],
    fth = [],
    ffth = [],
    r1 = Math.random(),
    r2 = Math.random(),
    r3 = Math.random(),
    r4 = Math.random(),
    r5 = Math.random();
 
  for (var i = 0; i < 100; i++) {
    fst.push([i, r1 * Math.sin(r2 + i / (10 * (r4 + .5)))]);
    snd.push([i, r2 * Math.cos(r3 + i / (10 * (r3 + .5)))]);
    trd.push([i, r3 * Math.sin(r1 + i / (10 * (r2 + .5)))]);
    fth.push([i, r4 * Math.cos(r4 + i / (10 * (r1 + .5)))]);
    ffth.push([i, (r1+r2+r3+r4+r5)/5]);
  }
  return [
    { data: fst, label: 'first sin1' },
    { data: snd, label: 'second cos1' },
    { data: trd, label: 'third sin2' },
    { data: fth, label: 'fourth cos2' },
    { data: ffth, label: 'fifth line' }
  ];
}
 
logger({ data: gen_data(), dest: './', type: 'line', import: 'extern' });
