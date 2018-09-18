import {IWorker, IWorkerFactory} from './workers';
import {SquareWorker} from './square/square-worker';

export class WorkerFactory implements IWorkerFactory {

    public getWorker(name: string): IWorker {

        // Square Worker
        if (name === SquareWorker.jobName) {
            return new SquareWorker();
        }

        throw new Error(`Worker '${name}' was not found!`);
    }
}
