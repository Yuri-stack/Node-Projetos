import { Request, Response } from "express"
import { User } from "../database/models/User"

export const UserController = {
    async index(req: Request, res: Response){
        const users = await User.findAll()

        return users.length > 0 
            ? res.status(200).json(users) 
            : res.status(204).send()    // No Content = Sem conteúdo
    },

    async store(req: Request, res: Response){
        const { name, email } = req.body

        const user = await User.create({ name, email })
        return res.status(201).json(user)
    }
}