import express from 'express'
import { GetAllUsersController } from './controllers/GetAllUsersController'
import { UserController } from "./controllers/UserController"

const routes = express.Router()

routes.get("/users", GetAllUsersController.listUsers)
routes.post("/users", UserController.create)

export { routes }

