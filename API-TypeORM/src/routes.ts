import express from 'express'
import { CreateUserController } from './controllers/CreateUserController'
import { DeleteUserController } from './controllers/DeleteUserController'
import { GetAllUsersController } from './controllers/GetAllUsersController'
import { UpdateUserController } from './controllers/UpdateUserController'

const routes = express.Router()

routes.get("/users", GetAllUsersController.execute)
routes.post("/users", CreateUserController.execute)
routes.put("/user", UpdateUserController.execute)
routes.delete("/user/:id", DeleteUserController.execute)

export { routes }

