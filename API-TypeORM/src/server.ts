import 'reflect-metadata'
import express from 'express'
import { getConnection } from 'typeorm'

import { routes } from './routes'

const connection = getConnection()
const app = express()

app.use(express.json())
app.use(routes)

app.listen(3000, () => {
    console.log("Server is running, my friend")
})