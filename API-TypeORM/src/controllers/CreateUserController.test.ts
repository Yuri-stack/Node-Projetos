import createConnection from "../database"
import { getConnection } from "typeorm"
import { Request } from "express"
import { CreateUserController } from "./CreateUserController"
import { makeMockResponse } from "../utils/mocks/mockResponse"

describe("CreateUserController", () => {
    // Execute ANTES de Todos os Testes
    beforeAll(async () => {
        const connection = await createConnection   // Inicia a conexão
        await connection.runMigrations()            // Roda as Migrations
    })

    // Execute DEPOIS de Todos os Testes
    afterAll(async () => {
        const connection = getConnection()          // Pega a conexão ativa
        await connection.query('DELETE FROM users') // Apaga o Usuario do BD
        await connection.close()                    // Fecha a conexão
    })

    // Define que a Response é um MockResponse (Objeto sinumado que criamos)
    const response = makeMockResponse() 

    it("Deve retornar o Status 201 quando o Usuário Criado", async () => {  // Define o teste
        // Define que a Request é um Objeto
        const request = {
            body: {
                name: "usuário",
                email: "email@email.com"
            }
        } as Request    // Falamos para o TypeScript que a request é do tipo Request

        // Espera o Controller criar o Usuário da Request
        await CreateUserController.execute(request, response)  
        
        // Indicamos o que esperamos que o Teste responda
        expect(response.state.status).toBe(201)
    })

    it("Deve retornar o Status 400 quando o nome do Usuário não for informado", async () => {
        const request = {
            body: {
                name: "",
                email: "email@email.com"
            }
        } as Request

        await CreateUserController.execute(request, response)

        expect(response.state.status).toBe(400)
    })

    it("Deve retornar o Status 201 quando o email do Usuário não for informado", async () => {
        const request = {
            body: {
                name: "usuário",
                email: ""
            }
        } as Request

        await CreateUserController.execute(request, response)

        expect(response.state.status).toBe(201)
    })
})