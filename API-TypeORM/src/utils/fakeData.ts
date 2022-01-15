import { v4 as uuid } from "uuid"
import { UserService } from "../services/UserService"

const fakeData = {
    async execute(){
        await UserService.createUser({
            id: uuid(),
            name: "Nome do Usuário",
            email: "email@test.com"
        })
    
        await UserService.createUser({
            id: uuid(),
            name: "Nome do Usuário 2",
            email: ""
        })
    }
}

export { fakeData }