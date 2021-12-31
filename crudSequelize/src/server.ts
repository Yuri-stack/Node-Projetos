import express from "express"
import { sequelize } from "./database/db"
import { router } from "./routes"

const app = express()

app.use(express.json())
app.use(router)

app.listen(3000, async () => {
    await sequelize.sync()
    console.log("Server is running, my friend")
})