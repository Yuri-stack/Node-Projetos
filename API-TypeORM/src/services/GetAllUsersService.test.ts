import { getConnection } from "typeorm"
import createConnection from "../database"

import { GetAllUsersService } from "../services/GetAllUsersService"
import { fakeData } from "../utils/fakeData"

describe('GetAllUsersService', () => {
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

    it('Deve retornar todos os Usuários cadastrados', async() => {

        await fakeData.execute()    // Espera os dados de testes sejam gerados
        
        const expectedResponse = [
            {
                name: "Nome do Usuário",
                email: "email@test.com"
            },
            {
                name: "Nome do Usuário 2",
                email: ""
            }
        ]

        const result = await GetAllUsersService.listUsers()

        // Esperamos que o resultado entregue pela função, seja a resposta esperada/expectedResponse
        expect(result).toMatchObject(expectedResponse)

    })
})