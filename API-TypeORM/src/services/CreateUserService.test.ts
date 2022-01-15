import { getConnection } from "typeorm"
import createConnection from "../database"

import { CreateUserService } from "../services/CreateUserService"

describe('CreateUserService', () => {
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

    it("Deve retornar o id do Usuário criado", async() => {
        const result = await CreateUserService.execute({
            id: "17470844-9239-4878-ab06-8bae31c3c3d1",
            name: "Usuario Service Test",
            email: "email@test.com"
        })

        console.log(result)

        expect(result).toHaveProperty('id')
    })
})