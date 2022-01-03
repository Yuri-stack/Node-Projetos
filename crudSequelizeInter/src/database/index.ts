const Sequelize = require("sequelize")
const dbConfig = require("../config/dbConfig")

export const connection = new Sequelize(dbConfig)