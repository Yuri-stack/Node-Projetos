import { Request, Response } from "express"
import { GetAllUsersService } from "../services/GetAllUsersService"

const GetAllUsersController = {
    async execute(req: Request ,res: Response){
        const users = await GetAllUsersService.execute()
        return res.status(200).json(users)
    }
}

export { GetAllUsersController }