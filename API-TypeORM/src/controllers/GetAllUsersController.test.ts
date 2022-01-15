import createConnection from "../database"
import { getConnection } from "typeorm"

import { makeMockRequest } from "../utils/mocks/mockRequest";
import { makeMockResponse } from "../utils/mocks/mockResponse";
import { fakeData } from "../utils/fakeData";

import { GetAllUsersController } from "./GetAllUsersController";

describe('GetAllUsersController', () => {
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

    it('Deve retornar Status 200 quando pegar todos os usuarios', async() => {
        await fakeData.execute()

        const request = makeMockRequest({})
        const response = makeMockResponse()

        await GetAllUsersController.listUsers(request, response)

        expect(response.state.status).toBe(200)
    })
})