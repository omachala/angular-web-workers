import {Injectable} from '@angular/core';
import {AWorkerService} from './abstract-worker.service';
import {Subject} from 'rxjs';
import {SquarePayload} from '../../../worker/square/square-payload';

@Injectable({
    providedIn: 'root'
})
export class SquareWorkerService extends AWorkerService {

    public workerSubject: Subject<number>;

    constructor() {
        super();
    }

    public calcSquare(base: number) {
        super.process(new SquarePayload(base));
    }


}
