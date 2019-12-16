/*
 * @Author: maoguiun
 * @Date: 2019-12-06 11:36:20
 * @LastEditors: maoguiun
 * @LastEditTime: 2019-12-06 15:40:34
 * @FilePath: \koa-demo\routes\index.js
 */
const router = require("koa-router")();
const users = require("./users");
const upload = require("./upload");

router.use("/users", users.routes(), users.allowedMethods());
router.use("/upload", upload.routes(), upload.allowedMethods());

module.exports = router;
