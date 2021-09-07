import RepositoryMemory from "../src/infra/repository/RepositoryMemory";
import RegisterTodo from "../src/core/useCases/RegisterTodo";
import FinishTodo from "../src/core/useCases/FinishTodo";
import ListTodos from "../src/core/useCases/ListTodos";

test("should register todo", async ()=> {
    const repository = new RepositoryMemory();
    const createTodo = new RegisterTodo(repository);
    expect(createTodo.execute("asd","Study", false)).toBe("created");
});

test("should finished todo", async ()=> {
    const repository = new RepositoryMemory();
    const createTodo = new RegisterTodo(repository);
    const finishTodo = new FinishTodo(repository);
    expect(createTodo.execute("asd","Study", false)).toBe("created");
    expect(await finishTodo.execute("asd")).toBe("finished");
});

test("should list todo", async ()=> {
    const repository = new RepositoryMemory();
    const listTodos = new ListTodos(repository);
    expect(await listTodos.execute()).toContainEqual({"description": "test", "finished": true, "id": "123"});
});
