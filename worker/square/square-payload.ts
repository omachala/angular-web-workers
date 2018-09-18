import {IPayload} from '../workers';

export class SquarePayload implements IPayload<number> {

    public data: number;
    public name = 'square';

    constructor(data: number) {
        this.data = data;
    }

}
