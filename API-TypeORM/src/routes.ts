import express from 'express'
import { UserController } from "./controllers/UserController"

const routes = express.Router()

routes.get("/users", UserController.findAll)

export { routes }

