const Sequelize = require('sequelize');
const UserModel = require('./User');
const DATABASE_URL = require('../config').DATABASE_URL;
const db = new Sequelize(DATABASE_URL);

const User = UserModel(db, Sequelize);

db.sync().then(() => console.log('Tables Synced')).catch(err => console.error(err));

module.exports = {
  User
}