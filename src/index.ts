import fastify from "fastify";

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
    throw new Error('This is a simulated error')
})


const start = async () => {
    try {
        await server.listen({ port: PORT, host:'0.0.0.0'})
        console.log(`Server is running at http://localhost:${PORT}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}


start()