import {IPayload, IWorker, IWorkload} from '../workers';
import {SquareWorkload} from './square-workload';

export class SquareWorker implements IWorker {

    public process(payload: IPayload<number>): Promise<IWorkload<number>> {
        const result = Math.pow(payload.data, 2);
        return Promise.resolve(new SquareWorkload(result));
    }

}
