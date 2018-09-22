import {IPayload} from '../workers';
import {CubeWorker} from './cube-worker';

export class CubePayload implements IPayload<number> {

    public workerName: string = CubeWorker.name;
    public data: number;

    constructor(data: number) {
        this.data = data;
    }

}
