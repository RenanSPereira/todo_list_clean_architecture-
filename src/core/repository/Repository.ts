import Todo from "../entity/Todo";

export default interface Repository {
    create(id: string, description: string, finished: boolean): Promise<boolean>
    update(todo: Todo): Promise<boolean>
    delete(todo: Todo): Promise<boolean>
    getByID(id: string): Promise<Todo>
    getAll(): Promise<Array<Todo>>
}
