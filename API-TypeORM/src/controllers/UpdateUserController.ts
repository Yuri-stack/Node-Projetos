import { Request, Response } from "express"
import { UpdateUserService } from "../services/UpdateUserService"

const UpdateUserController = {
    async execute(req: Request ,res: Response){
        const { id, name, email } = req.body

        if(id.length === 0 || name.length === 0) return res.status(400).json({ Messagem: "ID ou Nome inválidos" })

        await UpdateUserService.execute({ id, name, email })

        return res.status(204).json()
    }
}

export { UpdateUserController }