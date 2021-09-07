import RepositoryMemory from "../infra/repository/RepositoryMemory";
import ListTodos from "../core/useCases/ListTodos";

export default class ControllerTodo {
    static listTodos() {
        const repository = new RepositoryMemory();
        const listTodos = new ListTodos(repository);
        return listTodos.execute();
    }
}