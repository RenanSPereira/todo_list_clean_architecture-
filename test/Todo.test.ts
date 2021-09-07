import RepositoryMemory from "../src/infra/repository/RepositoryMemory";
import RegisterTodo from "../src/core/useCases/RegisterTodo";
import FinishTodo from "../src/core/useCases/FinishTodo";

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
