import express from 'express'
import { UserController } from "./controllers/UserController"

const routes = express.Router()

routes.get("/users", UserController.findAll)
routes.post("/users", UserController.create)

export { routes }
