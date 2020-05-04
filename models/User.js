const bcrypt = require('bcrypt');

module.exports = (db, Sequelize) => {
  return db.define('user', {
    username: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    favorites: { type: Sequelize.ARRAY(Sequelize.JSON) },
    watchLater: { type: Sequelize.ARRAY(Sequelize.JSON) }
  })

}