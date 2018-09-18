import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SquareWorkerService} from './services/square-worker.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SquareWorkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
