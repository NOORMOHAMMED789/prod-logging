import { logger } from "./logger"

export class UserRepository {
    async getAllUsers() {
        logger.info('Fetching all users from UserRepository reporting logs')
        return ['Noor','Mohammed','Noore','Anjuma']
    }
}