import t, { File, ImportDeclaration } from '@babel/types';

import { visitor } from './visitor.js';

interface AddDependencyReturns {
  local?: string;
  node: ImportDeclaration;
}

export function addDependency(path: File | any, source: string): AddDependencyReturns;
export function addDependency(path: File | any, source: string, local: string): AddDependencyReturns;
export function addDependency(path: File | any, source: string, local: string, imported: string): AddDependencyReturns;

export function addDependency(
  path: File | any,
  source: string,
  local?: string,
  imported?: string
): AddDependencyReturns {
  const isDefault = local && !imported;

  const isImport = local && imported;

  const isNormal = !local && !imported;

  let declaration;

  let file = path;

  while (file.parentPath) file = file.parentPath;

  file = file.node || file;

  visitor(file, {
    ImportDeclaration(path) {
      if (path.node.source.value != source) return;
      declaration = path.node;
    }
  });

  if (isNormal && declaration)
    return {
      node: declaration
    };

  let specifier = declaration?.specifiers.find((specifier) => {
    if (isDefault) {
      return specifier.type == 'ImportDefaultSpecifier';
    } else if (isImport) {
      return specifier.imported?.name == imported;
    }
  });

  if (specifier)
    return {
      local: specifier.local.name,
      node: declaration
    };

  if (isDefault) {
    specifier = t.importDefaultSpecifier(t.identifier(local));
  } else if (isImport) {
    specifier = t.importSpecifier(t.identifier(local), t.identifier(imported));
  }

  if (declaration) {
    if (isDefault) {
      declaration.specifiers.unshift(specifier);
    } else if (isImport) {
      declaration.specifiers.push(specifier);
    }
  } else {
    declaration = t.importDeclaration(specifier ? [specifier] : [], t.stringLiteral(source));
    // TODO
    (file.program || file).body.unshift(declaration);
  }

  return {
    local,
    node: declaration
  };
}
