import express from "express"
import { router } from "./routes"
const sequelize = require("./config/dbConfig")

const app = express()

app.use(express.json())
app.use(router)

app.listen(3000, async () => {
    await sequelize.sync()
    console.log("Server is running, my friend")
})

