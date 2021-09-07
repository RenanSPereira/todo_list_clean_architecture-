import Todo from "../core/entity/Todo";

export default class AdapterTodo {
    static create(id: string, description: string, finished: boolean) {
        return new Todo(id, description, finished);
    }
}