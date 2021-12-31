import express from "express"
import { UserController } from './controllers/UserController';

const router = express.Router()

router.get("/users", UserController.findAll)
router.get("/users/:id", UserController.findOne)
router.post("/users", UserController.create)
router.put("/users/:id", UserController.update)
router.delete("/users/:id", UserController.delete)

export { router }