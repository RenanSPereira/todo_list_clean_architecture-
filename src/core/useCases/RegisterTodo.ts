import UseCase from "./UseCase";

export default class RegisterTodo extends UseCase {
    
    execute(id: string, description: string, finished: boolean): string {
        const result = this.repository.create(id, description, finished);
        return result? "created": "not created";
    }
}