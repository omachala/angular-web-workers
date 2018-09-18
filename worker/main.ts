import {WorkBroker} from './work-broker';
import {IWorkBroker} from './workers';

export const broker: IWorkBroker = new WorkBroker(self);
addEventListener('message', ($event: MessageEvent) => broker.dispatch($event));
