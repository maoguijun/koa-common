/*
 * @Author: maoguiun
 * @Date: 2019-12-07 15:41:20
 * @LastEditors: maoguiun
 * @LastEditTime: 2019-12-07 17:30:26
 * @FilePath: \koa-demo\utils\db.js
 */
const Sequelize = require("sequelize");

//方法1:单独传递参数
const sequelize = new Sequelize("koa-demo", "root", "123456", {
  host: "localhost",
  dialect: "mysql" /* 'mysql' | 'mariadb' | 'postgres' | 'mssql' 之一 */,
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const User = sequelize.define(
  "user",
  {
    // 属性
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING
      // allowNull 默认为 true
    }
  },
  {
    // 参数
  }
);

User.sync({ force: true }).then(() => {
  // 现在数据库中的 `users` 表对应于模型定义
  return User.create({
    firstName: "John",
    lastName: "Hancock"
  });
});
