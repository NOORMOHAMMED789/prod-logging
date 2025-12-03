import fastify from "fastify";
import { userRoutes } from "./routes";

const server = fastify({
    logger: {
        level: 'info',
        transport: {
            target: 'pino-loki',
            options: {
                batching: true,
                interval: 5,
                host: 'http://localhost:3100',
                labels: { app: 'prod-logging'}
            }
        }
    }
});
const PORT = 3000;

server.get('/', async(request, reply) => {
    request.log.info('Root endpoint was called')
    return { message: 'Hello, fastify!'}
})


server.get('/error', async(request, reply) => {
    request.log.info('Error endpoint was called')
    throw new Error('This is a simulated error to test with Grafana')
})

userRoutes(server)

const start = async () => {
    try {
        await server.listen({ port: PORT, host:'0.0.0.0'})
        server.log.info(`Server is running at http://localhost:${PORT}`);
    } catch (err) {
        server.log.info(err);
        process.exit(1);
    }
}


start()