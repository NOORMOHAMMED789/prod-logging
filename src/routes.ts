import { FastifyInstance } from "fastify";
import { UserService } from "./user_service";
import { UserRepository } from "./user_repository";

export async function userRoutes(app: FastifyInstance) {
    const userRepo = new UserRepository()
    const service = new UserService(app.log, userRepo);

    app.get('/users', async (request, reply) => {
        const users = await service.getUsers();
        return { users };
    })
}