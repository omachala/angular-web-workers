import {Component, OnInit} from '@angular/core';
import {SquareWorkerService} from './services/square-worker.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'web-worker';

    constructor(private squareWorkerService: SquareWorkerService) {
    }

    ngOnInit(): void {
        this.squareWorkerService.workerSubject.subscribe((result: number) => console.log('res', result));
        this.squareWorkerService.calcSquare(10);
    }
}
