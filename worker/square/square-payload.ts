import {IPayload} from '../workers';
import {SquareWorker} from './square-worker';

export class SquarePayload implements IPayload<number> {

    public workerName: string;
    public data: number;

    constructor(data: number) {
        this.data = data;
        this.workerName = SquareWorker.name;
    }

}
