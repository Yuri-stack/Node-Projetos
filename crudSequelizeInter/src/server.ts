import express from "express"
import { router } from "./routes"

const app = express()

app.use(express.json())
app.use(router)

app.listen(3000, async () => {
    console.log("Server is running, my friend")
})

