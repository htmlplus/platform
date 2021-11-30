import fs from 'fs';
import { Context } from '@app/types';

export const read = () => {
    
    const name = 'read';

    const next = (context: Context) => {

        if (!!context.content) return;

        context.content = fs.readFileSync(context.filename, 'utf8');
    }

    return {
        name,
        next,
    }
}