import { FastifyBaseLogger, FastifyInstance } from "fastify";
import { UserRepository } from "./user_repository";

export class UserService {
    constructor(private log: FastifyBaseLogger, private repo: UserRepository) {}

    async getUsers() {
        this.log.info('Fetching user from UserService reporting from UserService');
        return this.repo.getAllUsers();
    }
}