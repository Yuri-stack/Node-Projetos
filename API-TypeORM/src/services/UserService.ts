import { getRepository } from 'typeorm'
import { User } from '../model/User';

interface IUser {
    id: string
    name: string
    email?: string
}

const UserService = {
    async createUser({ id, name, email }: IUser) {

        const user = await getRepository(User)
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([
                { id: id, name: name, email: email }
            ])
            .execute();

        return user
    }
}

export { UserService }