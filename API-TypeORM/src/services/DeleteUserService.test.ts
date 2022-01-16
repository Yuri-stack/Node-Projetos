import { getConnection } from "typeorm"
import createConnection from "../database"

import { DeleteUserService } from "./DeleteUserService"
import { fakeData } from "../utils/fakeData"

describe('DeleteUserService', () => {
    // Execute ANTES de Todos os Testes
    beforeAll(async () => {
        const connection = await createConnection   // Inicia a conexão
        await connection.runMigrations()            // Roda as Migrations
    })

    // Execute DEPOIS de Todos os Testes
    afterAll(async () => {
        const connection = getConnection()          // Pega a conexão ativa
        await connection.close()                    // Fecha a conexão
    })

    it('Deve retornar um array vazio quando o usuário for deletado', async () => {
        const mockUser = await fakeData.createUser();

        const result = await DeleteUserService.execute({ id: mockUser.id })

        expect(result).toHaveLength(0)
    })
})