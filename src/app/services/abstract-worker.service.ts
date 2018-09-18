import {IPayload} from '../../../worker/workers';
import {fromEvent, Subject, Subscription} from 'rxjs';

export abstract class AWorkerService {

    protected workerSubject: Subject<any>;
    protected worker: Worker;
    private readonly workerPath = 'assets/workers/main.js';
    private workerMessageSubscription: Subscription;

    protected constructor() {
        this.initWorker();
    }

    public initWorker(): void {
        try {
            if (!!this.worker === false) {
                this.worker = new Worker(this.workerPath);
                this.workerSubject = new Subject<any>();

                this.workerMessageSubscription = fromEvent(this.worker, 'message')
                    .subscribe((response: MessageEvent) => {
                        if (this.workerSubject) {
                            this.workerSubject.next(response.data);
                        }
                    }, (error) => console.error('WORKER ERROR::', error));
            }
        } catch (exception) {
            console.error(exception);
        }
    }

    protected process(payload: IPayload<any>): void {
        if (this.worker) {
            this.worker.postMessage(payload);
        }
    }


}
