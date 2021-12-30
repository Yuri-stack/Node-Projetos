import { Sequelize } from 'sequelize'

// Config. passando paarametros necessários e opcionais
export const sequelize = new Sequelize(
    process.env.DB_DATABASE,    // Nome do Banco
    process.env.DB_USERNAME,    // Nome do Usuário
    process.env.DB_PASSWORD,    // Senha do Usuário no Banco
    {
        dialect: "mysql",       // Tipo do Banco de Dados 
        port: +process.env.DB_PORT, // Porta do Banco, transformada em Number

        define:{
            underscored: true,  // Definir que os nomes das tabelas e colunas em Snake Case(user_group)
            timestamps: true    // Toda tabela tem um campo createAt e updateAt
        }
    }
)