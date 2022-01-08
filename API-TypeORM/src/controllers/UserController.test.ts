import createConnection from "../database"
import { Request } from "express"
import { UserController } from "./UserController"
import { makeMockResponse } from "../utils/mocks/mockResponse"

describe("UserController", () => {
    it("Deve retornar o ID do Usuário Criado", async () => {
        const connection = await createConnection
        await connection.runMigrations()

        const response = makeMockResponse()
        
        const request = {
            body: {
                name: "usuário",
                email: "email@email.com"
            }
        } as Request

        const result = await UserController.create(request, response)
        
        console.log(result)
    })
})