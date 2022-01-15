import express from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { GetAllUsersController } from './controllers/GetAllUsersController'

const routes = express.Router()

routes.get("/users", GetAllUsersController.execute)
routes.post("/users", CreateUserController.execute)

export { routes }

