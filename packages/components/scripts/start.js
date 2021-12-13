import { createCompiler } from '@htmlplus/compiler';
import * as plugins from '@htmlplus/compiler/plugins';
import glob from 'glob';
import path from 'path';
import { createServer } from 'vite';
import aliases from 'vite-tsconfig-paths';

const { start, next, finish } = createCompiler(
  plugins.read(),
  plugins.parse(),
  plugins.validate(),
  plugins.extract({
    prefix: 'plus',
  }),
  plugins.scss({
    includePaths: ['./src/styles'],
  }),
  plugins.attach({
    members: true,
    styles: true,
  }),
  plugins.uhtml(),
  plugins.print(),
);

createServer({
  cacheDir: '.cache',
  server: {
    open: true,
  },
  plugins: [
    aliases(),
    {
      name: 'htmlplus',
      async buildStart() {
        await start();
      },
      async load(id) {

        if (id.endsWith('bundle.ts')) 
          return glob
            .sync(path.resolve('./src/**/*.tsx'))
            .map((file) => `import '${file}';`)
            .join('\n');

        if (!id.endsWith('.tsx')) return null;

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