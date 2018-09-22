import {IPayload, IWorkBroker, IWorkerFactory, IWorkload} from './workers';
import {WorkerFactory} from './worker-factory';

export class WorkBroker implements IWorkBroker {

    private webWorkerScope: any;
    private workerFactory: IWorkerFactory;

    constructor(webWorkerScope: any) {
        this.webWorkerScope = webWorkerScope;
        this.workerFactory = new WorkerFactory();
    }

    public dispatch($event: MessageEvent): void {

        const payload: IPayload<any> = $event.data;

        this.workerFactory
            .getWorker(payload.workerName)
            .process(payload)
            .then((w: IWorkload<any>) => this.returnResults(w))
            .catch((w: IWorkload<any>) => {
                throw new Error(w.error ? w.error : 'Worker Error Occurred');
            });
    }

    private returnResults(workload: IWorkload<any>): void {
        this.webWorkerScope.postMessage(workload.data);
    }

}
