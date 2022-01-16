import { getRepository } from 'typeorm'
import { User } from '../model/User';

interface IUser {
    id: string
}

const DeleteUserService = {
    async execute({ id }: IUser) { 

        const user = await getRepository(User)
            .createQueryBuilder()
            .delete()
            .from(User)
            .where("id = :id", { id })
            .execute()

        console.log(user)
        return user.raw
    }
}

export { DeleteUserService }