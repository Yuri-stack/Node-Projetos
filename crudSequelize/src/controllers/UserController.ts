
import { Request, Response } from "express";
import { User } from "../database/models/UserModel";

export const UserController = {
    async findAll(req: Request, res: Response){
        const users = await User.findAll()
        return users.length > 0 
            ? res.status(200).json(users) 
            : res.status(204).send()    // No Content = Sem conteúdo
    },

    async findOne(req: Request, res: Response){
        const { userId } = req.params
        const user = await User.findOne({
            where: { id: userId }
        })

        return user 
            ? res.status(200).json(user)
            : res.status(404).send()
    },

    async create(req: Request, res: Response){
        const { name, email, age } = req.body

        const user = await User.create({name, email, age})
        return res.status(201).json(user)
    },

    async update(req: Request, res: Response){
        const { userId } = req.params
        const { name, email, age } = req.body

        await User.update({ name, email, age }, { where: { id: userId }})
        return res.status(200).json("Updtaded User")
    },

    async delete(req: Request, res: Response){
        const { userId } = req.params
        await User.destroy({ where: { id: userId } })
        return res.status(200).json("Deleted User")
    },
}