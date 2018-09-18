import {IPayload, IWorker, IWorkload} from '../workers';
import {SquareWorkload} from './square-workload';

export class SquareWorker implements IWorker {

    static jobName = 'square';

    public process(payload: IPayload<number>): Promise<IWorkload<number>> {
        const result = payload.data * payload.data;
        return Promise.resolve(new SquareWorkload(result));
    }

}
