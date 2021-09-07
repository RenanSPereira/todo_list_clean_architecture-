import Repository from "../repository/Repository";

export default abstract class UseCase {
    protected repository: Repository;
    
    constructor(repository: Repository) {
        this.repository = repository
    }
}