const Sequelize = require('sequelize');
const UserModel = require('./User');
require('dotenv').config();
const db = new Sequelize("postgres://postgres:```@localhost:5432/postgres");

const User = UserModel(db, Sequelize);

module.exports = {
  User,
  db
}
