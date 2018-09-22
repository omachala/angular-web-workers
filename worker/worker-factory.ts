import {IWorker, IWorkerFactory} from './workers';
import {SquareWorker} from './square/square-worker';
import {CubeWorker} from './cube/cube-worker';

export class WorkerFactory implements IWorkerFactory {

    private workerMap = {
        'SquareWorker': SquareWorker,
        'CubeWorker': CubeWorker
    };

    public getWorker(name: string): IWorker {
        if (this.workerMap[name]) {
            return new this.workerMap[name];
        }
        throw new Error(`Worker ${name} is not registered in WorkerFactory.`);
    }
}
