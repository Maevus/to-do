export interface ITask {
    id: number;
    name: string;
    status: string;
} 

export class Task implements ITask {
    id: number;
    name: string;
    status: string;

}