import {IWorkload} from '../workers';

export class SquareWorkload implements IWorkload<number> {

    public data: number;
    public name = 'square';

    constructor(data: number) {
        this.data = data;
    }
}
