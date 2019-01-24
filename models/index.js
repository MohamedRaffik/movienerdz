const Sequelize = require('sequelize');
const UserModel = require('./User');
require('dotenv').config();
const DATABASE_URL = process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : 'postgres://postgres:```@localhost:5432/postgres';
const db = new Sequelize(DATABASE_URL);

const User = UserModel(db, Sequelize);

module.exports = {
  User,
  db
}
