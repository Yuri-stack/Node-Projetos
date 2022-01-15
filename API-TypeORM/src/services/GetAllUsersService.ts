import { getRepository } from 'typeorm'
import { User } from '../model/User';

const GetAllUsersService = {
    async listUsers() {

        const users = await getRepository(User)
            .createQueryBuilder('users')
            .select()
            .getMany();

        console.log(users)

        return users
    }
}

export { GetAllUsersService }