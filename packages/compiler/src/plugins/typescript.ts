import { Context } from '@app/types';
import esbuild from 'esbuild';

export const typescript = () => {

    const name = 'typescript';

    const next = (context: Context) => {

        const { code, map, warnings } = esbuild.transformSync(
            context.script || '',
            {
                loader: 'ts'
            }
        );

        context.script = code;
        // console.log(code)
    }

    return {
        name,
        next,
    }
}