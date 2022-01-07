import { Request, Response } from "express"
import { UserService } from "../services/UserService"

const UserController = {
    
    findAll(req: Request, res: Response){
        return res.json({ messagem: "Usuarios"})
    },

    create(req: Request, res: Response){
        const { name, email } = req.body

        if(name.length === 0) return res.status(400).json({ Messagem: "Verifique os campos" })

        const user = UserService.execute({ name, email })

        return res.json(user)
    }
}

export { UserController }