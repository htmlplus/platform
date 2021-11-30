import { compiler } from './compiler';
import { docs, extract, incrementalDom, parse, read, scss, type, types, typescript, validate, vscode } from './plugins';

const { start, next, finish } = compiler(
  // cache.load(),
  read(),
  parse(),
  validate(),
  extract({
    prefix: 'plus',
  }),
  typescript(),
  scss({ 
    includePaths: ['./src/styles']
  }),
  incrementalDom({
    dev: true,
    prefix: 'plus',
    dist: './dist/components'
  }),
  type({
    prefix: 'plus',
  }),
  types({
    prefix: 'plus',
    dist: './dist/types'
  }),
  docs({
    prefix: 'plus',
    dist: './dist/json/docs.json',
  }),
  vscode({
    prefix: 'plus',
    dist: './dist/json/html.html-data.json'
  }),
//   {
//     name: 'test',
//     start() {

//     },
//     next(c) {
// c.
//     },
//     finish() {

//     }
//   }
  // write(),
  // cache.save(),
);

(async () => {

  await start();
 
  // await next('C:\\Users\\Samar\\Desktop\\dev\\packages\\core.new\\src\\components\\cropper\\cropper.tsx');
  await next('C:\\Users\\RD110\\Desktop\\dev\\packages\\core.new\\src\\components\\aspect-ratio\\aspect-ratio.tsx');

  await finish();
})();