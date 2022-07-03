// TODO
import fs from 'fs';

export const document = (options) => {
  const name = 'document';
  const finish = (global) => {
    const outputs = [];
    for (const context of global.contexts) {
      const [component, example] = context.directoryPath.split(/[\/|\\]/g).slice(-2);
      for (const output of context.outputs) {
        if (output.name == 'prepare') continue;
        let name = output.name;
        if (name == 'vue' && output.options?.dedicated) name = 'vue-dedicated';
        outputs.push({
          key: example,
          category: name,
          component,
          detail: output.output
        });
      }
      const style = context.outputs
        ?.find((output) => output.name == 'prepare')
        ?.output?.find((snippet) => snippet.key == 'style');
      outputs.push({
        key: example,
        category: 'custom-element',
        component,
        detail: {
          tag: context.componentTag,
          script: context.script,
          style: style?.content
        }
      });
    }
    const raw = JSON.stringify(outputs, null, 2);
    fs.writeFileSync(options?.destination, raw, 'utf8');
  };
  return {
    name,
    finish
  };
};
