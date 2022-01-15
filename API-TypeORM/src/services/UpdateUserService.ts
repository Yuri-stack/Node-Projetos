import { getRepository } from 'typeorm'
import { User } from '../model/User';

interface IUser {
    id: string
    name: string
    email?: string
}

const UpdateUserService = {
    async execute({ id, name, email }: IUser){
    
        const user = await getRepository(User)
            .createQueryBuilder()
            .update(User)
            .set({ name, email })
            .where("id = :id", { id })
            .execute()

        console.log(user.raw)
        return user.raw
    }
}

export { UpdateUserService }