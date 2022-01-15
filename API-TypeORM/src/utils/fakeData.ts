import { v4 as uuid } from "uuid"
import { CreateUserService } from "../services/CreateUserService"

const fakeData = {
    async execute(){
        await CreateUserService.execute({
            id: uuid(),
            name: "Nome do Usuário",
            email: "email@test.com"
        })
    
        await CreateUserService.execute({
            id: uuid(),
            name: "Nome do Usuário 2",
            email: ""
        })
    }
}

export { fakeData }