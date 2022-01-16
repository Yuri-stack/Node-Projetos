import { Request, Response } from "express"
import { DeleteUserService } from "../services/DeleteUserService"

const DeleteUserController = {
    async execute(req: Request ,res: Response){
        const { id } = req.params

        if(id === undefined) return res.status(400).json({ mensagem: 'Informe o ID na rota' })

        await DeleteUserService.execute({ id })

        return res.status(204).json()
    }
}

export { DeleteUserController }