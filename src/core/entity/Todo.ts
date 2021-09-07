export default class Todo {
    id: string;
    description: string;
    finished: boolean;

    constructor(id: string, description: string, finished: boolean) {
        this.id = id;
        this.description = description;
        this.finished = finished;
    }
}