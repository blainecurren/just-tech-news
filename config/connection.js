// import the Sequelize constructor from the library
const Sequelize = require("sequelize");

require("dotenv").config();

// create connnection to our databse, pass in your mysql info for username and password
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.USERNAME,
  process.env.PW,
  {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
  }
);

module.exports = sequelize;
