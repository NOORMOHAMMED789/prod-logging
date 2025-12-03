import pino from 'pino'

export const logger = pino({
    level:'info',
    transport: {
        target: 'pino-loki',
        options: {
            batching: true,
            interval: 5,
            host: 'http://localhost:3100',
            labels: { app: 'prod-logging'}
        }
    }
})