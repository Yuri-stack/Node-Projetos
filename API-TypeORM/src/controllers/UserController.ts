import { Request, Response } from "express"
import { v4 as uuid } from "uuid"
import { UserService } from "../services/UserService"

const UserController = {
    
    findAll(req: Request, res: Response){
        return res.json({ messagem: "Usuarios"})
    },

    async create(req: Request, res: Response){
        const { name, email } = req.body
        const id = uuid()

        if(name.length === 0) return res.status(400).json({ Messagem: "Verifique os campos" })

        const user = await UserService.createUser({ id, name, email })

        return res.json(user)
    }
}

export { UserController }