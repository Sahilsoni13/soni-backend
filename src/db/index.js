import { Sequelize, DataTypes } from "sequelize";
import users from "../models/users.model.js";
import staff from "../models/staff.models.js";
import products from "../models/product.models.js";
import verify from "../models/email.verify.js";
import email from "../models/email.verify.js";
import Duperform from "../models/duperform.model.js";
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
db.staff = staff(sequelize, DataTypes);
// db.staff.sync({force:true})
db.products = products(sequelize, DataTypes);
//  db.products.sync({force:true})
db.email = email(sequelize, DataTypes);
//  db.email.sync({force:true})
db.Duperform = Duperform(sequelize,DataTypes);
//  db.Duperform.sync({force:true});
export default db;
  