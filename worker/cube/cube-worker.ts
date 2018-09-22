import {IPayload, IWorker, IWorkload} from '../workers';
import {CubeWorkload} from './cube-workload';

export class CubeWorker implements IWorker {

    public process(payload: IPayload<number>): Promise<IWorkload<number>> {
        const result = Math.pow(payload.data, 3);
        return Promise.resolve(new CubeWorkload(result));
    }

}
