import fastify from "fastify";

const server = fastify();
const PORT = 3000;

server.get('/', async(request, reply) => {
    console.log("Received a request at /")
    return { message: 'Hello, fastify!'}
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