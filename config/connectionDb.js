const Sequelize = require("sequelize");

const myRegex = /[\w]+:..([\w]+):([\w]+)@([\w.-]+):[\w]+\/([\w]+)/i;

const [_, user, password, host, database] = myRegex.exec(
  process.env.JAWSDB_URL
);

module.exports = {
  sequelize: (sequelize = new Sequelize(database, user, password, {
    host,
    dialect: mysql,
  })),
  Op = Sequelize.Op
};
