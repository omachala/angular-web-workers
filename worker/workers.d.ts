export interface IWorkBroker {
    dispatch($event: MessageEvent): void;
}

export interface IWorkerFactory {
    getWorker(name: string): IWorker;
}

export interface IPayload<T> {
    name: string;
    data: T;
}

export interface IWorkload<T> {
    name: string;
    data: T;
    error?: string;
}

export interface IWorker {
    process(payload: IPayload<any>): Promise<IWorkload<any>>;
}
