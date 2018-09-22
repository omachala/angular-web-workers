import {Injectable} from '@angular/core';
import {AWorkerService} from './abstract-worker.service';
import {Subject} from 'rxjs';
import {CubePayload} from '../../../worker/cube/cube-payload';

@Injectable({
    providedIn: 'root'
})
export class CubeWorkerService extends AWorkerService {

    public workerSubject: Subject<number>;

    constructor() {
        super();
    }

    public calcCube(base: number) {
        super.process(new CubePayload(base));
    }


}
