import { Request, Response } from "express"
import { v4 as uuid } from "uuid"
import { CreateUserService } from "../services/CreateUserService"


const CreateUserController = {
    
    async execute(req: Request, res: Response){
        const { name, email } = req.body
        const id = uuid()

        if(name.length === 0) return res.status(400).json({ Messagem: "Nome Obrigatório" })

        const user = await CreateUserService.execute({ id, name, email })

        return res.status(201).json(user)
    }
}

export { CreateUserController }