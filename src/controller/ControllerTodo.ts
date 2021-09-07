import RepositoryMemory from "../infra/repository/RepositoryMemory";
import ListTodos from "../core/useCases/ListTodos";
import RegisterTodo from "../core/useCases/RegisterTodo";
import { UUID } from "../lib/Generics";

export default class ControllerTodo {
    static listTodos() {
        const repository = new RepositoryMemory();
        const listTodos = new ListTodos(repository);
        return listTodos.execute();
    }

    static registerTodo(description: string, finished: boolean) {
        const repository = new RepositoryMemory();
        const registerTodo = new RegisterTodo(repository);
        return registerTodo.execute(UUID(), description, finished);
    }
}