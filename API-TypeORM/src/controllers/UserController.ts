import { Request, Response } from "express"

const UserController = {
    
    findAll(req: Request, res: Response){
        return res.json({ messagem: "Usuarios"})
    }
}

export { UserController }