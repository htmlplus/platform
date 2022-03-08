import {
  attach,
  extract,
  parse,
  print,
  reactProxy,
  read,
  sass,
  uhtml,
  validate,
} from '@htmlplus/element/compiler';

export default [
  read(),
  parse(),
  validate(),
  extract({
    prefix: 'plus',
  }),
  sass({
    loadPaths: ['./src/styles'],
  }),
  attach(),
  uhtml(),
  print(),
  reactProxy({
    categorize: true,
    corePackageName: '@htmlplus/components',
    dist: '../ports/react.new',
  }),
];
