import { createServer } from 'vite';

import compiler, { autoDependencyResolver } from '../../dist/compiler/index.js';
import { attach, extract, parse, print, reactProxy, read, uhtml, validate } from '../../dist/compiler/index.js';

const { start, next, finish } = compiler(
  read(),
  parse(),
  validate(),
  extract(),
  autoDependencyResolver({
    style: {
      extensions: ['css', 'scss'],
      path: '../styles'
      // path: '.'
    }
  }),
  attach({
    typings: false
  }),
  reactProxy({
    dist: 'dist/react-port'
  }),
  uhtml(),
  print()
);

createServer({
  root: 'src/dev',
  server: {
    open: true,
    port: 3500
  },
  resolve: {
    alias: {
      '@htmlplus/element/runtime': '../../dist/runtime/index.js',
      '@htmlplus/element': '../../dist/client/index.js'
    }
  },
  plugins: [
    {
      name: 'htmlplus',
      async buildStart() {
        await start();
      },
      async load(id) {
        if (!id.endsWith('.tsx')) return;
        const { script } = await next(id);
        return script;
      },
      async buildEnd() {
        await finish();
      }
    }
  ]
})
  .then((server) => server.listen())
  .catch((error) => console.log(error));
