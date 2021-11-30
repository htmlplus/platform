import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import t,{ File, Node } from '@babel/types';
import fs from 'fs-extra';
import { dirname, resolve } from 'path';

// TODO: return type
export const getType = (file: File, node: any, options) => {

    if (!node) return node;

    if (node.type != 'TSTypeReference') return node;

    const { directory } = options;

    let result;

    (traverse.default || traverse)(file, {
        ClassDeclaration(path) {

            if (path.node.id.name != node.typeName.name) return;

            result = path.node;

            path.stop();
        },
        ImportDeclaration(path) {

            for (const specifier of path.node.specifiers) {

                const alias = specifier.local.name;

                if (alias != node.typeName.name) continue;

                let key;

                switch (specifier.type) {

                    case 'ImportNamespaceSpecifier':
                        key = '*';
                        break;

                    case 'ImportDefaultSpecifier':
                        key = 'default';
                        break;

                    case 'ImportSpecifier':
                        key = specifier.imported.name;
                        break;
                }

                try {

                    const filename = resolve(directory, path.node.source.value + '.ts');

                    path.$ast = path.$ast || parse(
                        fs.readFileSync(filename, 'utf8'),
                        {
                            allowImportExportEverywhere: true,
                            plugins: [
                                'typescript'
                            ],
                            ranges: false,
                        }
                    );

                    result = getType(
                        path.$ast,
                        node,
                        {
                            directory: dirname(filename),
                        }
                    );
                }
                catch { }

                path.stop();

                break;
            }
        },
        TSInterfaceDeclaration(path) {

            if (path.node.id.name != node.typeName.name) return;

            result = path.node;

            path.stop();
        },
        TSTypeAliasDeclaration(path) {

            if (path.node.id.name != node.typeName.name) return;

            result = path.node;

            path.stop();
        },
    });

    return result || node;
};