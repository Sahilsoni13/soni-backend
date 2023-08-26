import { Sequelize, DataTypes } from "sequelize";
import users from "../models/users.model.js";
import Registration from "../models/registration.model.js";
const sequelize = new Sequelize("student", "root", "123456", {
  host: "localhost",
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
let db = {};
db.users = users(sequelize, DataTypes);
// db.users.sync({force:true})
db.Registration = Registration(sequelize, DataTypes);
//  db.Registration.sync({force:true});
export default db;
