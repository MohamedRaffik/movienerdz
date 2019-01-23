const bcrypt = require('bcrypt');

module.exports = (db, Sequelize) => {
  return db.define('user', {
    username: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    favorites: { type: Sequelize.JSON },
    watchLater: { type: Sequelize.JSON }
  }, {
      hooks: {
        beforeCreate: (user) => {
          return bcrypt.hash(user.password, 10)
            .then(hash => { user.password = hash; })
            .catch(err => console.error(err));
        }
      },
      instanceMethods: {
        validPassword: (password) => {
          return bcrypt.compare(password, this.password);
        }
      }
    })
}