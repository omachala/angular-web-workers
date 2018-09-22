import {Component, OnInit} from '@angular/core';
import {SquareWorkerService} from './services/square-worker.service';
import {CubeWorkerService} from './services/cube-worker.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private squareWorkerService: SquareWorkerService,
                private cubeWorkerService: CubeWorkerService) {
    }

    ngOnInit(): void {
        this.squareWorkerService.workerSubject.subscribe((result: number) => console.log('square', result));
        this.cubeWorkerService.workerSubject.subscribe((result: number) => console.log('cube', result));
    }

    public square(value: string) {
        if (value) {
            this.squareWorkerService.calcSquare(parseFloat(value));
        }
    }

    public cube(value: string) {
        if (value) {
            this.cubeWorkerService.calcCube(parseFloat(value));
        }
    }
}
