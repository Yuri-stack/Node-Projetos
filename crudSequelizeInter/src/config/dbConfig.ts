require('dotenv').config()

module.exports = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
    define: {
        timestamps: true,   // Toda tabela tem um campo createAt e updateAt
        underscored: true   // Defini os nomes das tabelas/colunas em Snake Case(user_group)
    }
}

// A configuração abaixo é usada em casos que você não irá usar Migrations

// const { Sequelize } = require("sequelize")
// require('dotenv').config()

// // Opção 3 de Config.: Passando parametros separadamente
// const sequelize = new Sequelize(
//     process.env.DB_DATABASE,
//     process.env.DB_USERNAME,
//     process.env.DB_PASSWORD, 
//     {
//         // host: process.env.DB_HOST,
//         dialect: "mysql", // Tipo de Banco de Dados
//         port: +process.env.DB_PORT,  // (+) Casting, de String para Number

//         define: {
//             timestamps: true,   // Toda tabela tem um campo createAt e updateAt
//             underscored: true   // Defini os nomes das tabelas/colunas em Snake Case(user_group)
//         }
//     }
// )

// module.exports = sequelize