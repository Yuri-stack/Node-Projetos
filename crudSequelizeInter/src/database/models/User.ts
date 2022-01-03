const { DataTypes } = require('sequelize');
import { connection } from '../index'

export const User = connection.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
})