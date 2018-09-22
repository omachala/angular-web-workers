import {IWorkload} from '../workers';

export class SquareWorkload implements IWorkload<number> {

    public data: number;

    constructor(data: number) {
        this.data = data;
    }
}
