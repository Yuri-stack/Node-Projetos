import createConnection from "../database"
import { getConnection } from "typeorm"

import { Request } from "express"
import { makeMockResponse } from "../utils/mocks/mockResponse";
import { fakeData } from "../utils/fakeData";

import { UpdateUserController } from "./UpdateUserController";

describe('UpdateUserController', () => {
    // Execute ANTES de Todos os Testes
    beforeAll(async () => {
        const connection = await createConnection   // Inicia a conexão
        await connection.runMigrations()
    })

    // Execute DEPOIS de Todos os Testes
    afterAll(async () => {
        const connection = getConnection()          // Pega a conexão ativa
        await connection.query('DELETE FROM users') // Apaga o Usuario do BD
        await connection.close()
    })

    it('Deve retornar Status 204 quando usuario for editado', async() => {
        const mockUser = await fakeData.createUser()

        const request = {
            body: {
                id: mockUser.id,
                name: 'Usuário Atualizado',
                email: 'email@email.com'
            }
        } as Request

        const response = makeMockResponse()

        await UpdateUserController.execute(request, response)

        expect(response.state.status).toBe(204)
    })
})