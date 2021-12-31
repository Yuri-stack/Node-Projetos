const { DataTypes } = require('sequelize');
import { connection } from '../index'

export const User = connection.define('User', {
  // Atributo da Model são definidos aqui
  name: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  // Outras opções da Model options vão aqui
});