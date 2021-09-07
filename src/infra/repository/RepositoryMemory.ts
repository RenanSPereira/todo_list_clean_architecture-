import Repository from "../../core/repository/Repository";
import Todo from "../../core/entity/Todo";
import AdapterTodo from "../../adapter/AdapterTodo";

export default class RepositoryMemory implements Repository {
    private todos: Array<Todo>

    constructor() {
        this.todos = [{
            id: '123',
            description: 'test',
            finished: true
        }]
    }

    getAll(): Promise<Todo[]> {
        let result : Array<Todo> = []

        this.todos.forEach(todo => {
            result.push(AdapterTodo.create(todo.id, todo.description, todo.finished));
        });
        return Promise.resolve(result)
    }
    
    create(id: string, description: string, finished: boolean): Promise<boolean> {
        this.todos.push(AdapterTodo.create(id, description, finished));
        return Promise.resolve(this.todos.length > 0)
    }
    
    update(todo: Todo): Promise<boolean> {
        const result = this.todos.find(value => {
            if(value.id === todo.id) {
                value.description = todo.description
                value.finished = todo.finished
            }
            return value
        });
        return result !== undefined? Promise.resolve(true): Promise.resolve(false);
    }

    delete(todo: Todo): Promise<boolean> {
        const result = this.todos.find(value => {
            if (todo.id === value.id) {
                this.todos.splice(this.todos.indexOf(value,1));
                return true
            }
        });
        return result? Promise.resolve(true): Promise.resolve(false);  
    }
    
    getByID(id: string): Promise<Todo> {
        const todo = this.todos.find(value => {
            return value.id === id
        });
        if(todo) {
            return Promise.resolve(AdapterTodo.create(todo.id, todo.description, todo.finished));
        }
        return Promise.reject(todo)
    }

}