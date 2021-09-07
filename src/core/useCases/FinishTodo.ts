import UseCase from "./UseCase";

export default class FinishTodo extends UseCase {
     
    async execute(id: string): Promise<string> {
        let todo = await this.repository.getByID(id);
        todo.finished = true
        const result = await this.repository.update(todo);
        return result? "finished": "not finished";
    }
}