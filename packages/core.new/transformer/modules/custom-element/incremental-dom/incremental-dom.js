import * as common from '../../../plugins/index.js';
import { docs } from '../../docs.js';
import { types } from '../../types.js';
import { vscode } from '../../vscode.js';
import * as local from './plugins/index.js';

export const customElementIncrementalDom = async (config) => {

    const tasks = [
        common.load,
        common.parse,
        common.extract,
        types,
    ];

    const instances = await Promise.all(tasks.map((task) => task(config)));

    const next = async (filename) => {

        const context = {
            filename
        };

        await Promise.all(instances.map((instance) => instance.next(context)));

        // TODO
        context.code = context.code || '';

        return context;
    }

    const finish = async () => {
        await Promise.all(instances.map((instance) => instance.finish()));
    }

    return {
        next,
        finish,
    }
}