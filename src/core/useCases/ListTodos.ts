import UseCase from "./UseCase"
import Todo from "../entity/Todo";

export default class ListTodos extends UseCase {
    execute(): Promise<Array<Todo>> {
        return this.repository.getAll();    
    }
}