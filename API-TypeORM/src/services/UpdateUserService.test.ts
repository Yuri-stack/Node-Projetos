import { getConnection } from "typeorm"
import createConnection from "../database"

import { UpdateUserService } from "./UpdateUserService";
import { fakeData } from "../utils/fakeData"

describe('UpdateUserService', () => {
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

    it('Deve editar o nome do usuário', async() => {

        const mockUser = await fakeData.createUser()    
        
        const result = await UpdateUserService.execute({
            id: mockUser.id,
            name: "Nome Atualizado"
        })

        expect(result).toHaveLength(0)
    })
})