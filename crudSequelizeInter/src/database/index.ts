const Sequelize = require("sequelize")
const dbConfig = require("../config/dbConfig")

import { User } from "./models/User"

User.sync()

export const connection = new Sequelize(dbConfig)