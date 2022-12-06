const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

module.exports = db;

// "type": "module",

// import Sequelize from "sequelize";

// const db = new Sequelize("node_react", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// export default db;

