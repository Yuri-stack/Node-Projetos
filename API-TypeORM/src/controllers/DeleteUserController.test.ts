import createConnection from "../database"
import { getConnection } from "typeorm"

import { makeMockRequest } from "../utils/mocks/mockRequest";
import { makeMockResponse } from "../utils/mocks/mockResponse";
import { fakeData } from "../utils/fakeData";

import { DeleteUserController } from "./DeleteUserController";

describe('DeleteUserController', () => {
    // Execute ANTES de Todos os Testes
    beforeAll(async () => {
        const connection = await createConnection   // Inicia a conexão
        await connection.runMigrations()
    })

    // Execute DEPOIS de Todos os Testes
    afterAll(async () => {
        const connection = getConnection()          // Pega a conexão ativa
        await connection.close()
    })

    it('Deve retornar Status 204 quando usuario for deletado', async() => {
        const mockUser = await fakeData.createUser()

        const request = makeMockRequest({
            params: {
                id: mockUser.id
            }
        })

        const response = makeMockResponse()

        await DeleteUserController.execute(request, response)

        expect(response.state.status).toBe(204)
    })
})