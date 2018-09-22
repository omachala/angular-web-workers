import {IWorkload} from '../workers';

export class CubeWorkload implements IWorkload<number> {

    public data: number;

    constructor(data: number) {
        this.data = data;
    }
}
