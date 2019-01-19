const Sequelize = require('sequelize');
const UserModel = require('./User');
require('dotenv').config();
const db = new Sequelize(process.env.DATABASE_URL);

const User = UserModel(db, Sequelize);

db.sync().then(() => console.log('Tables Synced')).catch(err => console.error(err));

module.exports = {
  User
}