const Sequelize = require("sequelize");

const connection = new Sequelize("db_todolist", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connection;
